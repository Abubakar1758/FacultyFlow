import { Link } from "react-router-dom";
export default function JobCard(props) {
    return (
        <div className="relative w-full p-6 sm:p-8 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-3 right-3 bg-lime-500 text-white text-xs sm:text-sm font-semibold py-1 px-2 rounded-full shadow-md">
                {props.applicants} applicants
            </div>
            <div className="flex-grow mt-4">
                <a href="#">
                    <h5 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
                        {props.title}
                    </h5>
                </a>
                <p className="mt-2 text-sm sm:text-base font-normal text-gray-600">
                    {props.description}
                </p>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-4">
                {props.time}
            </div>
            <div className="flex justify-center items-center mt-2 pt-4 border-t border-gray-200">
                <Link to="/detailed-job" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 whitespace-nowrap">
                    Read more
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
