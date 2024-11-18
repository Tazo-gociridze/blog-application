import { FC } from "react";
import { BlogDataInterface } from "../../../../../data/Home/BlogData";

const BlogText: FC<{data: BlogDataInterface}> = ({data}) => {

  return (
    <div className="mt-[20px]">
      <h2 className="text-[25px] font-[700]">{data.title}</h2>
      <div className="flex gap-[20px] text-[14px] font-[300]">
        <span>{data.blogCreator} /</span>
        <span>{data.createDate} /</span>
        <span>{data.readTime} /</span>
      </div>
      <p className="mt-[20px] text-[15px]">{data.description}</p>
    </div>
  );
};

export default BlogText;
