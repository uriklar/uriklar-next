import sanityClient from "../../uriklarnextapi/client";
import { useRouter } from "next/router";
import { timeSince } from "../../utils";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../../components/block-content/serializers";

export default ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <div className="lg:max-w-screen-md flex flex-col w-full">
      <h1 className="text-sea text-4xl font-bold leading-tight">
        {post.title}
      </h1>
      <div>
        <div className="text-sm text-gray-500 mt-2">
          Published {timeSince(post._createdAt)}
        </div>
      </div>
      <figure>
        <img
          className="mt-3 w-full object-cover"
          style={{ height: "22rem" }}
          src={post.imageUrl}
        ></img>
        <figcaption className="text-gray-500 text-center mt-1 mb-6 font-light">
          Photo by{" "}
          <a
            href={post.mainImageCreditUrl}
            className="underline"
            target="_blank"
          >
            {post.mainImageCreditName}
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com" className="underline" target="_blank">
            Unsplash
          </a>
        </figcaption>
      </figure>
      <div className="text-lg w-full">
        <BlockContent
          blocks={post.body}
          serializers={serializers}
          projectId="qrb0kzyn"
          dataset="production"
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await sanityClient.fetch('*[_type == "post"]');

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug.current },
    })),
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params = {slug: 'my-first-post'}
  const query = `*[_type == "post" && slug.current == $slug]{'imageUrl': mainImage.asset->url, ...}`;
  const posts = await sanityClient.fetch(query, params);

  return { props: { post: posts && posts.length ? posts[0] : null } };
}
