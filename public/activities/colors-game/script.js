document.addEventListener("DOMContentLoaded", () => {
  // Game data
  const fruitColors = {
    apple: "red",
    banana: "yellow",
    strawberry: "red",
    blueberry: "blue",
  }

  // Game state
  let selectedFruit = null
  let selectedColor = null
  let matches = []

  // DOM elements
  const fruits = document.querySelectorAll(".fruit")
  const colors = document.querySelectorAll(".color")
  const matchesList = document.getElementById("matches-list")
  const checkBtn = document.getElementById("check-btn")
  const resetBtn = document.getElementById("reset-btn")
  const resultModal = document.getElementById("result-modal")
  const resultTitle = document.getElementById("result-title")
  const resultMessage = document.getElementById("result-message")
  const scoreDisplay = document.getElementById("score-display")
  const completeBtn = document.getElementById("complete-btn")

  // Add event listeners to fruits
  fruits.forEach((fruit) => {
    fruit.addEventListener("click", () => {
      // Deselect previously selected fruit
      if (selectedFruit) {
        selectedFruit.classList.remove("selected")
      }

      // Select new fruit
      fruit.classList.add("selected")
      selectedFruit = fruit

      // If both fruit and color are selected, create a match
      if (selectedColor) {
        createMatch()
      }
    })
  })

  // Add event listeners to colors
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      // Deselect previously selected color
      if (selectedColor) {
        selectedColor.classList.remove("selected")
      }

      // Select new color
      color.classList.add("selected")
      selectedColor = color

      // If both fruit and color are selected, create a match
      if (selectedFruit) {
        createMatch()
      }
    })
  })

  // Create a match between selected fruit and color
  function createMatch() {
    const fruitName = selectedFruit.dataset.fruit
    const colorName = selectedColor.dataset.color
    const fruitImg = selectedFruit.querySelector("img").src
    const colorStyle = selectedColor.querySelector(".color-box").style.backgroundColor

    // Check if this fruit is already matched
    const existingMatchIndex = matches.findIndex((match) => match.fruit === fruitName)

    if (existingMatchIndex !== -1) {
      // Update existing match
      matches[existingMatchIndex] = { fruit: fruitName, color: colorName }
    } else {
      // Create new match
      matches.push({ fruit: fruitName, color: colorName })
    }

    // Reset selections
    selectedFruit.classList.remove("selected")
    selectedColor.classList.remove("selected")
    selectedFruit = null
    selectedColor = null

    // Update matches display
    updateMatchesDisplay()
  }

  // Update the matches display
  function updateMatchesDisplay() {
    matchesList.innerHTML = ""

    matches.forEach((match) => {
      const matchItem = document.createElement("div")
      matchItem.className = "match-item"

      const fruitElement = document.querySelector(`.fruit[data-fruit="${match.fruit}"]`)
      const colorElement = document.querySelector(`.color[data-color="${match.color}"]`)

      const fruitImg = fruitElement.querySelector("img").src
      const colorStyle = colorElement.querySelector(".color-box").style.backgroundColor

      matchItem.innerHTML = `
                <img src="${fruitImg}" alt="${match.fruit}">
                <span>${match.fruit}</span>
                <div class="color-indicator" style="background-color: ${colorStyle};"></div>
            `

      matchesList.appendChild(matchItem)
    })
  }

  // Check answers
  checkBtn.addEventListener("click", () => {
    // Check if all fruits are matched
    if (matches.length < fruits.length) {
      alert("Please match all fruits before checking your answers!")
      return
    }

    let correctMatches = 0

    // Check each match
    matches.forEach((match) => {
      if (fruitColors[match.fruit] === match.color) {
        correctMatches++
      }
    })

    // Calculate score
    const score = Math.round((correctMatches / fruits.length) * 100)

    // Update result modal
    if (score === 100) {
      resultTitle.textContent = "Perfect Score!"
      resultMessage.textContent = "You matched all fruits correctly!"
    } else if (score >= 75) {
      resultTitle.textContent = "Great Job!"
      resultMessage.textContent = `You matched ${correctMatches} out of ${fruits.length} fruits correctly!`
    } else if (score >= 50) {
      resultTitle.textContent = "Good Try!"
      resultMessage.textContent = `You matched ${correctMatches} out of ${fruits.length} fruits correctly!`
    } else {
      resultTitle.textContent = "Keep Practicing!"
      resultMessage.textContent = `You matched ${correctMatches} out of ${fruits.length} fruits correctly!`
    }

    scoreDisplay.textContent = `${score}%`

    // Show result modal
    resultModal.classList.add("show")
  })

  // Reset game
  resetBtn.addEventListener("click", () => {
    // Clear selections
    if (selectedFruit) {
      selectedFruit.classList.remove("selected")
      selectedFruit = null
    }

    if (selectedColor) {
      selectedColor.classList.remove("selected")
      selectedColor = null
    }

    // Clear matches
    matches = []
    updateMatchesDisplay()
  })

  // Complete activity
  completeBtn.addEventListener("click", () => {
    // Calculate final score
    let correctMatches = 0
    matches.forEach((match) => {
      if (fruitColors[match.fruit] === match.color) {
        correctMatches++
      }
    })

    const score = Math.round((correctMatches / fruits.length) * 100)

    // Send completion message to parent window
    window.parent.postMessage(
      {
        type: "activity-complete",
        score: score,
      },
      "*",
    )

    // Hide modal
    resultModal.classList.remove("show")
  })

  // Notify parent that activity is loaded
  window.parent.postMessage(
    {
      type: "activity-loaded",
    },
    "*",
  )
})
