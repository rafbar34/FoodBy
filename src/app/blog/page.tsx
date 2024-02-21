"use client";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../../methods/getPosts";
import { SquareCard } from "@/components/UI/SquareCard";
import Link from "next/link";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getPosts(setPosts);
    setIsLoading(false);
  }, []);
  return (
    <TopBarMenu>
      {isLoading && <div>Loading</div>}
      <div className="width-screen flex gap-6 px-20 mt-20">
        {posts &&
          posts?.posts?.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}>
              <SquareCard
                width={"1/2"}
                title={post.title}
              />
            </Link>
          ))}
      </div>
    </TopBarMenu>
  );
};
export default Blog;
