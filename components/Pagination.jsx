import React from 'react'

const Pagination = ({pagesAmount, page}) => {
const pages = [];
console.log("page", page);
    for(let i=1; i<=pagesAmount; i++){
pages.push(<a className={page===i?"text-red-500 p-2":"p-2"} key={i} href={`/?page=${i}`}>{i}</a>)
// pages.push(<a className={page===i&&"text-red-500 p-2"} key={i} href={`/?page=${i}`}>{i}</a>)
// console.log("i",i, typeof i)
console.log(page)
    }
  return (
    <section className='text-center py-5'>
    <button className='rounded-full h-3 w-3'>&#x2770;</button>
    {pages}
    <button className='border rounded-full h-3 w-3'>&#x2771;</button>
    </section>
  )
}

export default Pagination