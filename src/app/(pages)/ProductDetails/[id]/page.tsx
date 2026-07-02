"use client";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { getProductDetails } from "@/Features/Product.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const dispatch = useAppDispatch();
  const { productDetails, loading } = useAppSelector(
    (store) => store.ProductSlice,
  );

  const { id } = useParams();
  console.log(productDetails?.category.slug);

  useEffect(() => {
    dispatch(getProductDetails(id as string));
  }, [dispatch]);
  return (
    <>
      <section>
        <div className="mx-5">
          {productDetails && (
            <BreadCrumb
              currentPage={productDetails.title}
              category={productDetails.category.slug}
              subCategory={productDetails.subcategory[0].slug}
            />
          )}

          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
