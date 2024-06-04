import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "content/posts/";
  const files = fs.readdirSync(path.join(folder));
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
