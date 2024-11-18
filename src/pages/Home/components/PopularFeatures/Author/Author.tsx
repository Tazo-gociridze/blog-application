import { FC } from "react";
import { useTranslation } from "react-i18next";

const Author: FC = () => {
  const {t} = useTranslation()
  return (
    <div className="flex items-center gap-[15px] cursor-pointer">
      <div className="h-[40px] w-[40px] rounded-[50%] bg-[#b4a9a952]"></div>
      <div className="flex flex-col">
        <span className="text-[15px] font-[500] hover:underline">{t("feature-author")}</span>
        <span className="text-[14px] text-[#5e5757]">{t("author-description")}</span>
      </div>
    </div>
  );
};

export default Author;
