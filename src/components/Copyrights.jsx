import { FaAmazonPay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaCcStripe } from "react-icons/fa";
const Copyrights = () => {
   return (
      <>
         <div className="bg-black w-full text-white">
            <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row justify-between items-center">
               <p>Copyright © 2021 Rentive By Sohan. All rights reserved.</p>
               <div>
                  <ul className="flex items-center gap-6">
                     <li className="cursor-pointer hover:bg-gray-700 p-2 rounded-full"><FaCcMastercard /></li>
                     <li className="cursor-pointer hover:bg-gray-700 p-2 rounded-full"> <FaCcPaypal /></li>
                     <li className="cursor-pointer hover:bg-gray-700 p-2 rounded-full"><FaCcVisa /></li>
                     <li className="cursor-pointer hover:bg-gray-700 p-2 rounded-full"><FaAmazonPay /></li>
                     <li className="cursor-pointer hover:bg-gray-700 p-2 rounded-full"><FaCcStripe /></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default Copyrights;