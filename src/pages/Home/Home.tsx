import { FC } from "react";
import FixedWidthWrapper from "../../utils/Fixed-width-wrapper/FixedWidthWrapper";
import Blog from "./views/Blog/Blog";
import PopularFeatures from "./views/PopularFeatures/PopularFeatures";
import useBlogData from "../../customHooks/blog-data/useBlogData";

const Home: FC = () => {

  const {BlogData} = useBlogData()

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
