import { getProducts } from "@/Features/Product.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks";
import React, { useEffect } from "react";

  type SidebarCategoriesProps = {
  setSelectedSubCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
};
export default function SidebarCategories({
  setSelectedSubCategory,
}: SidebarCategoriesProps) {
  const dispatch = useAppDispatch();
  const { products, productDetails, loading } = useAppSelector(
    (store) => store.ProductSlice,
  );
  const electronicsProducts = products.filter(
    (product) => product.category.name === "Electronics",
  );
  const electronicsSubCategories = [
    ...new Map(
      electronicsProducts
        .flatMap((product) => product.subcategory)
        .map((sub) => [sub._id, sub]),
    ).values(),
  ];
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center flex-col gap-4 bg-white py-5 px-8">
        <div>
          <h1 className="text-xl font-bold text-[#333] leading-6">
            Electronics
          </h1>
        </div>
        <div className="flex flex-col gap-5 ">
          {electronicsSubCategories?.map((sub) => (
            <button
              key={sub._id}
              type="button"
              onClick={() => setSelectedSubCategory(sub._id)}
              className="text-textMain text-start hover:text-primary transition-colors duration-300"
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
