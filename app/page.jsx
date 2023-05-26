"use client"
import { useEffect } from 'react'
import { useState } from 'react'
import Search from '@components/Search'
import Categories from '@components/Categories'
import Ad from '@components/Ad'
import Pagination from '@components/Pagination'
import { useSearchParams } from 'next/navigation';
import Sorting from '@components/Sorting'
 
 const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [queryWord, setQueryWord] = useState("");
  const [category, setCategory] = useState("")
  // const [page, setPage] = useState()
  const searchParams = useSearchParams();
 
  const page = searchParams.get('page');
  const sorting = searchParams.get('sorting');
 console.log(sorting);
 
 
  useEffect(() => {
    setLoading(true);
    const url = `api/getAds?category=${category}&city=${city}&queryWord=${queryWord}&page=${page||1}${sorting?`&sorting=${sorting}`:""}`;

   console.log("url", url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      
        setData(data);
        setLoading(false);
      });
  }, [category, queryWord, city]);
    const total_num = data&&data[0].full_count;
    const prod_per_page = 2;
    const pagesAmount = Math.ceil(data&&data[0].full_count/2);

  return (

  <section>
      <Search setCity={setCity} setQueryWord={setQueryWord} setCategory={setCategory} queryWord={queryWord} />
      <Categories setCategory={setCategory} setCity={setCity} setQueryWord={setQueryWord} category={category} />
      <Sorting sorting={sorting}/>
      <Ad response = {data}/>
      <Pagination  pagesAmount={pagesAmount} page={+page||1}/>
  </section>
  )
}
export default Home
