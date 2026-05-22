"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import img1 from "../assets/images/intro-banner1.jpg";
import img2 from "../assets/images/intro-banner2.jpg";
export default function Home() {
  return (
    <>
      <section>
        <div className="">
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              speed={1200}
              className="Swiper_hero !h-[689px]"
            >
              <SwiperSlide className="relative">
                <Image
                  src={img1}
                  alt="Image 1"
                  className="w-full h-full object-cover object-[40%_center]"
                />
                <div className="absolute top-[50%] left-[9.3%] right-[20px] mt-[23px] text-left z-10 uppercase transform -translate-y-1/2">
                  <h3
                    className="text-[110px] font-extrabold text-transparent leading-none mb-3"
                    style={{ WebkitTextStroke: "1px white" }}
                  >
                    Running
                  </h3>
                  <h3 className="text-[100px] font-extrabold tracking-[2.5px] text-[#fff] leading-none mb-2">
                    Nike Shoes
                  </h3>
                  <div className="ms-[327px] leading-none">
                    <p className="relative  text-[46px] font-extrabold text-accent">
                      <sup className="me-4 text-2xl text-border font-normal  tracking-wide">
                        Starting at
                      </sup>
                      $159
                    </p>
                  </div>
                  <a
                    href=""
                    className="text-[14px] py-4 px-8 text-white bg-[#333] rounded-[4px] font-semibold flex items-center gap-2 w-fit transition-colors duration-300 hover:bg-[#454545]"
                  >
                    shop collection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <Image
                  src={img2}
                  alt="Image 2"
                  className="w-full h-full object-cover object-[60%_center]"
                />
                <div className="absolute top-[50%] right-[5.35%] mt-[23px] text-right z-10 uppercase transform -translate-y-1/2 ">
                  <p className="relative inline-block text-[46px] font-extrabold text-accent -tracking-[1.25px]">
                    <sup className="me-4 text-2xl text-border font-normal  tracking-wide">
                      From
                    </sup>
                    $120
                  </p>
                  <h3
                    className="text-[110px] font-extrabold text-transparent leading-none mb-3 w-fit"
                    style={{ WebkitTextStroke: "1px white" }}
                  >
                    Fashion
                  </h3>
                  <h3 className="text-[100px] font-extrabold tracking-[2.5px] text-[#fff] leading-none mb-12 w-fit">
                    Sportswear
                  </h3>

                  <a
                    href=""
                    className="text-[14px] py-4 px-8 text-white bg-[#333] rounded-[4px] font-semibold flex items-center gap-2 w-fit transition-colors duration-300 hover:bg-[#454545]"
                  >
                    shop collection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
