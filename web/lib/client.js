const { createClient } = require("next-sanity");
module.exports = createClient({
  projectId: "05au64a4",
  dataset: "production",
  apiVersion: "2023-06-23",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
