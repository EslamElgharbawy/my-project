"use client";
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
  
  useEffect(() => {
    dispatch(getProductDetails(id as string));
  }, [dispatch]);
  return (
    <>
      <h1>asccac</h1>
    </>
  );
}
