import Link from "next/link"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"



export default function Headertype2 (){
    return(
        <main>
              <header className="bg-white flex text-center py-7 p-28 justify-between h-24 ">
      <div className="text-black font-bold text-3xl">Bandage</div>
      <nav>
        <ul className="flex gap-x-7 text-lg">
          <li>
            <Link href={"/"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/product"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Product
            </Link>
          </li>
          <li>
            <Link href={"/pricing"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Pricing
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Contact
            </Link>
          </li>
        </ul>
         </nav>
         <div className="flex gap-x-3 text-[#23A6F0] ">
        <h3 className="font-semibold mt-1">Login</h3><Button className="text-white bg-[#23A6F0]">Become a member <ArrowRight/></Button></div>
   
            </header>
        </main>
    )
}