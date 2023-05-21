import Image from "next/image"
import Link from "next/link"

const Categories = ({setCategory}) => {
  return (
    <section className=" w-5/6 mx-auto bg-white p-5 rounded-sm">
        <p className="text-center pb-9 text-sm">Or chose your category</p>
        <div className="flex justify-between"> <Link href="/" >
            <Image src="/assets/icons/car.png" width={87} height={87} alt="Search"/>
        </Link>
        <Link data-id="children" onClick={(e)=>{setCategory(e.currentTarget.dataset.id)}} href="/">
            <Image src="/assets/icons/baby-boy.png" width={87} height={87} alt="Search"/>
        </Link>
        <Link data-id="animals" onClick={(e)=>{setCategory(e.currentTarget.dataset.id)}} href="/" >
            <Image src="/assets/icons/dog.png" width={87} height={87} alt="Search"/>
        </Link>
        <Link data-id="computers" onClick={(e)=>{setCategory(e.currentTarget.dataset.id)}} href="/">
            <Image src="/assets/icons/laptop.png" width={87} height={87} alt="Search"/>
        </Link>
        <Link data-id="phones" onClick={(e)=>{setCategory(e.currentTarget.dataset.id)}} href="/">
            <Image src="/assets/icons/smartphone.png" width={87} height={87} alt="Search"/>
        </Link>
        <Link data-id="sport" onClick={(e)=>{setCategory(e.currentTarget.dataset.id)}} href="/">
            <Image src="/assets/icons/sport.png" width={87} height={87} alt="Search"/>
        </Link></div>
       
    </section>
  )
}

export default Categories