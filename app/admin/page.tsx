import PostList from "@/components/PostList";
import PostForm from "@/components/PostsFrom";
import { getPosts } from "@/lib/getPosts";

const Page = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Admin</h1>
      <div style={{ border: "1px solid aqua", padding: "10px" }}>
        <PostForm />
      </div>
      <br />
      <br />
      <PostList posts={posts} />
    </div>
  );
};

export default Page;
