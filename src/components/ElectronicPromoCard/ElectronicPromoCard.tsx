import Image from 'next/image'
import promoCard3 from "@/assets/images/banner3.jpg";

export default function ElectronicPromoCard() {
  return (
    <div>
      <div className="relative h-[557px]">
        <Image
          src={promoCard3}
          alt="promoCard3"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  )
}
