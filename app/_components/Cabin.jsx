import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="grid sm:grid-cols-[3fr_4fr] gap-8 sm:gap-14 md:gap-20 border border-primary-800 py-3 px-4 sm:px-7 md:px-10 mb-12 sm:mb-18 md:mb-24">
      <div className="relative md:scale-[1.15] md:-translate-x-3 h-[240px] sm:h-full">
        <Image src={image} fill className="object-cover" alt={`Cabin ${name}`} />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-5 md:translate-x-[-254px] bg-primary-950 p-3 sm:p-6 pb-1 md:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-300 mb-5 sm:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              Located in the heart of the <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
