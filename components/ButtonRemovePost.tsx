"use client";

import { removePost } from "@/lib/removePost";
import { revalidate } from "@/lib/revalidate";

const ButtonRemovePosts = ({ postId }: any) => {
  const handleClick = async () => {
    await removePost(postId);
    await revalidate("/admin");
  };
  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
    >
      Remove Post
    </button>
  );
};

export default ButtonRemovePosts;
