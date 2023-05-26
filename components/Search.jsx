"use client"

import Image from "next/image"
import { useState } from "react"
const Search = ({setCity, setQueryWord, setCategory, queryWord}) => {
    const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
    const dropDownHandler = ()=>{
        setDropdownIsOpen((current)=>!current)
       
    }
  const [localCity, setLocalCity] = useState("")
  const [localQueryWord, setLocalQueryWord] = useState("")
 
  const resetFunction = (city, word)=>{
    setCity(localCity);
    setQueryWord(localQueryWord);
    setCategory("");
    setLocalQueryWord("")
  }
  return (
    <section className="flex h-16 w-5/6 mx-auto mb-8 rounded-sm">        
        <input  value = {localQueryWord} onChange={(e)=>setLocalQueryWord(e.target.value)} placeholder="e.g. toy-car" className=" px-4 grow outline-0 border-e-2"></input>
<div className="w-46 border-e-2">
<button id="cities" data-dropdown-toggle="dropdown" onClick={dropDownHandler} className=" h-16 text-sm px-4 py-2.5 text-center inline-flex items-center bg-white" type="button">{localCity?localCity:"Choose a city"} <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

{dropDownIsOpen && <div id="dropdown" className="z-10 relative bg-white  divide-gray-100 shadow border-t-2 dark:bg-gray-700">
    <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    <li  onClick={(e)=>{setLocalCity(""); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All cities</a>
      </li>
      <li data-id="Kyiv" onClick={(e)=>{setLocalCity(e.currentTarget.dataset.id); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kyiv</a>
      </li>
      <li data-id="Dnipro" onClick={(e)=>{setLocalCity(e.currentTarget.dataset.id); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dnipro</a>
      </li>
      <li data-id="Lviv" onClick={(e)=>{setLocalCity(e.currentTarget.dataset.id); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lviv</a>
      </li>
      <li data-id="Odessa" onClick={(e)=>{setLocalCity(e.currentTarget.dataset.id); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Odessa</a>
      </li>
    </ul>
</div>}
</div>
        <button onClick = {()=>{resetFunction(localCity, localQueryWord, localQueryWord)}} className="bg-white p-5">
            <Image src="/assets/icons/search.png" width={27} height={27} alt="Search"/>
        </button>
    </section>
  )
}

export default Search