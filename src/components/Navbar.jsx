import { useState } from "react";
import Image from "./Image";
import { Link, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { firstName, profileImageUrl } = useUser();

    const handleDashboardClick = () => {
        navigate("/dashboard"); // Navigate to DashboardPage
    };

    const handleSettingsClick = () => {
        navigate("/dashboard/edit-profile"); // Navigate to EditProfilePage
    };

    return (
        <div>
            {/* Navbar Container */}
            <div className="w-full h-16 md:h-20 px-4 md:px-8 lg:px-16 xl:px-32 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                    <Image src="logo1.png" alt="Inksphere Logo" w={80} h={80} />
                    <span>Inksphere</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                    <Link to="/">
                        <img src="/home.png" alt="Home Icon" className="w-5 h-5 inline-block" /> Home
                    </Link>
                    <Link to="/write" className="flex items-center gap-2">
                        <img src="/copy-writing.png" alt="Write Icon" className="w-6 h-6" />
                        Write
                    </Link>
                    <SignedOut>
                        <Link to="/register">
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                                Login 👋
                            </button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        {/* Dropdown for Dashboard */}
                        <div className="relative">
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => setDropdownOpen((prev) => !prev)}
                            >
                                <img
                                    src="/dashboard.png"
                                    alt="Dashboard Icon"
                                    className="w-5 h-5 inline-block"
                                />
                                Dashboard
                            </div>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-50">
                                    {/* User Info */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={profileImageUrl || "/portraits at work _ Are_na.jpg"}
                                            alt="User Profile"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold text-lg">{firstName || "Harshana"}</p>
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    {/* Dropdown Options */}
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={handleDashboardClick}
                                            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                                        >
                                            <img
                                                src="/dashboard.png"
                                                alt="Dashboard"
                                                className="w-5 h-5"
                                            />
                                            Dashboard
                                        </button>
                                        <button
                                            onClick={handleSettingsClick}
                                            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                                        >
                                            <img
                                                src="/settings.png"
                                                alt="Settings"
                                                className="w-5 h-5"
                                            />
                                            Settings
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <UserButton />
                    </SignedIn>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    {/* Add Mobile Menu Logic Here if needed */}
                </div>
            </div>

            {/* Divider */}
            <hr className="my-2 border-t-2 border-black" />
        </div>
    );
};

export default Navbar;
