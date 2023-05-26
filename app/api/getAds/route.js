const db = require("@utils/database");

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const city = searchParams.get("city");
  const queryWord = searchParams.get("queryWord");
  const page = searchParams.get("page");
  const sorting = searchParams.get("sorting");
  console.log(page, "page");
  console.log("sorting", sorting);
  let query;
  if (category && queryWord === "" && city === "") {
    query = `SELECT * from ads WHERE ads.category = "${category}" LIMIT 2 OFFSET 0`;
  } else if (queryWord === "" && city && category) {
    query = `SELECT * from ads WHERE ads.city =  "${city}" AND ads.category = "${category}" LIMIT 2 OFFSET 0`;
  } else if (queryWord && city === "" && category) {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%" AND ads.category = "${category}" LIMIT 2 OFFSET 0`;
  } else if (queryWord && city && category === "") {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%" AND ads.city = "${city}" LIMIT 2 OFFSET 0`;
  } else if (queryWord === "" && city && category === "") {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%" AND ads.city = "${city}" LIMIT 2 OFFSET 0`;
  } else if (queryWord && city === "" && category === "") {
    query = `SELECT * from ads WHERE ads.title LIKE "%${queryWord}%" LIMIT 2 OFFSET 0`;
  } else {
    query = `SELECT *, count(*) OVER() AS full_count FROM  ads ${
      sorting ? `ORDER BY price ${query === "descending" ? "DESC" : "ASC"}` : ""
    } LIMIT 2 OFFSET ${page * 2 - 2}`;
  }

  console.log(query);
  const [values] = await db.execute(query);

  return new Response(JSON.stringify(values));
}
