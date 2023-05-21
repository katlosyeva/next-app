"use client"

import Image from "next/image"
import { useState } from "react"
const Search = ({setQueryWord, setCity}) => {
    const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
    const dropDownHandler = ()=>{
        setDropdownIsOpen((current)=>!current)
        console.log(dropDownIsOpen)
    }
  return (
    <section className="flex h-16 w-5/6 mx-auto mb-8 rounded-sm">        
        <input onChange={(e)=>setQueryWord(e.target.value)} placeholder="e.g. toy-car" className=" px-4 grow outline-0 border-e-2"></input>
<div className="w-46 border-e-2">
<button id="cities" data-dropdown-toggle="dropdown" onClick={dropDownHandler} className=" h-16 text-sm px-4 py-2.5 text-center inline-flex items-center bg-white" type="button">Choose a city <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

{dropDownIsOpen && <div id="dropdown" className="z-10 relative bg-white  divide-gray-100 shadow border-t-2 dark:bg-gray-700">
    <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li data-id="Kyiv" onClick={(e)=>{setCity(e.currentTarget.dataset.id)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kyiv</a>
      </li>
      <li data-id="Dnipro" onClick={(e)=>{setCity(e.currentTarget.dataset.id)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dnipro</a>
      </li>
      <li data-id="Lviv" onClick={(e)=>{setCity(e.currentTarget.dataset.id)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lviv</a>
      </li>
      <li data-id="Odessa" onClick={(e)=>{setCity(e.currentTarget.dataset.id)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Odessa</a>
      </li>
    </ul>
</div>}
</div>
        <button className="bg-white p-5">
            <Image src="/assets/icons/search.png" width={27} height={27} alt="Search"/>
        </button>
    </section>
  )
}

export default Search