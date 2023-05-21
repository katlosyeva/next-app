const db = require("@utils/database");

export async function POST(req) {
  let { title, category, price, phone, description, imageUrl, city } =
    await req.json();

  db.execute(
    `INSERT INTO ads (title, category, imageUrl, description, phone, city, price) VALUES ("${title}", "${category}", "${imageUrl}", "${description}", "${phone}", "${city}", "${price}")`
  );

  return new Response({
    message: "The ad is successfully added ",
    status: 200,
  });
}
