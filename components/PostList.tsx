import ButtonRemovePosts from "./ButtonRemovePost";

const PostList = ({ posts }: any) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <ul className="space-y-4">
        {posts?.map((post: any) => {
          return (
            <li
              className="border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              key={post.id}
            >
              <div className="text-xl font-semibold text-indigo-700 mb-1">
                {post.title}
              </div>
              <div className="text-gray-700 mb-4">{post.description}</div>
              <ButtonRemovePosts postId={post.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
