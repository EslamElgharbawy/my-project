import Image from "next/image";
import payment from "../../assets/images/payment.png";
import { useTranslation } from "react-i18next";
export default function Footer2() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 bg-secondary text-[#999] text-[13px]">
        <div className="mx-6">
          <div className="flex justify-between items-center p-2">
            <div>
              <p>{t("footer.copyright")}</p>
            </div>
            <div className="flex justify-center items-center gap-7">
              <p>{t("footer.safePayment")}</p>
              <div>
                <Image src={payment} alt="Safe Payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
