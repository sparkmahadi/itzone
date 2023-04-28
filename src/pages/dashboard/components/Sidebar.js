import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3 flex-col h-full'>
        <li>Admin Dashboard</li>
        <li>
          <Link href='/dashboard'>Overview</Link>
        </li>
        <li>
          <Link href='/dashboard?activePage=customers-list'> Customer's List </Link>
        </li>
        <li>
          <Link href='/dashboard?activePage=order-list'> Order List </Link>
        </li>
        <li>
          <Link href='/dashboard?activePage=product-list'> Product List </Link>
        </li>
        <li>
          <Link href='/dashboard?activePage=add-product'> Add Product </Link>
        </li>
        <li className='mt-auto'>
          <Link href='/'> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
