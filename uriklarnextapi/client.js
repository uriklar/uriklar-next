const sanityClient = require("@sanity/client");

export default sanityClient({
  projectId: "qrb0kzyn", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});
