import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <></>
    // <nav className="bg-gray-50">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="flex mx-auto justify-between m-4 w-5/6 ">
    //       <div className="text-xl ">Logo</div>
    //       <div className="flex items-center gap-16 m-4">
    //         {/* primary */}
    //         <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2 lg:space-x-4 gap-8 ">
    //           <a href="#" className="">
    //             Home
    //           </a>
    //           <a href="#">Benefits</a>
    //           <a href="#">Our Classes</a>
    //           <a href="#">Contact Us</a>
    //         </div>
    //       </div>
    //       {/* secondary */}
    //       <div className="flex gap-6">
    //         <div className="hidden xs:flex items-center gap-10">
    //           <div>
    //             <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
    //               Free Trial
    //             </button>
    //           </div>
    //         </div>
    //         {/* Mobile navigation toggle */}
    //         <div className="lg:hidden flex items-center">
    //           <button onClick={() => setToggleMenu(!toggleMenu)}>
    //             {toggleMenu ? (
    //               <AiOutlineClose />
    //             ) : (
    //               <CiMenuFries className="h-6" />
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* mobile navigation */}
    //   <div
    //     className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
    //       toggleMenu ? "h-0" : "h-full"
    //     }`}
    //   >
    //     <div className="px-8">
    //       <div className="flex flex-col gap-8 font-bold tracking-wider">
    //         <a href="#" className="">
    //           Home
    //         </a>
    //         <a href="#">Benefits</a>
    //         <a href="#">Our Classes</a>
    //         <a href="#">Contact Us</a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
