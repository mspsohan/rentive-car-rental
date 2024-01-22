
const Banner = () => {
   return (
      <>
         <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)' }} className="h-[90vh] relative">
            <div className="h-[90vh]">
               <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/brand-new-car-in-showroom-e1616637374577.jpg" alt="" className="object-cover h-[90vh] w-full" />
            </div>
            <div className="bg-gradient-to-r from-[#0000009f] to-[#0000008e] h-[90vh] w-full absolute top-0 bottom-0 px-3">
               <div className="w-[1260px] flex h-full mx-auto justify-between items-center text-white">
                  <div className="space-y-6">
                     <p className="text-yellow-500">THE ALL NEW</p>
                     <h2 className="text-6xl font-bold">Easy For You To <br /> Rent A Car</h2>
                     <p className="w-[600px]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus nec ullamcorper mattis pulvinar dapibus.</p>
                     <h3 className="text-6xl font-bold text-yellow-500">$37,99<sub className="text-xl text-white font-semibold">/Per Day</sub></h3>
                  </div>
                  <div></div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;