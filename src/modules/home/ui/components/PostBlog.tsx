"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";

interface PostBlogProps {
  title: string;
  content: string;
}

const PostBlog = () => {
  const [title, setTitle] = useState<PostBlogProps["title"]>("");
  const [content, setContent] = useState<PostBlogProps["content"]>("");
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">📝 Write</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>📝 Write a Blog</DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                placeholder="How to fuck your carrier"
                className="col-span-3"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Content
              </Label>
              <Input
                placeholder="Learn web development"
                className="col-span-3"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button
                type="submit"
                onClick={async () => {
                  try {
                    await axios.post(
                      "https://medium-karan.vercel.app/api/posts",
                      {
                        title,
                        content,
                      }
                    );

                    window.location.reload();
                  } catch (error) {
                    console.error("Internal server error", error);
                  }
                }}
              >
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostBlog;
