import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
async function Home() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto p-6 bg-white/80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Blog
        </h1>
        <ul className="space-y-6">
          {posts?.map((post: any) => {
            return (
              <li
                key={post.id}
                className="p-6 bg-gradient-to-r  rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={`/${post.id}`} className="block">
                  <h2 className="text-2xl font-semibold text-blue-700 hover:underline mb-2">
                    {post.title}
                  </h2>
                  <span className="text-sm font-medium text-indigo-500 bg-indigo-50 py-1 px-2 rounded-lg">
                    {post.category}
                  </span>
                  <p className="text-gray-700 mb-1">{post.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
