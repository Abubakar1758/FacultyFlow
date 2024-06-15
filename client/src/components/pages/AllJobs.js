import React from 'react';
import JobCard from '../common/JobCard';

export default function AllJobs() {
    return (
        <div className="p-4 sm:ml-64 mt-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-9 text-blue-900 pb-4 text-center">
                    All Jobs
                </h1>
            <div className="flex items-center">
            
                <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-2 lg:mb-4">
                        <JobCard title="Associate Professor Data Science" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="12" time="2 hours ago" />
                        <JobCard title="Lab Instructor Computer Networks" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="40" time="10 hours ago" />
                        <JobCard title="Associate Professor Applied Physics" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="18" time="1 day ago" />
                        <JobCard title="Associate Professor Linear Algebra" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="30" time="4 days ago" />
                        <JobCard title="Associate Professor Linear Algebra" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="30" time="4 days ago" />
                        <JobCard title="Associate Professor Linear Algebra" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="30" time="5 days ago" />
                        <JobCard title="Associate Professor Linear Algebra" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." applicants="30" time="8 days ago" />

                    </div>
                </div>
            </div>
        </div>
    );
}


