import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderNav: FC = () => {
  const {t} = useTranslation()
  return (
    <div className="header-nav flex gap-[20px] font-[400] text-[#555868]">
      <Link to={'/'}>{t("nav-home")}</Link>
      <Link to={'/'}>{t("nav-write")}</Link>
      <Link to={'/'}>{t("nav-about")}</Link>
    </div>
  );
};

export default HeaderNav;
