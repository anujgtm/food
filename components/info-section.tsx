import Image from "next/image"

export function InfoSection() {
  return (
    <div className="w-full bg-beige rounded-md mt-4 p-6 pb-0 relative overflow-hidden">
      <div className="flex">
        <div className="w-1/4 relative">
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
            These tokens will activate the food transportation device in the Castle, sending each important food group to nourish the people of Foodtopia.
          </p>
          <p className="text-dark font-extralight">
            Visit the four islands and learn all you can. You must pass the Mental Workout Challenge on each island to earn tokens.
          </p>
        </div>
      </div>
    </div>
  )
}
