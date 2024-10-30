"use server";

export const getPosts = async () => {
  const res = await fetch("http://localhost:8080/posts", {
    //cache: "no-store",
    cache: "force-cache",
  });

  const data = await res.json();
  return data;
};
