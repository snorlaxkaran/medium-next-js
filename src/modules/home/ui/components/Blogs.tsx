"use client";

import { Separator } from "@/components/ui/separator";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface BlogsProps {
  title: string;
  content: string;
  createdAt: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then((data) => {
      setBlogs(data.data);
    });
  }, []);
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10">
      {blogs.map((blog, i) => (
        <div key={i} className="flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-semibold">{blog.title}</h1>
          </div>
          <div className="text-neutral-500 font-medium">
            {blog.content.slice(0, 300)}...
          </div>
          <div className="text-neutral-400 font-medium">
            {blog.createdAt.split("T")[0].split("-").join(" ")}
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
