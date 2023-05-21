const db = require("../utils/database");

module.exports = class Product {
  constructor(id, title, price, phone, description, imageUrl, city) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.phone = phone;
    this.imageUrl = imageUrl;
    this.description = description;
    this.city = city;
  }

  save() {
    return db.execute(
      "INSERT INTO ads (title, price, phone, description, imageUrl, city) VALUES (this.title, this.price, this.phone, this.description, this.imageUrl, this.city)"
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM ads");
  }
};
