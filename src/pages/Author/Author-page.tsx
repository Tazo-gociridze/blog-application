import { FC, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import Blog from "../Home/views/Blog/Blog";
import { useTranslation } from "react-i18next";

const AuthorPage: FC = () => {
  const { t } = useTranslation();
  const [articles, setIsArticles] = useState(true);

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
    <section className="m-auto mt-[40px] w-[900px]">
      <div className="flex gap-x-[20px] rounded-lg border-[1px] border-[#918c8c2f] p-[30px] shadow-lg">
        <div className="h-[120px] w-[120px] rounded-[50%] bg-[#8f8888]"></div>
        <div>
          <h1 className="text-[30px] font-[700]">Jane Doe</h1>
          <p>
            Tech enthusiast, software engineer, and avid blogger. Passionate
            about AI, web development, <br />
            and the future of technology.
          </p>
          <div className="mt-[10px] flex gap-x-[15px] *:cursor-pointer *:rounded-[50%] *:border-[1px] *:p-[10px]">
            <div>
              <CiTwitter />
            </div>
            <div>
              <SlSocialFacebook />
            </div>
            <div>
              <LuLinkedin />
            </div>
            <div>
              <FiGithub />
            </div>
          </div>
          <div className="mt-[10px] flex gap-x-[20px] text-[14px] *:flex *:items-center *:gap-x-[5px]">
            <span>
              <GoPeople /> 1234 Followers
            </span>
            <span>
              <GoPeople /> 567 Following
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[40px] grid grid-cols-[1fr_1fr] text-center *:cursor-pointer *:p-[10px]">
        <div
          onClick={() => setIsArticles(true)}
          className={articles ? `border-[2px]` : ``}
        >
          Articles
        </div>
        <div
          onClick={() => setIsArticles(false)}
          className={articles ? `` : `border-[2px]`}
        >
          About
        </div>
      </div>

      {articles ? (
        <div className="mt-[40px] *:mb-[30px] *:rounded-xl *:border-[1px] *:border-[#b4a9a952] *:shadow-md">
          {BlogData.map((data) => (
            <Blog key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div className="p-[30px] rounded-xl border-[1px] border-[#86828244] shadow-md mt-[40px]">
          <h2 className="text-[18px] font-[500]">About Jane Doe</h2>
          <p className="mt-[10px]">
            Jane Doe is a seasoned software engineer with over a decade of
            experience in web development. She specializes in JavaScript, React,
            and Node.js, and has a keen interest in emerging technologies like
            AI and blockchain. Jane is a frequent speaker at tech conferences
            and contributes to various open-source projects.
          </p>
        </div>
      )}
    </section>
  );
};

export default AuthorPage;
