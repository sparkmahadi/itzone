
import { useRouter } from 'next/router';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import CustomersList from '../customers-list';
import AddProduct from './components/AddProduct';

const Dashboard = () => {
    const router = useRouter();
    const activePage = router.query.activePage;

    return (
        <div className='grid grid-cols-12 p-3 gap-3 '>
            <Sidebar />


            <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
                {
                    activePage === 'products-list' && <ProductList></ProductList>
                }
                {
                    activePage === 'customers-list' && <CustomersList></CustomersList>
                }
                {
                    activePage === 'add-product' && <AddProduct></AddProduct>
                }
            </div>
        </div>
    );
};

export default Dashboard;