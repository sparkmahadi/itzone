import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1>IT Zone</h1>

        <ul className=" flex justify-between items-center gap-10">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>

          <li>
            <Link href='/cart'>
              My Cart
            </Link>
          </li>

          <li>
            <Link href='/login'>Login</Link>
          </li>
          <li>
            <Link href='/register'>Register</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
