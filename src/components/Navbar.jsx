import { useEffect, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import RightSideModal from "./RightSideModal";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
   const [isTrue, setIsTrue] = useState(0);
   const navLinks = <>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li>Our Curs</li>
      <li>Features</li>
      <li>News</li>
      <li>Contact</li>
   </>

   useEffect(() => {

      const handleScroll = () => {
         const { scrollTop, scrollHeight } = document.documentElement;
         const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

         setIsTrue(scrollPercent);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };

   }, [])

   return (
      <>
         <div className={`${isTrue ? "h-[10vh] w-full bg-black z-40 fixed top-0 left-0 right-0 bg-opacity-70" : ""}`}>
            <div className={`${isTrue ? "w-full" : ""} flex z-50 h-[10vh] justify-between items-center max-w-[1260px] mx-auto text-white fixed left-0 right-0 py-3 pl-3 xl:pl-0`}>
               <div>
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/logo-rentive-fix-white.png" alt="" className="w-40" />
               </div>
               <div>
                  <ul className="lg:flex justify-center items-center gap-10 font-semibold tracking-wider hidden">
                     {navLinks}
                  </ul>
               </div>
               <div className="flex items-center gap-6">
                  <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Get Estimate</button>
                  <RightSideModal>
                     <Button className="text-3xl p-2 hover:bg-gray-700 rounded-full"><FiAlignRight className="hover:text-yellow-400" /></Button>
                  </RightSideModal>
               </div>
            </div>
         </div>
      </>
   );
};

export default Navbar;