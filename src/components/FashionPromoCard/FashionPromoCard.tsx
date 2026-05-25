import Image from 'next/image'
import React from 'react'
import promoCard2 from "@/assets/images/banner2.jpg";

export default function FashionPromoCard() {
  return (
    <div>
      <div className="relative h-[557px]">
        <Image
          src={promoCard2}
          alt="promoCard2"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  )
}
