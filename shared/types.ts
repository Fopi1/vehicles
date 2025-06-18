export type SortType = "default" | "ascending" | "descending";
export type ApiData = {
  data: VehicleData[];
  meta: MetaData;
};
export type VehicleData = {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  year: number;
  price: number;
  currency: string;
  run: number;
  modification_id: string;
  gearbox: string;
  drive: string;
  images: {
    image: string[];
  };
  availability: string;
  owners_number: string;
  engine_type: string;
};

type MetaData = {
  page: number;
  lastPage: number;
};
