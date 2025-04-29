import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
   return (
      <footer class="px-5 mt-20 w-full text-white bg-gray-950 pt-10">
         <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6 max-w-7xl mx-auto">
            <div class="md:max-w-96">
               <Link to='/'><img class="h-12" src={logo}  /></Link>
                  <p class="mt-6 text-sm">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
            </div>
            <div class="flex-1 flex items-start md:justify-end gap-20">
               <div>
                  <h2 class="font-semibold mb-5">Company</h2>
                  <ul class="text-sm space-y-2">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About us</a></li>
                     <li><a href="#">Contact us</a></li>
                     <li><a href="#">Privacy policy</a></li>
                  </ul>
               </div>
               <div>
                  <h2 class="font-semibold mb-5">Get in touch</h2>
                  <div class="text-sm space-y-2">
                     <p>+1-212-456-7890</p>
                     <p>contact@example.com</p>
                  </div>
               </div>
            </div>
         </div>
         <p class="pt-4 text-center text-xs md:text-sm pb-5">
            Copyright 2024 © Star Tech. All Right Reserved.
         </p>
      </footer>
   );
};

export default Footer;