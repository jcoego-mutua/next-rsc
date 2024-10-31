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
      style={{ border: "1px solid cyan", padding: "10px" }}
      onClick={handleClick}
    >
      Remove post Button
    </button>
  );
};

export default ButtonRemovePosts;
