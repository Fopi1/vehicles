import { VehicleData } from "@/shared/types";
import { Car, CircleGauge, Cog, Fuel, Heading } from "lucide-react";
import Image from "next/image";

export const VehicleCard = ({ data }: { data: VehicleData }) => {
  const {
    mark_id,
    folder_id,
    year,
    price,
    currency,
    run,
    modification_id,
    gearbox,
    drive,
    images,
    availability,
    owners_number,
    engine_type,
  } = data;

  return (
    <article className="bg-[#fff] w-full rounded-lg">
      <div className="h-full flex flex-col justify-between p-3">
        <header className="relative h-48 w-full rounded-2xl bg-cover bg-center">
          <Image
            src={images.image[0]}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            loading="lazy"
            quality={25}
            alt={`${mark_id} ${folder_id}`}
          />
          <p className="absolute top-1 right-1 bg-green-400 px-2 py-1 rounded-lg">
            {availability}
          </p>
        </header>
        <section>
          <h2 className="text-lg font-bold">
            {mark_id} {folder_id}
          </h2>
          <p className="font-medium">
            {price} {currency}
          </p>
        </section>
        <section className="flex gap-1 py-3">
          <div className="flex flex-col justify-between gap-1">
            <div>
              <span className="font-light text-sm text-gray-500">
                {year},{owners_number}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Car strokeWidth={2.2} />
              <span className="font-normal text-sm text-gray-600">
                {modification_id}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Cog strokeWidth={2.2} />
              <span className="font-normal text-sm text-gray-600">
                {gearbox}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <Fuel strokeWidth={2.2} />
              <span className="font-normal text-sm text-gray-600">
                {engine_type}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Heading strokeWidth={2.2} />
              <span className="font-normal text-sm text-gray-600">
                {drive || "Неизвестно"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CircleGauge />
              <span className="font-normal text-sm text-gray-600">
                {run} км
              </span>
            </div>
          </div>
        </section>
        <footer className="w-full justify-self-end">
          <button className="bg-black text-white rounded-lg py-2 w-full cursor-pointer">
            Подробнее
          </button>
        </footer>
      </div>
    </article>
  );
};
