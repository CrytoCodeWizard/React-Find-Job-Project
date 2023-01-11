import { signOut } from "firebase/auth";
import React from "react";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";



const Navbar = () => {
  const { pathname } = useLocation();
  const {user:{email,role},}= useSelector((state)=>state.auth)
  const dispatch=useDispatch()

const handleSignOut =()=>{
signOut(auth).then(()=>{
  dispatch(logout())
})

}





  return (
    <nav
      className={`h-14 w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className='px-16 text-2xl mt-2 flex gap-3 h-full items-center'>
        <li className='flex-auto font-semibold text-2xl'>
          <Link to='/'>FindJob</Link>
        </li>
        <li>
          <Link className='hover:text-primary' to='/'>
          Home
          </Link>
        </li>
        <li>
          <Link className='hover:text-primary' to='/jobs'>
            Jobs
          </Link>
        </li>

        <li>
         { email?<button onClick={handleSignOut} className="">LogOut</button> 
         :<Link
            className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
            to='/login'
          >
            Login
          </Link>}



        </li>

       
        { email && role &&(
          <Link
          className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
          to='/dashboard'
        >
        Dashboard
        </Link>
         )}




         { email && !role &&(
          <Link
          className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
          to='/register'
        >
        GetStart
        </Link>
         )}


      </ul>
    </nav>
  );
};

export default Navbar;
