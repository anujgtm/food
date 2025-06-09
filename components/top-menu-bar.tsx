import Link from "next/link"

export default function TopMenuBar() {
  return (
    <div className="flex justify-between bg-[#ebe4d8] p-1 btn-rounded">
      <Link href="/" className="w-1/6 m-1 flex">
        <button className="bg-[#006400] hover:bg-[#003a39] text-light px-6 py-3 rounded-md text-sm font-medium flex-1 h-full btn-rounded">
          Welcome!
        </button>
      </Link>
      <Link href="/island/fruit-vegetables" className="w-1/6 m-1 flex">
        <button className="bg-[#006400] hover:bg-[#003a39] text-light px-6 py-3 rounded-md text-sm font-medium flex-1 h-full btn-rounded">
          Fruit & Vegetables
        </button>
      </Link>
      <Link href="/island/grains" className="w-1/6 m-1 flex">
        <button className="bg-[#006400] hover:bg-[#003a39] text-light px-6 py-3 rounded-md text-sm font-medium flex-1 h-full btn-rounded">
          Grain Foods
        </button>
      </Link>
      <Link href="/island/milk" className="w-1/6 m-1 flex">
        <button className="bg-[#006400] hover:bg-[#003a39] text-light px-6 py-3 rounded-md text-sm font-medium flex-1 h-full btn-rounded">
          Milk Products
        </button>
      </Link>
      <Link href="/island/protein" className="w-1/6 m-1 flex">
        <button className="bg-[#006400] hover:bg-[#003a39] text-light px-6 py-3 rounded-md text-sm font-medium flex-1 h-full btn-rounded">
          Protein
        </button>
      </Link>
      <Link href="/island/foodtopia" className="w-1/6 m-1 flex">
        <button className="bg-[#006400] hover:bg-[#003a39] text-light px-6 py-3 rounded-md text-sm font-medium flex-1 h-full btn-rounded">
          Foodtopia Castle
        </button>
      </Link>
      {/*
      <div className="flex justify-between items-center w-full p-4 pl-0 pr-0">
        <img src="/images/topHeaderRounded.png" />
      </div>
      */}
      {/*<div className="flex justify-between items-center w-full p-4">
        <div className="bg-beige text-dark p-4 rounded-md flex-grow mr-2">
          <p className="text-sm font-extralight">
            Top menu bar with buttons (link to foodstuffs, help, restart)- may not be needed?
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-2 rounded-md">
          <div className="relative h-10 w-16">
            <Image
              src="/placeholder.svg?height=40&width=64"
              alt="Food for thought logo"
              width={64}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>*/}
    </div>
  )
}
