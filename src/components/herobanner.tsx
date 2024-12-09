
import { FaFacebook, FaInstagram, FaPhone,  FaRegEnvelope,  FaTwitter, FaYoutube } from "react-icons/fa"  
export default function Herobanner (){
    return(
        <main className=" text-white  text-sm flex text-center justify-between h-[50px]">
              <div className="flex gap-x-1 ml-9"><FaPhone className="mt-4"/><h3 className="mt-3">(225)555-0118</h3></div> 
              <div className="flex  gap-x-1 ml-5 mr-28 "><FaRegEnvelope className="mt-4"/><h3 className="mt-3">michelle.rivera@example.com</h3></div>
                <h3 className=" mr-56 mt-3">Follow Us  and get a chance to win 80% off<span className="font-semibold hover:underline"> ShopNow</span></h3>
        <div className="flex gap-x-3 mr-9 "><h3 className="mt-3">Follow Us  :</h3><FaInstagram className="mt-4"/><FaYoutube className="mt-4"/><FaFacebook className="mt-4"/><FaTwitter className="mt-4"/>
</div>
        </main>
    )
}