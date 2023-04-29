import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "@/redux/features/user/userSlice";

const Navbar = () => {
  const { userProfile } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("userITZone");
    if (user) {
      dispatch(setUserProfile(JSON.parse(user)));
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("userITZone");
    dispatch(setUserProfile(null));
  }

  return (
    <nav className='lg:h-14 bg-indigo-200 lg:rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto lg:flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1 className="text-center lg:text-left text-xl lg:text-lg font-semibold mb-3 lg:mb-0">IT Zone</h1>

        <ul className="grid grid-cols-3 text-center md:flex md:justify-center lg:justify-between items-center md:gap-5 lg:gap-10">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          {
            userProfile &&
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
          }

          <li>
            <Link href='/cart'>
              My Cart
            </Link>
          </li>

          {
            userProfile &&
            <li>
              <Link href='/orders'>
                Orders
              </Link>
            </li>
          }

          {
            !userProfile ?
              <li><Link href='/login'>Log In</Link></li>
              :
              <li className="cursor-pointer" onClick={handleLogOut}>Log Out</li>
          }
          <li>
            <Link href='/register'>Register</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
