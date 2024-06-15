import React, { useState,useContext } from 'react';
import { GlobalStateContext } from '../../contexts/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for modal visibility
    const {updateLoggedInStatus} = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };
    const handleLearnMoreClick = () => {
        setActiveNavItem('Features');
    };

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleLogin =()=>{
        updateLoggedInStatus(true);
        navigate("/dashboard");
    }
    return (

        <>
            <nav className="bg-gray-200 text-blue-900 py-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="text-lg font-bold">FacultyFlow</div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="block text-lime-500 hover:text-lime-500 focus:text-lime-500 focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21 12c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2zm-2-7H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2zm-2 14H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2z" />
                                ) : (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 6h18v2H3V6zm0 7h18v-2H3v2zm0 7h18v-2H3v2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className={`hidden md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <a href="#" className={`mx-2 px-4 py-2 hover:text-white hover:bg-lime-500 transition duration-300 ease-in-out ${activeNavItem === 'Home' ? 'bg-blue-900 text-white' : ''}`} onClick={() => handleNavItemClick('Home')}>Home</a>
                        <a href="#features" className={`mx-2 px-4 py-2 hover:text-white hover:bg-lime-500 transition duration-300 ease-in-out ${activeNavItem === 'Features' ? 'bg-blue-900 text-white' : ''}`} onClick={() => handleNavItemClick('Features')}>Features</a>
                        <a href="#contact-us" className={`mx-2 px-4 py-2 hover:text-white hover:bg-lime-500 transition duration-300 ease-in-out ${activeNavItem === 'Contact Us' ? 'bg-blue-900 text-white' : ''}`} onClick={() => handleNavItemClick('Contact Us')}>Contact Us</a>
                        <a className="ms-5 px-4 py-2 bg-lime-500 text-white hover:bg-lime-600 transition duration-300 ease-in-out rounded-full" onClick={openLoginModal}>Log In</a>
                        <a href="#signup" className="ms-5 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out rounded-full">Sign Up</a>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} style={{ position: 'absolute', top: '60px', right: '20px', backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', zIndex: '10' }}>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-lime-500 hover:text-white">Home</a>
                    <a href="#features" className="block px-4 py-2 text-sm hover:bg-lime-500 hover:text-white">Features</a>
                    <a href="#contact-us" className="block px-4 py-2 text-sm hover:bg-lime-500 hover:text-white">Contact Us</a>
                    <a className="block px-4 py-2 text-sm bg-lime-500 text-white hover:bg-lime-600 transition duration-300 ease-in-out rounded-full" onClick={openLoginModal}>Log In</a>
                    <a href="#signup" className="block mt-3 px-4 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out rounded-full">Sign Up</a>
                </div>
            </nav>

            {/* <!-- Hero Section --> */}
            <header className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/pictures/fast.jpeg')" }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug tracking-wide">
                        Welcome to FacultyFlow
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed md:leading-loose max-w-2xl mx-auto">
                        Your one-stop solution for hiring faculty members efficiently and effectively.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row md:justify-center md:items-center">
                        <div className="w-full md:w-2/3 lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-semibold leading-tight md:leading-snug tracking-wide text-center">
                                Why Choose FacultyFlow?
                            </h2>
                            <ul className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed md:leading-loose list-none text-center mx-auto">
                                <li className="mt-2">Streamlined hiring process for educational institutions.</li>
                                <li className="mt-2">Access to comprehensive profiles of potential faculty members.</li>
                                <li className="mt-2">Secure and reliable platform ensuring data privacy.</li>
                                <li className="mt-2">User-friendly interface for easy navigation and management.</li>
                            </ul>
                            <div className="mt-6 flex justify-center">
                                <a href="#features" onClick={handleLearnMoreClick} className="px-6 py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition duration-300">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Features Section --> */}
            <section id="features" class="py-16 bg-gray-50">
                <div class="container mx-auto px-6 text-center">
                    <h2 class="text-3xl font-bold text-blue-900">Features</h2>
                    <p class="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Discover the features that make FacultyFlow the best choice for your hiring needs. Our platform offers a range of tools designed to streamline the recruitment process, ensure data security, and provide comprehensive candidate profiles.</p>
                    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                            <div class="mx-auto mb-4 w-20 h-20">
                                <img src="/pictures/feature1.jpeg" alt="Streamlined Hiring" class="w-full h-full object-cover rounded-full shadow-md" />
                            </div>
                            <h3 class="text-xl font-semibold text-blue-900">Streamlined Hiring</h3>
                            <p class="mt-4 text-gray-600">Simplify the hiring process with our intuitive and user-friendly platform. Automate administrative tasks and focus on finding the best talent.</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                            <div class="mx-auto mb-4 w-20 h-20">
                                <img src="/pictures/feature2.png" alt="CV Parsing" class="w-full h-full object-cover rounded-full shadow-md" />
                            </div>
                            <h3 class="text-xl font-semibold text-blue-900">CV Parsing</h3>
                            <p class="mt-4 text-gray-600">Extract relevant information from candidates' CVs to automate the hiring process. Our advanced algorithms ensure you get all the important details quickly.</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                            <div class="mx-auto mb-4 w-20 h-20">
                                <img src="/pictures/feature3.png" alt="Secure & Reliable" class="w-full h-full object-cover rounded-full shadow-md" />
                            </div>
                            <h3 class="text-xl font-semibold text-blue-900">Secure & Reliable</h3>
                            <p class="mt-4 text-gray-600">Ensure data security and reliability with our robust infrastructure. We prioritize your data privacy with top-notch security measures.</p>
                        </div>
                    </div>
                    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                            <div class="mx-auto mb-4 w-20 h-20">
                                <img src="/pictures/feature4.jpeg" alt="Real-Time Chat" class="w-full h-full object-cover rounded-full shadow-md" />
                            </div>
                            <h3 class="text-xl font-semibold text-blue-900">Real-Time Chat</h3>
                            <p class="mt-4 text-gray-600">Communicate with candidates and team members instantly through our integrated real-time chat feature. Enhance collaboration and speed up the hiring process.</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                            <div class="mx-auto mb-4 w-20 h-20">
                                <img src="/pictures/feature5.jpeg" alt="Analytics & Reporting" class="w-full h-full object-cover rounded-full shadow-md" />
                            </div>
                            <h3 class="text-xl font-semibold text-blue-900">Analytics & Reporting</h3>
                            <p class="mt-4 text-gray-600">Get insights into your hiring process with detailed analytics and reports. Make data-driven decisions to improve your recruitment strategy.</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-lime-500">
                            <div class="mx-auto mb-4 w-20 h-20">
                                <img src="/pictures/feature6.jpeg" alt="24/7 Support" class="w-full h-full object-cover rounded-full shadow-md" />
                            </div>
                            <h3 class="text-xl font-semibold text-blue-900">24/7 Support</h3>
                            <p class="mt-4 text-gray-600">Our support team is available 24/7 to assist you with any issues or questions. We're here to help you every step of the way.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Contact Us Section --> */}
            <section id="contact-us" class="py-16 bg-gray-100">
                <div class="container mx-auto px-6 text-center">
                    <h2 class="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
                    <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-10">Have questions or need assistance? Get in touch with us through the form below or reach out via email, phone, or our social media channels. We're here to help!</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h3>
                            <div class="text-left">
                                <div class="flex items-center mb-3">
                                    <div>
                                        <h4 class="font-semibold">Address</h4>
                                        <p class="text-gray-600">123 FacultyFlow St, Suite 100<br />City, State, ZIP</p>
                                    </div>
                                </div>
                                <div class="flex items-center mb-3">
                                    <div>
                                        <h4 class="font-semibold">Phone</h4>
                                        <p class="text-gray-600">(123) 456-7890</p>
                                    </div>
                                </div>
                                <div class="flex items-center mb-3">
                                    <div>
                                        <h4 class="font-semibold">Email</h4>
                                        <p class="text-gray-600"><a href="mailto:info@facultyflow.com" class="text-lime-500 hover:text-lime-400 transition duration-300">info@facultyflow.com</a></p>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <div>
                                        <h4 class="font-semibold">Follow Us</h4>
                                        <div class="flex mt-2">
                                            <a href="#" class="text-lime-500 hover:text-lime-400 transition duration-300 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.113.793-.26.793-.577v-2.17c-3.337.726-4.043-1.608-4.043-1.608-.546-1.386-1.333-1.757-1.333-1.757-1.089-.744.083-.728.083-.728 1.204.084 1.837 1.23 1.837 1.23 1.072 1.837 2.809 1.306 3.495.998.108-.776.42-1.307.76-1.607-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.235-3.222-.123-.302-.536-1.519.117-3.164 0 0 1.008-.322 3.303 1.23.957-.266 1.984-.399 3.004-.403 1.02.004 2.047.137 3.005.403 2.294-1.552 3.301-1.23 3.301-1.23.654 1.645.241 2.862.118 3.164.77.839 1.235 1.912 1.235 3.222 0 4.609-2.803 5.626-5.475 5.921.431.371.813 1.103.813 2.222v3.293c0 .319.191.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"></path></svg></a>
                                            <a href="#" class="text-lime-500 hover:text-lime-400 transition duration-300 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.558a9.835 9.835 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.936.555-1.976.96-3.084 1.176a4.92 4.92 0 0 0-8.38 4.482A13.965 13.965 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.231-.616c-.054 2.207 1.555 4.285 3.847 4.743a4.935 4.935 0 0 1-2.224.084 4.933 4.933 0 0 0 4.604 3.42A9.876 9.876 0 0 1 0 19.54a13.943 13.943 0 0 0 7.548 2.212c9.058 0 14.01-7.503 14.01-14.008 0-.213-.005-.426-.015-.637A10.012 10.012 0 0 0 24 4.558z"></path></svg></a>
                                            <a href="#" class="text-lime-500 hover:text-lime-400 transition duration-300 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24"><path d="M19.007 3H4.993A1.993 1.993 0 0 0 3 4.993v14.014A1.993 1.993 0 0 0 4.993 21H19.01A1.994 1.994 0 0 0 21 19.007V4.993A1.993 1.993 0 0 0 19.007 3zM8.89 18.27H5.733V9.807H8.89v8.463zm-1.579-9.67a1.839 1.839 0 1 1 0-3.676 1.839 1.839 0 0 1 0 3.676zm10.44 9.67h-3.16v-4.213c0-1.004-.02-2.296-1.397-2.296-1.397 0-1.611 1.09-1.611 2.222v4.287h-3.159V9.807h3.036v1.154h.043c.423-.803 1.455-1.648 2.993-1.648 3.202 0 3.791 2.108 3.791 4.854v4.103z"></path></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-semibold text-blue-900 mb-4">Send Us a Message</h3>
                            <form>
                                <div class="mb-4">
                                    <label for="name" class="block text-left text-gray-600 font-semibold">Name</label>
                                    <input type="text" id="name" class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500" required />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-left text-gray-600 font-semibold">Email</label>
                                    <input type="email" id="email" class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500" required />
                                </div>
                                <div class="mb-4">
                                    <label for="message" class="block text-left text-gray-600 font-semibold">Message</label>
                                    <textarea id="message" class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500" rows="5" required></textarea>
                                </div>
                                <button type="submit" class="w-full mt-4 px-6 py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition duration-300">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>




            {/* <!-- Call to Action Section --> */}
            <section id="signup" className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Get Started with FacultyFlow</h2>
                    <p className="mt-4 text-lg">Join us today and streamline your hiring process.</p>
                    <form className="mt-8 max-w-md mx-auto">
                        <div className="flex flex-col space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-400 focus:outline-none focus:border-lime-500" />
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-400 focus:outline-none focus:border-lime-500" />
                            <input type="password" placeholder="Password" className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-400 focus:outline-none focus:border-lime-500" />
                            <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-400 focus:outline-none focus:border-lime-500" />
                            <button type="submit" className="w-full px-6 py-3 bg-lime-500 text-white font-semibold  rounded-lg shadow-md hover:bg-lime-600 transition duration-300">Sign Up</button>
                        </div>
                    </form>
                    <p onClick={openLoginModal} className="mt-4 text-sm text-gray-400">Already have an account? <span className="text-lime-500 hover:underline">Log in</span></p>
                </div>
            </section>


            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-md w-96 relative">
                        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={closeLoginModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
                        {/* Login form */}
                        <form onSubmit={handleLogin}>
                            {/* Form fields */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
                                <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-500" required />
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Forgot Password?</a>
                            </div>
                            <button type="submit" className="w-full bg-lime-500 text-white font-semibold py-2 rounded-lg hover:bg-lime-600 transition duration-300">Login</button>
                        </form>
                    </div>
                </div>
            )}




            {/* <!-- Footer --> */}
            <footer class="bg-gray-200 py-6">
                <div class="container mx-auto px-6 text-center">
                    <p class="text-gray-600">&copy; 2024 FacultyFlow. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}