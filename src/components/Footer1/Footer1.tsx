import Image from "next/image";
import logo from "../../assets/images/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
const footerSections = [
  {
    title: "company",
    links: [
      "aboutUs",
      "teamMember",
      "career",
      "contactUs",
      "affilate",
      "orderHistory",
    ],
  },
  {
    title: "myAccount",
    links: [
      "trackOrder",
      "viewCart",
      "signIn",
      "help",
      "myWishlist",
      "privacyPolicy",
    ],
  },
  {
    title: "customerService",
    links: [
      "paymentMethods",
      "moneyBackGuarantee",
      "returns",
      "supportCenter",
      "shipping",
      "termsOfService",
    ],
  },
];
export default function Footer1() {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="footer1-content">
          <div className="mx-6">
            <div className="pt-16 pb-8">
              <div
                className="grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.6fr_1.2fr]
    gap-10
    text-[13px]"
              >
                <div className="">
                  <div className="flex flex-wrap items-center p-3  text-textMain gap-2">
                    <div className="w-full">
                      <a href="#" className="w-48 block">
                        <Image
                          src={logo}
                          alt="Description"
                          className="w-full h-full object-cover"
                        />
                      </a>
                    </div>
                    <div className="w-full">
                      <p>{t("footer.supportText")}</p>
                    </div>
                    <div className="w-full">
                      <a
                        href="tel:18005807777"
                        className="text-lg font-semibold text-secondary hover:underline"
                      >
                        1-800-580-7777
                      </a>
                    </div>
                    <div className="w-full leading-7 mb-3">
                      <p>
                        {t("footer.description")}
                      </p>
                    </div>
                    <div className="w-full flex items-center gap-3 ">
                      <a
                        href="#"
                        className="size-8 rounded-full flex items-center justify-center bg-[#1b4f9b]"
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="text-white size-4"
                        />
                      </a>

                      <a
                        href="#"
                        className="size-8 rounded-full flex items-center justify-center bg-[#00adef]"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="text-white size-4"
                        />
                      </a>

                      <a
                        href="#"
                        className="size-8 rounded-full flex items-center justify-center bg-[#cc0001]"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-white size-4"
                        />
                      </a>

                      <a
                        href="#"
                        className="size-8 rounded-full flex items-center justify-center bg-[#2c567e]"
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className="text-white size-4"
                        />
                      </a>

                      <a
                        href="#"
                        className="size-8 rounded-full flex items-center justify-center bg-[#f96a02]"
                      >
                        <FontAwesomeIcon
                          icon={faPinterestP}
                          className="text-white size-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {footerSections.map((section) => (
                  <div key={section.title} className="flex flex-col p-3">
                    <div className="mb-5 uppercase font-bold text-[14px] text-secondary">
                      {t(`footer.${section.title}`)}
                    </div>

                    <ul className="flex flex-col gap-3 text-textMain">
                      {section.links.map((link) => (
                        <li
                          key={link}
                          className="hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                          {t(`footer.${link}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex justify-center">
                  <div className="p-3">
                    <div>
                      <div className="flex justify-center items-center mb-6 gap-4">
                        <Mail
                          size={57}
                          strokeWidth={1.5}
                          className="text-secondary"
                        />

                        <div>
                          <h2 className="text-base font-semibold transform uppercase text-secondary">
                            {t("footer.subscribe")}
                          </h2>
                          <p className="text-[#999999]">
                            {t("footer.subscribeDescription")}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <input
                          type="email"
                          placeholder={t("footer.emailPlaceholder")}
                          className="bg-[#f0f0f0] placeholder:text-textMain
                           placeholder:focus:text-opacity-0
                            placeholder:focus:transition-all
                             placeholder:focus:duration-300
                              placeholder:focus:ease 
                               text-[#333333]
                                px-4
                                py-2
                                focus:outline-none
                                focus:ring-0 flex-1"
                        />
                        <button className="bg-primary text-white py-3 px-5 rounded hover:bg-opacity-85 transition-colors duration-300 text-sm font-semibold">
                          {t("footer.signUp")}
                        </button>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
