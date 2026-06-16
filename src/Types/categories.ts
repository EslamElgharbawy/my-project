export interface CategoryState {
  categories: ICategory[] | null;
  subCategories: ISubCategory[] | null;
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
export interface ISubCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
