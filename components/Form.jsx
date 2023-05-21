"use client"
import { useState } from "react";


const Form = ({ ad, setAd, handleSubmit}) => {
   
    const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
    const dropDownHandler = ()=>{
        setDropdownIsOpen((current)=>!current)
        
    }
    const [cityDropDownIsOpen, setCityDropdownIsOpen] = useState(false);
    const cityDropDownHandler = ()=>{
        setCityDropdownIsOpen((current)=>!current)
      
    }
  
  return (

  <section className="flex flex-col bg-white w-5/6 mx-auto p-7 mb-16">

    <p className="text-lg mb-7">Fill in all the neccessary information about your product</p>
    <form onSubmit={handleSubmit}>
    <label className="text-sm block" htmlFor="name">Write the name of the product</label>
      <input onChange={(e)=>setAd({...ad, title:e.target.value})} className="placeholder:text-black bg-backgr opacity-50 h-12 w-3/4 outline-0 px-3 mt-3" type="text" id="name" name="name" placeholder="e.g. toy car"/>
      <label className="mt-7 text-sm block" htmlFor="price">Write the price of the product</label>
      <div className=" bg-backgr opacity-50 h-12 w-2/4 px-3 mt-3 flex justify-between items-center">
      <input onChange={(e)=>setAd({...ad, price:e.target.value})} className="outline-0 bg-backgr opacity-50 " type="text" id="price" name="price" />
      <span>USD</span>
      </div>
      
      <label className="text-sm mt-7 block">Choose the category of the product</label>
    
      <div className="w-2/4 relative mt-3 mb-7">
         <button id="cities" onClick={dropDownHandler} className=" w-full opacity-50 h-12 text-sm px-3 py-2.5 text-center inline-flex items-center bg-backgr " type="button">{ad.category?ad.category:"Choose a city"} <svg className="w-4 h-4 ml-2"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

        {dropDownIsOpen && 
          <div id="dropdown" className="z-10 absolute bg-white top-12 divide-gray-100 shadow border-t-2 dark:bg-gray-700">
    <ul className=" text-sm text-gray-700 dark:text-gray-200">
      <li data-id="children" onClick={(e)=>{setAd({...ad, category:e.currentTarget.dataset.id}); setDropdownIsOpen((current)=>!current); console.log(ad.category)}}>
        <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">For children</a>
      </li>
      <li data-id="cars" onClick={(e)=>{setAd({...ad, category:e.currentTarget.dataset.id});  setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cars</a>
      </li>
      <li data-id="animals" onClick={(e)=>{setAd({...ad, category:e.currentTarget.dataset.id}); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animals</a>
      </li>
      <li data-id="computers" onClick={(e)=>{setAd({...ad, category:e.currentTarget.dataset.id}); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Computers</a>
      </li>
      <li data-id="phones" onClick={(e)=>{setAd({...ad, category:e.currentTarget.dataset.id}); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Phones</a>
      </li>
      <li data-id="sport" onClick={(e)=>{setAd({...ad, category:e.currentTarget.dataset.id}); setDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sport equipment</a>
      </li>
    </ul>
          </div>}
      </div>
      <label className="text-sm block" htmlFor="photo">Enter the photo url</label>
      <input onChange={(e)=>setAd({...ad, imageUrl:e.target.value})} type="text" id="photo" name="photo" className="placeholder:text-black bg-backgr opacity-50 h-12 w-3/4 outline-0 px-3 mt-3" placeholder="e.g. https://www.google.com/url?sa=i&url=https%3A%2F "/>
      <label className="text-sm mt-7 block" htmlFor="description">Write the description of your product</label>
      <textarea onChange={(e)=>setAd({...ad, description:e.target.value})} className=" bg-backgr opacity-50 outline-0 px-3 mt-3" id="description" name="description" rows="4" cols="50">
      </textarea>
      <label className="text-sm mt-7 block" htmlFor="telephone">Write your phone number</label>
      <input onChange={(e)=>setAd({...ad, phone:e.target.value})} className="placeholder:text-black bg-backgr opacity-50 h-12 w-3/4 outline-0 px-3 mt-3" type="text" id="telephone" name="telephone" placeholder="e.g. +380964535010"/>
      <label className="text-sm mt-7 block">Choose your home city</label>
      <div className="w-2/4 relative mt-3 mb-7">
         <button id="cities" onClick={cityDropDownHandler} className=" w-full opacity-50 h-12 text-sm px-3 py-2.5 text-center inline-flex items-center bg-backgr " type="button">{ad.city?ad.city:"Choose a city"}<svg className="w-4 h-4 ml-2"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

          {cityDropDownIsOpen && 
          <div id="dropdown" className="z-10 absolute bg-white top-12 divide-gray-100 shadow border-t-2 dark:bg-gray-700">
           <ul className=" text-sm text-gray-700 dark:text-gray-200">
      <li data-id="Lviv" onClick={(e)=>{setAd({...ad, city:e.currentTarget.dataset.id}); setCityDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lviv</a>
      </li>
      <li data-id="Kyiv" onClick={(e)=>{setAd({...ad, city:e.currentTarget.dataset.id}); setCityDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kyiv</a>
      </li>
      <li data-id="Odessa" onClick={(e)=>{setAd({...ad, city:e.currentTarget.dataset.id}); setCityDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Odessa</a>
      </li>
      <li data-id="Dnipro" onClick={(e)=>{setAd({...ad, city:e.currentTarget.dataset.id}); setCityDropdownIsOpen((current)=>!current)}}>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dnipro</a>
      </li>
           </ul>
          </div>}
      </div>
      <button type="submit" className="bg-navBtn rounded-lg h-9 w-64 text-white p-3 inline-flex justify-center items-center ">Publish this ad</button>
    </form>
  </section>
  )
}

export default Form