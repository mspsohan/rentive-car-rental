import { FaAngleRight, FaFacebookF } from "react-icons/fa";
import Contact from "./Contact";
const Footer = () => {
   return (
      <div className="relative mt-40">

         <div className="py-10 lg:-top-24  lg:absolute left-0 right-0">
            <Contact />
         </div>
         <div className="w-full bg-black text-white px-3">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 px-5 pt-32 pb-5">
               <div className="lg:col-span-4 md:order-1">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/logo-rentive-fix-white.png" alt="" className="w-24" />
                  <p className="pt-5 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore eiusmod tempor.</p>
                  <ul className="flex items-center gap-5">
                     <li className="hover:bg-yellow-500 p-2 rounded-full hover:text-black cursor-pointer bg-gray-900"><FaFacebookF /></li>
                     <li className="hover:bg-yellow-500 p-2 rounded-full hover:text-black cursor-pointer bg-gray-900"><FaFacebookF /></li>
                     <li className="hover:bg-yellow-500 p-2 rounded-full hover:text-black cursor-pointer bg-gray-900"><FaFacebookF /></li>
                     <li className="hover:bg-yellow-500 p-2 rounded-full hover:text-black cursor-pointer bg-gray-900"><FaFacebookF /></li>
                  </ul>
               </div>
               <div className="lg:col-span-2 md:order-3 lg:order-2">
                  <h3 className="text-2xl font-bold pb-4">Quick Links</h3>
                  <ul className="space-y-2">
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight /> About</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Rent</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Reservarion</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Team</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Contact</a></li>
                  </ul>
               </div>
               <div className="lg:col-span-2 md:order-4 lg:order-3">
                  <h2 className="text-2xl font-bold pb-4">Useful Links</h2>
                  <ul className="space-y-2">
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />About</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Rent</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Reservarion</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Team</a></li>
                     <li><a href="/" className="flex items-center gap-2 hover:text-yellow-500"><FaAngleRight />Contact</a></li>
                  </ul>
               </div>
               <div className="lg:col-span-4 md:order-2 lg:order-4">
                  <h2 className="text-2xl font-bold pb-4">Subscribe Our Newslatter</h2>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod volutpat elit nec nisi congue tristique eu at veli ullamcorper condimentum.</p>
                  <div className="grid grid-cols-8 gap-5 mt-5">
                     <input type="email" name="" id="" placeholder="Your Email" className="col-span-5 p-3" />
                     <button className="px-5 py-3 col-span-3 bg-yellow-400 hover:bg-yellow-500 rounded-sm text-black">Subscribe</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;