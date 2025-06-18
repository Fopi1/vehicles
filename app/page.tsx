import { VehiclesCardGroup } from "@/features/vehicle/components/vehicles-card-group";
import { Sort } from "@/features/sort/components/sort";
import { AppPagination } from "@/shared/components/app-pagination";
import { fetchData } from "@/services/vehicle";
import { getUrlWithParams } from "@/utils/getUrlWithParams";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<unknown>;
}) {
  const queryParams = await searchParams;
  const url = getUrlWithParams(queryParams);
  const { data: vehicles, meta } = await fetchData(url);
  return (
    <main className="w-full flex items-center justify-center">
      <section className="max-w-screen-3xl w-full flex flex-col gap-5 justify-start">
        <section className="w-full bg-gray-200 rounded-[5px]">
          <Sort queryParams={queryParams} />
        </section>
        <section className="w-full bg-gray-200 rounded-[5px]">
          <VehiclesCardGroup vehicles={vehicles} />
        </section>
        <section className="w-full bg-gray-200 rounded-[5px]">
          <AppPagination
            currentPage={meta.page}
            lastPage={meta.last_page}
            queryParams={queryParams}
          />
        </section>
      </section>
    </main>
  );
}
