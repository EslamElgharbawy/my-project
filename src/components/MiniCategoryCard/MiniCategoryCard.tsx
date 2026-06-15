import { getCategories } from "@/Features/Categoreis.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks";
import { useEffect } from "react";
import BrandCardSkeleton from "../Skeletons/BrandCardSkeleton";
import Image from "next/image";

export default function MiniCategoryCard() {
  const dispatch = useAppDispatch();

  const { categories, loading } = useAppSelector(
    (store) => store.categoriesSlice,
  );
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      {loading ? (
        <BrandCardSkeleton />
      ) : (
        <>
          {categories?.slice(0, 8).map((item) => {
            return (
              <div key={item._id} className="px-5 mb-5 group">
                <a href="#">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-36 h-36 rounded-full  object-cover overflow-hidden group-hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                  />
                </a>
                <h3 className="text-lg font-bold text-[#333] mt-5 text-center hover:text-primary transition-colors duration-300">
                  <a href="#">{item.name}</a>
                </h3>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
