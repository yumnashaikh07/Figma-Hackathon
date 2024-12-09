import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
    return(
        <footer>
            <section className="flex justify-between p-9  h-[142px] shadow-md bg-[#FAFAFA]">
                <div className="text-black font-bold text-3xl">Bandage</div>
            <div className="flex gap-x-3"><FaFacebook className="text-[#23A6F0]" size={24}/><FaInstagram className="text-[#23A6F0]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div>
            </section>
                        <section className="flex justify-between p-16 mx-auto">
                <section className="flex flex-col">
                    <h3 className="text-gray-800 font-bold mb-5">Company Info</h3>
                        <div className="text-gray-500 font-bold"><h5>About Us</h5>
                        <h5>Carrier</h5>
                        <h5>We are hiring</h5>
                        <h5>Blog</h5></div>
                </section>

                <section className="flex flex-col">
                    <h3 className="text-gray-800 font-bold mb-5">Legal</h3>
                        <div className="text-gray-500 font-bold"><h5>About Us</h5>
                        <h5>Carrier</h5>
                        <h5>We are hiring</h5>
                        <h5>Blog</h5></div>
                </section>

                <section className="flex flex-col">
                    <h3 className="text-gray-800 font-bold mb-5">Features</h3>
                        <div className="text-gray-500 font-bold"><h5>Business Marketing</h5>
                        <h5>User Analytic</h5>
                        <h5>Live Chat</h5>
                        <h5>Unlimited Support</h5></div>
                </section>

                <section className="flex flex-col">
                    <h3 className="text-gray-800 font-bold mb-5">Resources</h3>
                        <div className="text-gray-500 font-bold"><h5>IOS & Android</h5>
                        <h5>Watch a Demo</h5>
                        <h5>Customers</h5>
                        <h5>API</h5></div>
                </section>
                <section className="flex flex-col">
                    <h3 className="text-gray-800 font-bold mb-5">Get In Touch</h3>
                        <div className="text-gray-300 ">
    <div className="  flex w-full max-w-sm items-center">
      <Input type="email" placeholder="Your Email" className="py-6 rounded-tl-sm rounded-bl-sm"/>
      <Button type="submit" className=" bg-[#23A6F0] rounded-tr-sm rounded-br-sm py-6">Subscribe</Button>
    </div>
    <h6>lorem ipsum dolor amit</h6>
                        </div>
                </section>
                
            </section>
            <section className="flex justify-start p-11 shadow-inner bg-slate-50">
                <div className="text-gray-500 font-bold text-lg">Made With Love By Finland All Rights Reserved</div></section>
            </footer>

    )
}