export interface CategoryState {
  categories: ICategory[] | null;
  loading: boolean;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}