import { FaStar } from "react-icons/fa";

const Testimonial = () => {
   return (
      <div className="relative my-40">
         <div className="relative ">
            <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/happy-couple-sitting-in-new-car-showroom-e1616637259105.jpg" alt="" className="h-[500px] w-full object-cover" />
            <div className="flex flex-col bg-gradient-to-t from-[#0000008d] to-[#0000008e] justify-center items-center text-center absolute left-0 right-0 top-0 bottom-0 text-white">
               <p className="text-sm text-yellow-500">Testimonial</p>
               <h2 className="text-4xl py-3 font-bold">What Our clients Say</h2>
               <p className="w-[50%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quis saepe quod! Hic quam ipsa cum molestiae facere sed expedita.</p>
            </div>
         </div>
         <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 absolute top-96 left-0 right-0 mb-20">
            <div className="p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white">
               <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div className="flex items-center text-yellow-500 mt-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
               </div>
               <div className="flex gap-10 mt-5 items-start">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/2CUG9YD-150x150.jpg" alt="" className="w-16 rounded-full" />
                  <div>
                     <h3 className="text-xl font-semibold">Fred Rodriquez</h3>
                     <p className="text-gray-600">Project Manager</p>
                  </div>
               </div>
            </div>
            <div className="p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white">
               <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div className="flex items-center text-yellow-500 mt-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
               </div>
               <div className="flex gap-10 mt-5 items-start">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/2CUG9YD-150x150.jpg" alt="" className="w-16 rounded-full" />
                  <div>
                     <h3 className="text-xl font-semibold">Fred Rodriquez</h3>
                     <p className="text-gray-600">Project Manager</p>
                  </div>
               </div>
            </div>
            <div className="p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white">
               <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div className="flex items-center text-yellow-500 mt-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
               </div>
               <div className="flex gap-10 mt-5 items-start">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/2CUG9YD-150x150.jpg" alt="" className="w-16 rounded-full" />
                  <div>
                     <h3 className="text-xl font-semibold">Fred Rodriquez</h3>
                     <p className="text-gray-600">Project Manager</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonial;