import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

const PagePostDetails = async ({ params, searchParams }: any) => {
  const posts = await getPosts();
  const { postId } = await params;

  const post = posts.find((postItem: any) => postItem.id == postId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white/80 rounded-lg shadow-lg p-8">
        <Link
          className="mb-6 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          href="/"
        >
          {"<< Back"}
        </Link>
        <h1 className="mt-8 text-4xl font-bold text-indigo-700 mb-6">
          {post.title}
        </h1>

        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 py-1 px-3 rounded-lg">
          Category: {post.category}
        </span>

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="text-gray-800 leading-relaxed mb-6 whitespace-pre-line"
        ></div>
      </div>
    </div>
  );
};

export default PagePostDetails;
