import { FaCogs, FaDoorOpen, FaLuggageCart, FaUsers } from "react-icons/fa";

const TopCar = () => {
   return (
      <>
         <div className="max-w-[1260px] mx-auto my-20 px-3">
            <div className="flex justify-between items-end">
               <div>
                  <p className="text-yellow-500">What we Offer</p>
                  <h3 className="text-4xl font-semibold">Top Our Cars</h3>
               </div>
               <div>
                  <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">View All Car</button>
               </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
               <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-sm p-6">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/sport-car-800x636.jpg" alt="" className="h-[300px]" />
                  <h3 className="text-xl font-bold">Bentley Bentayga (2019)</h3>
                  <p className="font-bold text-xl py-5">$67,99<sub className="font-normal">/Day</sub></p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaCogs /> 7900 Mi</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaLuggageCart /> Luggage : 3</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaDoorOpen /> Doors : 2</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaUsers /> Max Passenger : 2</p>
                  <div className="flex gap-5 mt-10">
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Reed More</button>
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Rent a Car --{'>'} </button>
                  </div>
               </div>
               <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-sm p-6">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/car-1-800x668.jpg" alt="" className="h-[300px]" />
                  <h3 className="text-xl font-bold">Bentley Bentayga (2019)</h3>
                  <p className="font-bold text-xl py-5">$67,99<sub className="font-normal">/Day</sub></p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaCogs /> 7900 Mi</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaLuggageCart /> Luggage : 3</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaDoorOpen /> Doors : 2</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaUsers /> Max Passenger : 2</p>
                  <div className="flex gap-5 mt-10">
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Reed More</button>
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Rent a Car --{'>'} </button>
                  </div>
               </div>
               <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-sm p-6">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/silver-car-800x681.jpg" alt="" className="h-[300px]" />
                  <h3 className="text-xl font-bold">Bentley Bentayga (2019)</h3>
                  <p className="font-bold text-xl py-5">$67,99<sub className="font-normal">/Day</sub></p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaCogs /> 7900 Mi</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaLuggageCart /> Luggage : 3</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaDoorOpen /> Doors : 2</p>
                  <p className="flex items-center gap-6 mb-3 text-gray-500"><FaUsers /> Max Passenger : 2</p>
                  <div className="flex gap-5 mt-10">
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Reed More</button>
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Rent a Car --{'>'} </button>
                  </div>
               </div>


            </div>
         </div>
      </>
   );
};

export default TopCar;