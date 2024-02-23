"use client";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import React, { useEffect, useState } from "react";
import { getPost } from "../../../../methods/getPosts";

const PostDetails = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost(setPost, params.id);
  }, [params.id]);
  console.log(post);
  return (
    <TopBarMenu>
      <div className="px-20 mb-20">
        <div className="glass-effect h-3/4 rounded-sm">
          <div>
            <h1 className="text-black text-center text-3xl">
              {post?.post?.title}
            </h1>
            <p className="mt-10 text-xl text-black">{post?.post?.p1}</p>
            <p className="mt-10 text-xl text-black">{post?.post?.p2}</p>
            <p className="mt-10 text-xl text-black">{post?.post?.p3}</p>
            <p className="mt-10 text-xl text-black">{post?.post?.p4}</p>
          </div>
        </div>
      </div>
    </TopBarMenu>
  );
};
export default PostDetails;
