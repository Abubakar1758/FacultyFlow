export default function JobCard(props) {
    return (
        <div className="relative max-w-sm w-full sm:max-w-md md:max-w-lg p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 dark:bg-gray-400 dark:border-gray-700">
            <div className="absolute top-2 right-2 bg-lime-500 text-white text-xs sm:text-sm font-bold mb-2 py-1 px-2 rounded-full">
                {props.applicants} applicants
            </div>
            <a href="#">
                <h5 className="my-3 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {props.title}
                </h5>
            </a>
            <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-50">
                {props.description}
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
            <div className="absolute bottom-2 right-2 text-xs sm:text-sm text-gray-500 dark:text-gray-800">
                {props.time}
            </div>
        </div>
    );
}
