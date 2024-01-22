import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
   return (
      <div className="px-3 lg:px-0">
         <div className="max-w-[1260px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  bg-gray-800 text-white rounded-md lg:px-0">
            <div className="flex flex-col lg:flex-row text-center lg:text-left lg:gap-5 justify-center items-center w-full border-r-2 border-b-2 py-8">
               <FaPhoneAlt className="text-4xl text-yellow-500" />
               <div>
                  <h3 className="text-2xl font-bold pt-3 lg:pt-0">Call Us</h3>
                  <p>+8801789216063</p>
               </div>
            </div>
            <div className="flex flex-col lg:flex-row text-center lg:text-left lg:gap-5 justify-center items-center w-full border-r-2 border-b-2 py-8">
               <FaPhoneAlt className="text-4xl text-yellow-500" />
               <div>
                  <h3 className="text-2xl font-bold pt-3 lg:pt-0">Email Us</h3>
                  <p>rentive@domain.com</p>
               </div>
            </div>
            <div className="flex flex-col lg:flex-row text-center lg:text-left lg:gap-5 justify-center items-center w-full border-r-2 border-b-2 py-8">
               <FaPhoneAlt className="text-4xl text-yellow-500" />
               <div>
                  <h3 className="text-2xl font-bold pt-3 lg:pt-0">Our Location</h3>
                  <p>Dhaka, Bangladesh</p>
               </div>
            </div>
            <div className="flex flex-col lg:flex-row text-center lg:text-left lg:gap-5 justify-center items-center w-full border-b-2 py-8">
               <FaPhoneAlt className="text-4xl text-yellow-500" />
               <div>
                  <h3 className="text-2xl font-bold pt-3 lg:pt-0">Work Hours</h3>
                  <p>09:00 AM - 22:00 PM</p>
               </div>
            </div>

         </div>
      </div>
   );
};

export default Contact;