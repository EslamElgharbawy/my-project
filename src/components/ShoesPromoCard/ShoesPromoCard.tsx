import Image from 'next/image'
import promoCard5 from "@/assets/images/banner5.jpg";
export default function ShoesPromoCard() {
  return (
    <div>
      <div className="relative h-[557px]">
        <Image
          src={promoCard5}
          alt="promoCard5"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  )
}
