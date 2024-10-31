"use client";

import { useState } from "react";

export const DEFAULT_DATA = {
  title: "",
  description: "",
  content: "",
  category: "",
};

const PostForm = () => {
  const [data, setData] = useState<any>(DEFAULT_DATA);

  return (
    <form>
      <div>
        <label>Title</label>
        <input
          name="title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
        />
      </div>
      <div>
        <label>Descritpion</label>
        <input
          name="descritpion"
          onChange={(e) => setData({ ...data, description: e.target.value })}
          type="text"
        />
      </div>
      <div>
        <label>Content</label>
        <input
          onChange={(e) => setData({ ...data, content: e.target.value })}
          name="content"
          type="text"
        />
      </div>
      <div>
        <label>Category</label>
        <input
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
