export interface VendorState {
  vendors: IVendor[] | null;
  loading: boolean;
  error: string | null;
}

export interface IVendor {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IVendorsResponse {
  results: number;
  data: IVendor[];
}

