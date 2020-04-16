import Link from "next/link";

export default function PostPreview({ post }) {
  return (
    <div className="flex">
      <div className="h-32 w-32 overflow-hidden mr-4">
        <img src={post.thumbnail}></img>
      </div>
      <div className="">
        <Link href={`/blog/${post.slug.current}`}>
          <a className="text-xl text-gray-900 font-medium">{post.title}</a>
        </Link>
      </div>
    </div>
  );
}
