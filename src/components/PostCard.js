import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;
  return (
    <Link className="unstyled" href={`/recipe/${post.slug}`}>
      <div className="postCard">
        <h3 className=" text-xl font-bold">{post.title}</h3>
        <p>{post.description}</p>
        <div className="statsContainer">
          <div>
            <h5 className=" text-sm font-bold">Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5 className=" text-sm font-bold">Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
