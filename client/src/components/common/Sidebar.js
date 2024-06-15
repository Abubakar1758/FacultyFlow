import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { updateLoggedInStatus } = useContext(GlobalStateContext);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () => {
        // Update the logged-in status
        updateLoggedInStatus(false);

        // Navigate to the landing page
        navigate("/");
    };

    return (
        <>
            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-gray-100 border-r border-gray-300 sm:translate-x-0 shadow-lg`} aria-label="Sidebar">
                <div className="h-full px-4 pb-4 overflow-y-auto bg-gray-100 text-gray-900">
                    <ul className="space-y-4 font-medium">
                        <li>
                            <Link to="/dashboard" className="flex items-center p-3 text-gray-900 hover:bg-gray-300 rounded-lg transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/postjob" className="flex items-center p-3 text-gray-900 hover:bg-gray-300 rounded-lg transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Post Job</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/all-jobs" className="flex items-center p-3 text-gray-900 hover:bg-gray-300 rounded-lg transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">All Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 text-gray-900 hover:bg-gray-300 rounded-lg transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-6 h-6 p-3 ml-3 text-sm font-medium text-white bg-lime-500 rounded-full">3</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* "Log Out" button at the bottom */}
                <div className="absolute bottom-4 left-0 w-full px-4">
                    <button
                        onClick={handleLogOut}
                        className="flex items-center w-full p-3 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200"
                    >
                        <svg
                            className="flex-shrink-0 w-4 h-4 text-white transition duration-75"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M14.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L16.586 13H7a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414ZM5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4a1 1 0 1 0-2 0v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Z" />
                        </svg>
                        <span className="flex-1 whitespace-nowrap">Log Out</span>
                    </button>
                </div>
            </aside>

            <button
                onClick={toggleSidebar}
                className="absolute top-3 left-4 z-50 p-3 text-white bg-blue-600 rounded-md sm:hidden"
                aria-controls="logo-sidebar"
                aria-expanded={isOpen ? "true" : "false"}
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 7.5h16.5m-16.5 4h16.5m-16.5 4h16.5"
                        />
                    </svg>
                )}
            </button>
        </>
    );
}
