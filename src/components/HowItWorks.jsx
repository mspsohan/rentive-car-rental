import { FaCar } from "react-icons/fa";

const HowItWorks = () => {
   return (
      <>
         <div className="max-w-[1260px] mx-auto my-20">
            <div className="text-center">
               <p className="text-yellow-400">HOW IT WORKS</p>
               <h3 className="text-5xl font-semibold">Make It Happens In 4 Steps</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
               <div className="text-center group">
                  <div className="flex justify-center items-center overflow-hidden">
                     <div className="w-[150px] h-[150px] border-2 border-yellow-300 flex justify-center items-center group-hover:bg-yellow-300">
                        <FaCar className="text-7xl" />
                     </div>
                  </div>
                  <h4 className="text-xl font-bold my-5 group-hover:text-yellow-300">Select Your Car</h4>
                  <p className="px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center items-center overflow-hidden">
                     <div className="w-[150px] h-[150px] border-2 border-yellow-300 flex justify-center items-center group-hover:bg-yellow-300">
                        <FaCar className="text-7xl" />
                     </div>
                  </div>
                  <h4 className="text-xl font-bold my-5 group-hover:text-yellow-300">Select Your Car</h4>
                  <p className="px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center items-center overflow-hidden">
                     <div className="w-[150px] h-[150px] border-2 border-yellow-300 flex justify-center items-center group-hover:bg-yellow-300">
                        <FaCar className="text-7xl" />
                     </div>
                  </div>
                  <h4 className="text-xl font-bold my-5 group-hover:text-yellow-300">Select Your Car</h4>
                  <p className="px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center items-center overflow-hidden">
                     <div className="w-[150px] h-[150px] border-2 border-yellow-400 flex justify-center items-center group-hover:bg-yellow-300">
                        <FaCar className="text-7xl" />
                     </div>
                  </div>
                  <h4 className="text-xl font-bold my-5 group-hover:text-yellow-400">Select Your Car</h4>
                  <p className="px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
               </div>

            </div>
         </div>
      </>
   );
};

export default HowItWorks;