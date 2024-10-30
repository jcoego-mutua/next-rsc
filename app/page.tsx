import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <ul>
        {posts?.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
