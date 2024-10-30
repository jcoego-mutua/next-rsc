import { getPosts } from "@/lib/getPosts";

const PagePostDetails = async ({ params, searchParams }: any) => {
  const posts = await getPosts();
  const { postId } = await params;

  const post = posts.find((postItem: any) => postItem.id == postId);

  return (
    <div>
      title:{post.title}
      <br />
      description:{post.description}
      <br />
      content:{post.content}
      <br />
      category:{post.category}
    </div>
  );
};

export default PagePostDetails;
