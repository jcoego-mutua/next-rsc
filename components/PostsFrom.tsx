"use client";

import { createPost } from "@/lib/addPosts";
import { revalidate } from "@/lib/revalidate";

import { useState } from "react";

export const DEFAULT_DATA = {
  title: "",
  description: "",
  content: "",
  category: "",
};

const PostForm = () => {
  const [data, setData] = useState<any>(DEFAULT_DATA);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createPost(data);
    await revalidate("/admin");
    setData(DEFAULT_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          name="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
        />
      </div>
      <div>
        <label>Descritpion</label>
        <input
          value={data.description}
          name="descritpion"
          onChange={(e) => setData({ ...data, description: e.target.value })}
          type="text"
        />
      </div>
      <div>
        <label>Content</label>
        <input
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
          name="content"
          type="text"
        />
      </div>
      <div>
        <label>Category</label>
        <input
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          name="category"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
