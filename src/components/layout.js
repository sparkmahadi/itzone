import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    );
};

export default Layout;