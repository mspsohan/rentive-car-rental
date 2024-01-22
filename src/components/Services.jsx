import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Services = () => {
   return (
      <>
         <div className="mt-80 mb-20 max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-3">
            <div>
               <div className="bg-yellow-400 w-[450px] h-[550px] relative">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/happy-couple-choosing-car-in-dealership-salon-woman-pointing-on-car-e1616394658847-860x1024.jpg" alt="" className="h-[550px] w-[450px] absolute bottom-10 left-10" />
               </div>
            </div>
            <div>
               <p className="text-sm text-yellow-500">Rental Service</p>
               <h3 className="text-4xl font-bold pt-2 pb-4">Rental Service With A Wide Range Of Vehicles</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nunc acconvallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metus acbibendum mattis.</p>
               <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="flex gap-4 items-start">
                     <FaHandHoldingDollar className="text-6xl font-bold text-yellow-400" />
                     <div>
                        <h2 className="font-semibold text-2xl mb-1">Competitng Pricing</h2>
                        <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit pretium sollicitudin.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <IoMdCheckmarkCircleOutline className="text-6xl font-bold text-yellow-400" />
                     <div>
                        <h2 className="font-semibold text-2xl mb-1">Competitng Pricing</h2>
                        <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit pretium sollicitudin.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <BsTools className="text-6xl font-bold text-yellow-400" />
                     <div>
                        <h2 className="font-semibold text-2xl mb-1">Competitng Pricing</h2>
                        <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit pretium sollicitudin.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <TfiHeadphoneAlt className="text-6xl font-bold text-yellow-400" />
                     <div>
                        <h2 className="font-semibold text-2xl mb-1">Competitng Pricing</h2>
                        <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit pretium sollicitudin.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Services;