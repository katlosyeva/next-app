"use client"
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Sorting = ({sorting}) => {
    const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
    const searchParams = useSearchParams();
   

    const dropDownHandler = ()=>{
        setDropdownIsOpen((current)=>!current) 
    }
  return (
    <section className=" my-7 flex h-16 w-5/6 mx-auto rounded-sm bg-white">
      <div  className="flex items-center bg-white px-4 grow outline-0 border-e-2">Sort by:</div>
      <div className="w-52 border-e-2">
        <button data-dropdown-toggle="dropdown" onClick={dropDownHandler} className=" h-16 text-sm px-4 py-2.5 text-center inline-flex items-center bg-white" type="button">{sorting?(sorting==="increasing"?"From low to high":"From high to low"):"Without sorting"} <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

        {dropDownIsOpen && <div id="dropdown" className="z-10 relative bg-white  divide-gray-100 shadow border-t-2 dark:bg-gray-700">
        <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li  onClick={()=>{ setDropdownIsOpen((current)=>!current)}}>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Without sortings</a>
        </li>
        <li data-id="increasing" onClick={()=>{setDropdownIsOpen((current)=>!current)}}>
        <a href="/?sorting=increasing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">From low to high</a>
        </li>
        <li data-id="decreasing" onClick={()=>{setDropdownIsOpen((current)=>!current)}}>
        <a href="/?sorting=decreasing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">From high to low</a>
        </li>
   
        </ul>
        </div>}
      </div>

    </section>
  )
}

export default Sorting