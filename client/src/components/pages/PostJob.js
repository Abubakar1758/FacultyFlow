import React, { useState } from 'react';

export default function PostJob() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('full-time');
    const [salary, setSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Job Posted', {
            jobTitle,
            jobDescription,
            qualifications,
            skills,
            location,
            jobType,
            salary,
        });
    };

    return (
        <div className="p-4 sm:ml-64 mt-14">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-9 text-blue-900 pb-4 text-center">
                    Post Job
                </h1>
                <form className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job Title:</label>
                        <input
                            type="text"
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobDescription" className="block text-gray-700 font-bold mb-2">Job Description:</label>
                        <textarea
                            id="jobDescription"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="qualifications" className="block text-gray-700 font-bold mb-2">Qualifications:</label>
                        <textarea
                            id="qualifications"
                            value={qualifications}
                            onChange={(e) => setQualifications(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills:</label>
                        <input
                            type="text"
                            id="skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="Comma separated skills"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobType" className="block text-gray-700 font-bold mb-2">Job Type:</label>
                        <select
                            id="jobType"
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            required
                        >
                            <option value="full-time">Full-Time</option>
                            <option value="part-time">Part-Time</option>
                            <option value="contract">Contract</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary:</label>
                        <input
                            type="text"
                            id="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="e.g., $50,000 - $60,000 per year"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
