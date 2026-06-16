import { Product } from "@/Types/products";
import Image from "next/image";

export default function ProductCard({ title, price, imageCover }: Product) {
  return (
    <>
      <div className="group">
        <div className="relative">
          <a href="">
            <Image
              src={imageCover}
              width={100}
              height={100}
              alt={title}
              className="w-full"
            />
          </a>
          <a
            href="#"
            className="
      absolute bottom-0 left-0 right-0
      bg-primary
      text-white text-center
      py-4
      opacity-0
      transition-all duration-300
      group-hover:opacity-80
      text-sm
      font-semibold
tracking-[-0.35px]
leading-4
    "
          >
            QUICK VIEW
          </a>
        </div>
        <div className="mt-4 text-[#333] text-center relative">
          <a
            href="#"
            className="text-sm font-medium mb-1 px-5 line-clamp-1 hover:text-primary transition-colors duration-300"
          >
            {title}
          </a>
          <div className="relative">
            <span
              className="
              font-semibold
        transition-all duration-300
        group-hover:opacity-0
      "
            >
              ${price}
            </span>

            <a
              href="#"
              className="
        absolute inset-0
        text-primary font-semibold uppercase
        translate-y-3 opacity-0
        transition-all duration-300
        group-hover:translate-y-0
        group-hover:opacity-100
        text-sm
        will-change-transform
      "
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
