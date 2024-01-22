import { CiCalendar } from "react-icons/ci";
const LatestNews = () => {
   return (
      <>
         <div className="max-w-[1260px] mx-auto mt-40 mb-20 px-3 lg:px-0">
            <div className="flex justify-between items-end">
               <div>
                  <p className="text-yellow-500">OUR NEWS</p>
                  <h3 className="text-4xl font-semibold">Latest News</h3>
               </div>
               <div>
                  <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">View All News</button>
               </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
               <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/couple-with-catalog-buying-car-at-dealership-salon-e1616637267577.jpg" alt="" className="h-[300px]" />
                  <div className="p-5">
                     <h3 className="text-xl font-bold hover:text-yellow-400 cursor-pointer">Tayata Car Decline Over Shadows Light-Truck Gain</h3>
                     <p className="flex items-center gap-5 py-3 text-gray-600"><CiCalendar />March 22, 2021</p>
                     <p className="text-gray-700">Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magnain...</p>
                  </div>
               </div>
               <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/smiling-man-holding-safety-belt-in-car-and-looking-away.jpg" alt="" className="h-[300px]" />
                  <div className="p-5">
                     <h3 className="text-xl font-bold hover:text-yellow-400 cursor-pointer">Tayata Car Decline Over Shadows Light-Truck Gain</h3>
                     <p className="flex items-center gap-5 py-3 text-gray-600"><CiCalendar />March 22, 2021</p>
                     <p className="text-gray-700">Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magnain...</p>
                  </div>
               </div>
               <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/man-wants-to-rent-a-car.jpg" alt="" className="h-[300px]" />
                  <div className="p-5">
                     <h3 className="text-xl font-bold hover:text-yellow-400 cursor-pointer">Tayata Car Decline Over Shadows Light-Truck Gain</h3>
                     <p className="flex items-center gap-5 py-3 text-gray-600"><CiCalendar />March 22, 2021</p>
                     <p className="text-gray-700">Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magnain...</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LatestNews;