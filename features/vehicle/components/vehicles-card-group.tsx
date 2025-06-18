import { VehicleCard } from "./vehicle-card";
import { VehicleData } from "@/shared/types";

interface Props {
  vehicles: VehicleData[];
}
export const VehiclesCardGroup = async ({ vehicles }: Props) => {
  return (
    <section className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.unique_id} data={vehicle}></VehicleCard>
      ))}
    </section>
  );
};
