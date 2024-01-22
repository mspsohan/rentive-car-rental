import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Slider from "./Slider/Slider";

const ContactUs = () => {
   const { register, handleSubmit } = useForm()
   const onSubmit = (data) => {
      console.log(data)
   }
   return (
      <>
         <div className="relative w-full my-20">
            <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/empty-urban-parking-perfect-for-car-or-object-showroom--e1616637299166.jpg" alt="" className="h-[70vh] w-full" />
            <div className="h-full w-full absolute top-0 bottom-0 bg-gradient-to-r from-[#000000ab] to-[#000000ad]"></div>
            <div className="md:absolute w-[1260px] mx-auto top-20 left-0 right-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:h-[600px]">
               <div className="p-5 text-white relative">
                  <p className="text-sm text-yellow-500">NEED A CAR RENTAL?</p>
                  <h2 className="text-4xl font-bold py-4">Dont Hesitate To Contact Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco incididunt magna aliqua veniam quis nostrud.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                     <div className="space-y-3">
                        <h4 className="text-2xl font-semibold">Dhaka</h4>
                        <p className="flex gap-2 items-center"><IoLocationSharp className="text-2xl" />Sesetan East ST.1919, Denpasar, Bali - 80351</p>
                        <p className="flex gap-2 items-center"><FaPhone />+(62) 800-567-8990</p>
                        <p className="flex gap-2 items-center"><MdMail />rentive@domain.com</p>
                        <p className="flex gap-2 items-center"><IoTimeOutline />09:00 AM - 22:00 PM</p>
                     </div>
                     <div className="space-y-3">
                        <h4 className="text-2xl font-semibold">Dhaka</h4>
                        <p className="flex gap-2 items-center"><IoLocationSharp className="text-2xl" />Sesetan East ST.1919, Denpasar, Bali - 80351</p>
                        <p className="flex gap-2 items-center"><FaPhone />+(62) 800-567-8990</p>
                        <p className="flex gap-2 items-center"><MdMail />rentive@domain.com</p>
                        <p className="flex gap-2 items-center"><IoTimeOutline />09:00 AM - 22:00 PM</p>
                     </div>
                  </div>
                  <div className="bottom-0 mt-36">
                     <Slider />
                  </div>
               </div>
               <div className="w-full bg-white p-10 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                  <h4 className="text-xl font-bold">Booking Form</h4>
                  <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" name="" id="" placeholder="Full Name" {...register("fullName")} className="w-full border p-3 outline-none rounded-sm" />
                        <input type="text" name="" id="" placeholder="Phone Number" {...register("number")} className="w-full border p-3 outline-none rounded-sm" />
                        <input type="email" name="" id="" placeholder="Email" {...register("email")} className="w-full border p-3 outline-none rounded-sm" />
                        <select {...register("selectedCar")} className="w-full border p-3 outline-none rounded-sm">
                           <option className="text-gray-600">Select Your CAR</option>
                           <option>Chevrolet Camaro</option>
                           <option>Chevrolet Camaro</option>
                           <option>Chevrolet Camaro</option>
                           <option>Chevrolet Camaro</option>
                        </select>
                        <input type="date" {...register("pickDate")} name="" placeholder="Starting Date" id="" className="w-full border p-3 outline-none rounded-sm" />
                        <input type="date" {...register("returnDate")} name="" id="" className="w-full border p-3 outline-none rounded-sm" />
                        <textarea {...register("message", { max: 7, min: 5 })} placeholder="Message" className="w-full border p-3 outline-none rounded-sm col-span-2 min-h-40"></textarea>
                        <input type="submit" className="w-full text-center flex justify-center col-span-2 bg-yellow-400 py-2 text-xl font-semibold" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default ContactUs;