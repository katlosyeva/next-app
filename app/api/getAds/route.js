const db = require("@utils/database");

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const city = searchParams.get("city");
  const queryWord = searchParams.get("queryWord");
  let query;
  if (category) {
    query = `SELECT * from ads WHERE ads.category = "${category}"`;
  } else if (queryWord && city) {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%" AND city = "${city}" `;
  } else if (queryWord === null && city) {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%" AND city = "${city}" `;
  } else if (queryWord && city === null) {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%"`;
  } else {
    query = `SELECT * from ads`;
  }
  console.log("query", query);
  // const query = category
  //   ? `SELECT * from ads WHERE ads.category = "${category}"`
  //   : `SELECT * from ads`;
  console.log("category", category);
  const [values] = await db.execute(query);
  // console.log("values", values);
  return new Response(JSON.stringify(values));
}
