import Image from "next/image";
import promoCard1 from "@/assets/images/banner4.jpg";

export default function HeadphonesCard() {
  return (
    <div>
      <div className="relative h-[557px]">
        <Image
          src={promoCard1}
          alt="promoCard1"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  );
}
