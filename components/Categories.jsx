"use client"

import Image from "next/image"


const Categories = ({setCategory, setQueryWord, setCity, category}) => {
   
    console.log(category);
    const updateFilter = (categoryid) => {
console.log(category, categoryid)
        if (category==="") {
            setCategory(categoryid);
        } else if(category && category===categoryid) {
            setCategory("");
            console.log("1",category)
        } else if(category&&category!==categoryid) {
            setCategory(categoryid);
        }
        // setCity(""); 
        // setQueryWord("");
    }
    console.log("2",category)
  return (
    <section className=" w-5/6 mx-auto bg-white p-5 rounded-sm">
        <p className="text-center pb-9 text-sm">Or chose your category</p>
        <div className="flex justify-between"> 
        <div  data-id="cars" className={category==="cars" ? "border-b-2 border-nav" : ''} onClick={(e)=>updateFilter(e.currentTarget.dataset.id)}>
            <Image className="mb-5" src="/assets/icons/car.png" width={87} height={87} alt="Search"/>
       
        </div>
        <div className={category==="children" ? "border-b-2 border-nav" : ''} data-id="children" onClick={(e)=>updateFilter(e.currentTarget.dataset.id)} >
            <Image className="mb-5" src="/assets/icons/baby-boy.png" width={87} height={87} alt="Search"/>
        </div>
        <div data-id="animals" className={category==="animals" ? "border-b-2 border-nav": ''} onClick={(e)=>updateFilter(e.currentTarget.dataset.id)} >
            <Image className="mb-5" src="/assets/icons/dog.png" width={87} height={87} alt="Search"/>
            
        </div>
        <div data-id="computers"className={category==="computers" ? "border-b-2 border-nav" : ''} onClick={(e)=>updateFilter(e.currentTarget.dataset.id)} >
            <Image src="/assets/icons/laptop.png" width={87} height={87} alt="Search"/>
           
        </div>
        <div data-id="phones" className={category==="phones" ? "border-b-2 border-nav" : ''} onClick={(e)=>updateFilter(e.currentTarget.dataset.id)} >
            <Image className="mb-5" src="/assets/icons/smartphone.png" width={87} height={87} alt="Search"/>
          
        </div>
        <div data-id="sport" className={category==="sport" ? "border-b-2 border-nav" : ''} onClick={(e)=>updateFilter(e.currentTarget.dataset.id)} >
            <Image className="mb-5" src="/assets/icons/sport.png" width={87} height={87} alt="Search"/>
            
        </div></div>
       
    </section>
  )
}

export default Categories