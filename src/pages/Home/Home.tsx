import { FC } from "react";
import FixedWidthWrapper from "../../utils/Fixed-width-wrapper/FixedWidthWrapper";
import Blog from "./views/Blog/Blog";
import PopularFeatures from "./views/PopularFeatures/PopularFeatures";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const { t } = useTranslation();

  const BlogData = [
    {
      id: Math.random(),
      title: `${t("blog-title")}`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },

    {
      id: Math.random(),
      title: `${t("blog-title")} 2`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },

    {
      id: Math.random(),
      title: `${t("blog-title")} 3`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },

    {
      id: Math.random(),
      title: `${t("blog-title")} 4`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },
  ];

  return (
    <section className="mt-[30px]">
      <FixedWidthWrapper className="grid grid-cols-[2fr_1fr] gap-[30px]">
        <div className="*:mb-[30px] *:rounded-xl *:border-[1px] *:border-[#b4a9a952] *:shadow-md">
          {BlogData.map((data) => (
            <Blog key={data.id} data={data} />
          ))}
        </div>
        <PopularFeatures />
      </FixedWidthWrapper>
    </section>
  );
};

export default Home;
