"use client"
import { useEffect } from 'react'
import { useState } from 'react'
import Search from '@components/Search'
import Categories from '@components/Categories'
import Ad from '@components/Ad'

 const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [queryWord, setQueryWord] = useState("");
  const [category, setCategory] =useState("")


  
  useEffect(() => {
    setLoading(true);
    let url;
    if(category){
      url ='api/getAds?category=' + category;
    }else if(queryWord&&city){
      url ='api/getAds?city=' + city +'&queryWord=' + queryWord;
      }else if(queryWord===null&&city){
        url ='api/getAds?city=' + city;
      }else if(queryWord&&city===null){
        url ='api/getAds?queryWord=' + queryWord;
      } else {
        url = `api/getAds?category=${category}`;
      }
    
    // const url = category ? 'api/getAds?category=' + category: 'api/getAds';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [category, queryWord, city]);
     

  return (

  <section>
      <Search setCity={setCity} setQueryWord={setQueryWord}/>
      <Categories setCategory={setCategory}/>
      <Ad response = {data}/>
  </section>
  )
}
export default Home
