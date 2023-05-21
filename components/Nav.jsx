"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  return (
   
    <nav className="w-full bg-nav p-3 flex justify-between mb-8">

      <Link href="/" className="font-logo text-4xl ms-7">Sellout</Link>
      <button onClick={()=>router.push("/newAd")} className="bg-navBtn rounded-lg h-9 text-white p-3 inline-flex justify-center items-center ">Create new ad</button>
    </nav>
  )
}

export default Nav