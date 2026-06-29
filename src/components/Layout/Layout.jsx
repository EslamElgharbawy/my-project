"use client";
import "../../i18n";
import Navbar from "../Navbar/Navbar";
import Footer1 from "../Footer1/Footer1";
import Footer2 from "../Footer2/Footer2";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen flex-col flex bg-background">
        <Navbar />
        <main className="flex-1 sm:max-lg:pt-[151px] lg:max-xl:pt-[169px] xl:max-2xl:pt-[239px] 2xl:pt-[115px] ">{children}</main>
        <Footer1 />
        <Footer2 />
      </div> 
    </>
  );
}
