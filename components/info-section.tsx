import Image from "next/image"

export function InfoSection() {
  return (
    <div className="w-full bg-beige rounded-md mt-4 p-6 pb-0 relative overflow-hidden">
      <div className="flex">
        <div className="w-1/4 relative content-end">
          <Image
              src="/images/1_mushroom.png"
              alt="Mushroom character with staff"
              width={150}
              height={160}
              className="object-contain"
            />
        </div>

        <div className="w-3/4 pl-8">
          <p className="text-dark font-extralight mb-4">
            The sneaky Snail has damaged the Castle's food transportation device. Without it, food from the four food group islands cannot reach the people of Foodtopia.
          </p>
          <p className="text-dark font-extralight mb-4">
            Your mission is to:
            <ul className="list-disc pl-5">
              <li>Visit the four Food Group Islands</li>
              <li>Complete the challenges</li>
              <li>Collect tokens</li>
              <li>Repair the machine</li>
            </ul>
          </p>
          <p className="text-dark font-extralight mb-4">
            As you travel, you will learn how food can fuel, build and protect your body.
          </p>
          <p className="text-dark font-extralight mb-4">
            Can you save the day?
          </p>
          <p className="text-dark font-black mb-4">
            Choose an island to begin.
          </p>
        </div>
      </div>
    </div>
  )
}
