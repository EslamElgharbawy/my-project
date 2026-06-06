import { getVendors } from "@/Features/Vendors.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks";
import MiniProductCardSkeleton from "@/MiniProductCardSkeleton";
import Image from "next/image";
import React, { useEffect } from "react";
export default function VendorCard() {
  const dispatch = useAppDispatch();
  const {vendors, loading} = useAppSelector((store) => store.VendorsSlice);

  useEffect(() => {
    dispatch(getVendors());
  }, []);
  return (
    <>
      {loading ? (
        <MiniProductCardSkeleton />
      ) : (
        <>
          {vendors?.slice(0, 5).map((item) => {
            return (
              <div key={item._id} className="flex flex-col gap-5">
                <div className="mt-5 flex items-center justify-center gap-5">
                  <Image src={item.image} alt="Vendor" />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.slug}</p>
                  </div>
                </div>
                <div></div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
