"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CircleAlert, Heart, Scale, User } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/images/ChatGPTImageApr18202602_35_14AM 2.svg";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="bg-background">
          <div className="mx-6">
            <div className="top_bar flex justify-between items-center py-3">
              <div className="top_bar_left flex justify-center items-center gap-6">
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[#666666] hover:text-[#fe4407] transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="mt-1 text-[11px]">Find Wolmart Store</p>
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[#666666] hover:text-[#fe4407] transition-all duration-300"
                >
                  <CircleAlert width={16} height={16} />
                  <p className="mt-1 text-[11px]">Free Standard Shipping</p>
                </a>
              </div>
              <div className="top_bar_right flex justify-center items-center gap-5">
                <div className="switchers flex justify-center items-center gap-5 border-e-2 border-[#CCCCCC80] pe-5">
                  <div>
                    <HoverCard openDelay={100}>
                      <HoverCardTrigger className="text-[11px] text-[#666666] hover:text-[#fe4407] transition-all duration-300 cursor-pointer flex justify-center items-center gap-1">
                        USD
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 26 26"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </HoverCardTrigger>

                      <HoverCardContent className="w-11 p-2 border-none outline-none ring-0 focus:outline-none focus:ring-0 flex justify-center">
                        <ul className="space-y-2">
                          <li className="rounded text-[11px] text-[#666666] hover:text-[#fe4407] transition-all duration-300 cursor-pointer">
                            EUR
                          </li>
                          <li className="rounded text-[11px] text-[#666666] hover:text-[#fe4407] transition-all duration-300 cursor-pointer">
                            USD
                          </li>
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <div>
                    <HoverCard openDelay={100}>
                      <HoverCardTrigger className="text-[11px] text-[#666666] hover:text-[#fe4407] transition-all duration-300 cursor-pointer flex justify-center items-center gap-1">
                        <span>
                          <ReactCountryFlag
                            countryCode="GB"
                            svg
                            style={{
                              width: "14px",
                              height: "14px",
                            }}
                          />
                        </span>
                        ENG
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 26 26"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </HoverCardTrigger>

                      <HoverCardContent className="w-16 p-2 border-none outline-none ring-0 focus:outline-none focus:ring-0 flex justify-center">
                        <ul className="space-y-2">
                          <li className="flex justify-center items-center gap-2 rounded text-[11px] text-[#666666] hover:text-[#fe4407] transition-all duration-300 cursor-pointer">
                            <span>
                              <ReactCountryFlag
                                countryCode="GB"
                                svg
                                style={{
                                  width: "14px",
                                  height: "14px",
                                }}
                              />
                            </span>
                            ENG
                          </li>
                          <li className="flex justify-center items-center gap-2 rounded text-[11px] text-[#666666] hover:text-[#fe4407] transition-all duration-300 cursor-pointer">
                            <span>
                              <ReactCountryFlag
                                countryCode="FR"
                                svg
                                style={{
                                  width: "14px",
                                  height: "14px",
                                }}
                              />
                            </span>
                            FAR
                          </li>
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
                <div className="auth flex justify-center items-center gap-1 text-[#666666] text-[11px]">
                  <a
                    href="/Login"
                    className="flex justify-center items-center gap-1 hover:text-[#fe4407] transition-all duration-300"
                  >
                    <User width={20} height={20} />
                    Sign in
                  </a>
                  <span>/</span>
                  <a
                    href="/SignUp"
                    className="hover:text-[#fe4407] transition-all duration-300"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="logo&taps">
              <div className="flex justify-center items-center">
                <div className="logo w-[20%] p-4 bg-primary flex justify-center items-center">
                  <a href="#">
                    <Image
                      src={logo}
                      alt="logo"
                      className="w-full h-[100px] object-cover"
                    />
                  </a>
                </div>
                <div className="nav-taps w-[80%] bg-secondary">
                  <div className="taps&cart text-white flex justify-between items-center px-10 py-2 border-b-[1px] border-[#EEEEEE12]">
                    <div className="left-side ">
                      <ul className="flex items-center gap-12 text-[14px] font-semibold">
                        <li className="tap-item py-6">
                          <a href="#">Home</a>
                        </li>
                        <li className="tap-item py-6">
                          <a href="#">Shop</a>
                        </li>
                        <li className="tap-item py-6">
                          <a href="#">Vendors</a>
                        </li>
                        <li className="tap-item py-6">
                          <a href="#">Deals</a>
                        </li>
                        <li className="tap-item py-6"></li>
                      </ul>
                    </div>
                    <div className="right-side flex justify-center items-center">
                      <div className="flex justify-center items-center gap-5">
                        <span className="hover:text-primary transition-all duration-300">
                          <a href="" className="h-full">
                            <Scale size={33} strokeWidth={1.5} />
                          </a>
                        </span>
                        <span className="relative hover:text-primary transition-all duration-300">
                          <span className="absolute -top-1 -right-2 w-[18px] h-[18px] bg-accent text-[#272b37] text-[11px] rounded-full flex justify-center items-center">
                            0
                          </span>
                          <a href="">
                            <Heart size={27} />
                          </a>
                        </span>
                      </div>
                      <div className="w-[1px] h-10 bg-[#EEEEEE1A] mx-6"></div>
                      <a
                        href="#"
                        className="flex justify-center items-center gap-4 group  duration-300"
                      >
                        <span>
                          <p className="text-border text-[11px] font-medium group-hover:text-primary transition-all">
                            Shopping Cart
                          </p>
                          <span className="font-bold text-end block group-hover:text-primary transition-all">
                            <span id="Currency">$</span>0.00
                          </span>
                        </span>
                        <span className="relative mb-1 group-hover:text-primary transition-all">
                          <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-accent text-[#272b37] text-[11px] rounded-full flex justify-center items-center">
                            0
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="search&offers flex items-center">
                    <div className="flex items-center px-10 text-[#AAAAAA] w-fit h-[46.2px]">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-0 bg-transparent text-xs font-normal gap-12 p-0"
                          >
                            <p>All Categories</p>
                            <ChevronDown />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>GitHub</DropdownMenuItem>
                          <DropdownMenuItem>Support</DropdownMenuItem>
                          <DropdownMenuItem disabled>API</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                      <div className="w-[1px] h-5 bg-[#EEEEEE1A]"></div>
                      <div>
                        <input type="text" placeholder="Search in..." className="bg-transparent text-[#AAAAAA] placeholder:text-[#AAAAAA] text-xs font-normal ps-10 focus-visible:ring-0
focus-visible:outline-none
focus-visible:border-0"/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </header>
    </>
  );
}
