const db = require("@utils/database");

export default function handler(req, res) {
  const { title, price, phone, description, imageUrl, city } = req.json();
  console.log(req.body);
  console.log(
    "title, price, phone, description, imageUrl, city",
    title,
    price,
    phone,
    description,
    imageUrl,
    city
  );

  //   try {
  //     await db();
  //   } catch (error) {
  //     console.error("DB connection error");
  //   }
  res.status(200).json({ name: "Kate" });
}
