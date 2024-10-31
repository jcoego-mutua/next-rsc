import { ReactNode } from "react";
import ButtonRemovePosts from "./ButtonRemovePost";

const PostList = ({ posts }: any) => {
  return (
    <div>
      <ul>
        {posts?.map((post: any) => {
          return (
            <li
              style={{
                border: "1px solid grey",
                textAlign: "left",
                padding: "10px",
              }}
              key={post.id}
            >
              <div>{post.title}</div>
              <div>{post.description}</div>
              <ButtonRemovePosts postId={post.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
