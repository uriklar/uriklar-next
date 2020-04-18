import sanityClient from "../uriklarnextapi/client";
import PostPreview from "../components/post-preview";
import Newsletter from "../components/newsletter";

const Index = ({ posts }) => {
  return (
    <>
      {/* <Newsletter /> */}
      <div className="lg:w-4/5">
        {posts.map((post) => (
          <PostPreview key={post.slug.current} post={post} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{'imageUrl': mainImage.asset->url, ...}`
  );
  return {
    props: {
      posts,
    },
  };
}

export default Index;
