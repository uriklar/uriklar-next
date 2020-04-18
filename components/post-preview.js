import Link from "next/link";
import { timeSince } from "../utils";

export default function PostPreview({ post }) {
  return (
    <div className="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-post-preview">
      <img
        className="w-full md:w-32 h-32 object-cover object-center border-r-2"
        src={post.imageUrl}
      ></img>
      <div>
        <Link href={`/blog/${post.slug.current}`}>
          <a className="text-xl text-brand-500 font-bold no-underline initial">
            {post.title}
          </a>
        </Link>
        <div className="text-xs text-gray-500 mt-1 font-light">
          Published {timeSince(post._createdAt)}
        </div>
        <p className="w-5/6 leading-normal mt-2 text-gray-800 text-light text-sm lg:h-16 lg:pb-6">
          {post.excerpt && post.excerpt.length > 254
            ? `${post.excerpt.slice(0, 254)}...`
            : post.excerpt}
        </p>
        <Link href={`/blog/${post.slug.current}`}>
          <a className="block text-sm text-brand-500 no-underline mt-2 initial">
            Read more &#8594;
          </a>
        </Link>
      </div>
    </div>
  );
}
