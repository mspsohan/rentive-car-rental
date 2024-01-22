
const OurMission = () => {
   return (
      <>
         <div className="flex flex-col md:flex-row justify-between items-center my-20 gap-5 max-w-[1260px] mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="flex-1 p-10">
               <p className="text-yellow-400 font-semibold">What we do</p>
               <h3 className="text-5xl font-bold mt-1 mb-5">Our Mission</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nunc acconvallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metus acbibendum mattis massauis mollis ligula pretium consequat.</p>
               <p className="mt-14 font-bold ">Sohan Perves -<span className="text-gray-400"> CEO Rentive</span></p>
            </div>
            <div className="flex-1 p-10 relative">
               <div className="w-full h-[300px] flex md:block items-center bg-yellow-300">
                  <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/car-PKLVJ3K-e1616637354219.png" alt="" className="w-full md:absolute bottom-0" />
               </div>
            </div>
         </div>
      </>
   );
};

export default OurMission;