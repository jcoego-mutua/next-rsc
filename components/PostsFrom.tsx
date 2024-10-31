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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          name="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <input
          value={data.description}
          name="description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Content</label>
        <textarea
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
          name="content"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <input
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          name="category"
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
