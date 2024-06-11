import DashboardCardContainer from '../common/AnalyticsCardsContainer';
import JobCardsContainer from '../common/JobCardsContainer';


export default function Dashboard() {
    return (
        <div className="p-4 sm:ml-64 mt-14">
            {/* Hero Section */}
            <div className="w-full flex flex-col items-center justify-center py-8 bg-cover bg-center bg-[url('https://source.unsplash.com/1600x900/?faculty')]">
                <div className="bg-white bg-opacity-70 w-full px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 pb-4">
                        Welcome to FacultyFlow
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
                        Your one-stop solution for hiring faculty members efficiently and effectively.
                    </p>
                </div>
            </div>


            {/* Dashboard Cards  */}
             <DashboardCardContainer />

            {/* Recent Jobs Section */}
            <div className="w-full flex flex-col justify-center mt-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-9 text-blue-900 pb-4 text-center">
                    Recent Jobs
                </h1>
            </div>
            <JobCardsContainer />

        </div>
    );
}
