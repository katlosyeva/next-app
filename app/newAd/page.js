"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const NewAd = () => {
  const router = useRouter();

  const [ad, setAd] = useState({
    title: "",
    price: "",
    phone: "",
    description: "",
    imageUrl: "",
    city: "",
    category: "",
  });

  const createAd = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/newAd", {
        method: "POST",
        body: JSON.stringify({
          title: ad.title,
          category: ad.category,
          price: ad.price,
          phone: ad.phone,
          description: ad.description,
          imageUrl: ad.imageUrl,
          city: ad.city,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      throw new Error({ message: "Failed to fetch data" });
    }
  };

  return <Form ad={ad} setAd={setAd} handleSubmit={createAd}></Form>;
};

export default NewAd;
