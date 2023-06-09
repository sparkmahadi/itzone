
import { useRouter } from 'next/router';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import CustomersList from '../customers-list';
import AddProduct from './components/AddProduct';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Overview from './components/Overview';

const Dashboard = () => {
    const router = useRouter();
    const activePage = router.query.activePage;

    const { userProfile, userLoading, error } = useSelector(state => state.user);

    useEffect(() => {
        if (!userProfile) {
            router.push("/login")
        }
    }, [userProfile])

    if (userLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='md:grid grid-cols-12 p-3 gap-3 px-10'>
            <Sidebar />


            <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
                {
                    !activePage && <Overview></Overview>
                }
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