import Image from "next/image"


const data = [{id:1, title:"Pram in a red color", price:"35", phone:"0963496289", description:"Esse ut incididunt Lorem cillum ullamco minim. Labore mollit velit consectetur et eu excepteur sint deserunt aliqua nulla ullamco eiusmod duis occaecat. Nostrud eiusmod cillum commodo commodo anim Lorem Lorem consequat.",
 imageurl:"https://www.pramcentre.co.uk/images/venicci-soft-3in1-black-chassis-denim-red-p5390-48309_image.jpg", city:"Lviv", category:"Children"},{id:2, title:"Laptop with a mouse", price:"650", phone:"0963496289", description:"Esse ut incididunt Lorem cillum ullamco minim. Labore mollit velit consectetur et eu excepteur sint deserunt aliqua nulla ullamco eiusmod duis occaecat. Nostrud eiusmod cillum commodo commodo anim Lorem Lorem consequat.",
 imageurl:"https://www.pramcentre.co.uk/images/venicci-soft-3in1-black-chassis-denim-red-p5390-48309_image.jpg", city:"Lviv", category:"Laptops"}]



 const Ad = ({response}) => {
  console.log(response)
  return (
    response && (<div className="py-10">
{response.map(ad=>
  <section  key={ad.id} className=" bg-white w-5/6 mx-auto mb-7 flex relative rounded-sm">
    <p className="absolute -right-1 -top-1 bg-green-300 uppercase font-bold p-1 text-slate-600 text-xs rounded-sm">{ad.category}</p>
<Image src="https://www.pramcentre.co.uk/images/venicci-soft-3in1-black-chassis-denim-red-p5390-48309_image.jpg" width={250} height={250} alt="Item"/>
    <div>
    
    <h1 className=" text-slate-700 text-2xl my-3">{ad.title}</h1>
    <p>${ad.price}</p>
    <p className="font-bold text-slate-600 text-xs mt-3">DESCRIPTION</p>
    <p>{ad.description}</p>
    <p className="font-bold text-slate-600 text-xs mt-3">PHONE</p>
    <p>{ad.phone}</p>
    <p className="font-bold text-slate-600 text-xs mt-3">CITY</p>
    <p className="mb-3">{ad.city}</p>
    </div>
    </section>
    )}


    </div>)
  )
}

export default Ad

