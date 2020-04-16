import sanityClient from "../uriklarnextapi/client";
import PostPreview from "../components/post-preview";

const Index = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostPreview key={post.slug.current} post={post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const posts = await sanityClient.fetch('*[_type == "post"]');
  return {
    props: {
      posts,
    },
  };
}

export default Index;
