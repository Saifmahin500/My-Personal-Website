import { FaHome, FaNewspaper, FaPersonBooth, FaPhone, FaWalking, } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="mx-auto  w-full max-w-screen-xl py-2 px-4 text-white lg:px-8 lg:py-2">
  <div>
    <div className="container mx-auto flex items-center justify-between text-gray-900">
     <Link to="/"><a
        href="#"
        className="mr-4 block cursor-pointer py- font-sans  font-bold text-5xl leading-normal text-inherit antialiased"
      >
        <span className="text-white">𝕾𝖆𝖎𝖋 𝕸𝖆𝖍𝖎𝖓</span>
      </a></Link>
      <ul className="hidden items-center gap-6 lg:flex">
        <Link to='/'>
        <button className="btn btn-outline btn-error">
        <li className="block p-1 font-sans  text-sm font-bold leading-normal text-inherit antialiased">
          <a className="flex items-center text-white gap-2" href="#">
           <FaHome></FaHome> <span>Home</span>
          </a>
        </li>
        </button>
       </Link>
        <Link to='/about'>
        <button className="btn btn-outline btn-error">
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
          <a className="flex items-center text-white gap-2" href="#">
           <FaPersonBooth></FaPersonBooth> About
          </a>
        </li>
        </button>
       </Link>
        <Link to='/resume'>
        <button className="btn btn-outline btn-error">
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
          <a className="flex items-center text-white gap-2" href="#">
           <FaNewspaper></FaNewspaper> Resume
          </a>
        </li>
        </button>
       </Link>
        <Link to='/work'>
        <button className="btn btn-outline btn-error">
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
          <a className="flex items-center text-white gap-2" href="#">
          <FaWalking></FaWalking> Work
          </a>
        </li>
        </button>
       </Link>
        <Link to='/contract'>
        <button className="btn btn-outline btn-error  gap-2">
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
          <a className="flex items-center text-white" href="#">
           <FaPhone></FaPhone> contract
          </a>
        </li>
        </button>
       </Link>
     
      </ul>    
    </div>
    <div
      className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
      data-collapse="navbar"
    >
      <div className="container mx-auto pb-2">
        <ul className="mt-2 mb-4 flex flex-col gap-2">
          <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Pages
            </a>
          </li>
          <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Account
            </a>
          </li>
          <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Blocks
            </a>
          </li>
          <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
            <a className="flex items-center" href="#">
              Docs
            </a>
          </li>
        </ul>
     
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;