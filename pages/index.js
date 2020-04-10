import PostPreview from "../components/post-preview";

const fetch = require("node-fetch");

const Index = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostPreview post={post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@uriklar"
  );
  const response = await res.json();

  return {
    props: {
      posts: response.items,
    },
  };
}

export default Index;
