import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPostMetadata";
import path from "path";

export async function getStaticPaths() {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return { props: { post: post.data, content: post.content } };
}

function getPostContent(slug) {
  const folder = "content/posts/";
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export default function RecipePage({ post, content }) {
  return (
    <main>
      <article>
        <h1 className="">{post.title}</h1>
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
