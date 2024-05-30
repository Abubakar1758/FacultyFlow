export default function AnalyticsCard(props) {
    return (
        <div className="w-full">
            <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 transition duration-300 ease-in-out shadow-md">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <div className="text-xs uppercase font-bold text-lime-600">
                            {props.title}
                        </div>
                        <div className="text-xl font-bold text-blue-900 mt-2">
                            {props.value}
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 dark:text-gray-400">
                        {props.path}
                    </svg>
                </div>
            </div>
        </div>
    )
}
