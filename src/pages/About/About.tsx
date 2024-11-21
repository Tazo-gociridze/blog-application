import { Button } from "@/components/ui/button";
import { defaultStyles } from "@/data/defaultStyles/DefaultStyles";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FC } from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <section className="m-auto mt-[40px] w-[900px]">
      <div className="text-center">
        <h1 className="text-[35px] font-[700]">About bitBlogs</h1>
        <p className="text-[18px] tracking-[1px]">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>
      <div className="mt-[40px] grid grid-cols-[1fr_1fr] gap-[30px]">
        <div className="place-self-center">
          <h2 className="text-[32px] font-[500]">Our Mission</h2>
          <p className="mt-[10px] tracking-[1px]">
            At bitBlogs, we believe in the power of shared knowledge. Our
            mission is to create a platform where tech enthusiasts, developers,
            and innovators can come together to share ideas, learn from each
            other, and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <Avatar className="">
          <AvatarImage className="" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="mt-[40px]">
        <h2 className="text-center text-[30px] font-[500]">What We Offer</h2>
        <div className="mt-[40px] grid grid-cols-[1fr_1fr_1fr] gap-[20px]">
          <div className="rounded-lg border-[1px] border-[#918c8c88] p-[30px] shadow-lg">
            <FaBookOpen className="text-[30px] text-[#3D61FF]" />
            <h3 className="mt-[10px] text-[20px] font-[500]">Rich Content</h3>
            <p className="mt-[10px]">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </p>
          </div>
          <div className="rounded-lg border-[1px] border-[#918c8c88] p-[30px] shadow-lg">
            <FaBookOpen className="text-[30px] text-[#3D61FF]" />
            <h3 className="mt-[10px] text-[20px] font-[500]">Rich Content</h3>
            <p className="mt-[10px]">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </p>
          </div>
          <div className="rounded-lg border-[1px] border-[#918c8c88] p-[30px] shadow-lg">
            <FaBookOpen className="text-[30px] text-[#3D61FF]" />
            <h3 className="mt-[10px] text-[20px] font-[500]">Rich Content</h3>
            <p className="mt-[10px]">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[40px] rounded-lg border-[1px] border-[#918c8c8a] p-[30px] shadow-lg">
        <h2 className="text-[28px] font-[500]">Our Story</h2>
        <p className="mt-[20px]">
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world. <br />
          <br />
          Today, bitBlogs is proud to be a leading platform for
          technology-focused content, fostering innovation and collaboration in
          the ever-evolving world of tech.
        </p>
      </div>

      <div className="mt-[40px] flex-col text-center mb-[100px]">
        <h2 className="text-[30px] font-[500]">Join Us on Our Journey</h2>
        <p className="mt-[10px]">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
        <Link to={"/signup"}>
          <Button className={`${defaultStyles.button} mt-[10px]`}>
            Get Started Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default About;
