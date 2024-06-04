import getPostMetadata from "@/utils/getPostMetadata";
import SearchView from "@/components/SearchView";

export async function getStaticProps() {
  const postMetadata = getPostMetadata();
  return { props: { postMetadata } };
}

export default function Home({ postMetadata }) {
  return (
    <main>
      <SearchView postMetadata={postMetadata} />
    </main>
  );
}
