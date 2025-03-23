// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Link from "next/link";
import PostBlog from "./PostBlog";

export const HomeNavbar = () => {
  return (
    <nav className="px-2 md:px-10 py-2">
      <div className="flex justify-between">
        <div>
          <Image src={"/logo.svg"} width={100} height={100} alt="Logo" />
        </div>
        <div className="flex gap2 items-center">
          <PostBlog />
        </div>
      </div>
    </nav>
  );
};
