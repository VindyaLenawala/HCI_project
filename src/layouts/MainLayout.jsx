import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const location = useLocation();

    // Pages where Navbar and Footer should NOT be displayed
    const noNavbarPages = ["/login", "/register"];
    const noFooterPages = ["/login", "/register"];

    // Determine whether to apply full width or not
    const isAuthPage = noNavbarPages.includes(location.pathname) || noFooterPages.includes(location.pathname);

    return (
        <div>
            {/* Conditionally render the Navbar with full width */}
            {!noNavbarPages.includes(location.pathname) && (
                <div className="w-full">
                    <Navbar />
                </div>
            )}

            {/* Main content with padding for non-authentication pages */}
            <div className={`${isAuthPage ? '' : 'px-4 md:px-8 lg:px-32 2xl:px-64'}`}>
                <Outlet />
            </div>

            {/* Conditionally render the Footer with full width */}
            {!noFooterPages.includes(location.pathname) && (
                <div className="w-full">
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default MainLayout;
