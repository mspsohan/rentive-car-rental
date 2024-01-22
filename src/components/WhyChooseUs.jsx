
const WhyChooseUs = () => {
   return (
      <>
         <div className="max-w-[1260px] mx-auto flex justify-between items-center my-20">
            <div className="flex-1 hidden md:block">
               <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/happy-couple-with-car-key-standing-at-car-in-dealership-salon-e1616384906835.jpg" alt="" />
            </div>
            <div className="flex-1">
               <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 md:-ml-20 bg-white space-y-5">
                  <p>Why Choose Us</p>
                  <h2 className="text-5xl font-semibold">We Provide Premium Car With High Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nunc acconvallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metus acbibendum mattis massauis mollis ligula pretium consequat.</p>
                  <div className="flex gap-5">
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Reed More</button>
                     <button className="px-5 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black">Rent a Car --{'>'} </button>
                  </div>
               </div>
               <div className="flex justify-evenly items-center pt-10 text-center">
                  <div>
                     <h3 className="text-6xl font-bold">10<sup className="font-semibold">+</sup></h3>
                     <p>Years of Experience</p>
                  </div>
                  <div>
                     <h3 className="text-6xl font-bold">2000<sup className="font-semibold">+</sup></h3>
                     <p>Service Provided</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default WhyChooseUs;