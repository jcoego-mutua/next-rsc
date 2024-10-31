import PostList from "@/components/PostList";
import PostForm from "@/components/PostsFrom";
import { getPosts } from "@/lib/getPosts";

const Page = async () => {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
          Admin Panel
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Create New Post
          </h2>
          <PostForm />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Post List
          </h2>
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Page;
