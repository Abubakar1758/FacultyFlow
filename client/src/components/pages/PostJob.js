import React, { useState } from 'react';

export default function PostJob() {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('full-time');
    const [salary, setSalary] = useState('');
    const [skillTests, setSkillTests] = useState([]);

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
            skillTests,
        });
    };

    const addSkillTest = (e) => {
        e.preventDefault();
        const testName = e.target.elements.testName.value;
        const testDescription = e.target.elements.testDescription.value;
        if (testName && testDescription) {
            setSkillTests([...skillTests, { testName, testDescription }]);
            e.target.reset();
        }
    };

    return (
        <div className="p-4 sm:ml-64 mt-16 flex flex-col md:flex-row md:space-x-8 justify-center">
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-9 text-blue-900 pb-4 text-center md:text-left">
                    Post Job
                </h1>
                <form className="w-full bg-white p-8 shadow-md rounded-lg mb-8" onSubmit={handleSubmit}>
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
                            className="bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600"
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-9 text-blue-900 pb-4 text-center md:text-left">Add Skill Test</h1>
                <form className="w-full bg-white p-8 shadow-md rounded-lg" onSubmit={addSkillTest}>
                    <div className="mb-4">
                        <label htmlFor="testName" className="block text-gray-700 font-bold mb-2">Test Name:</label>
                        <input
                            type="text"
                            id="testName"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="testDescription" className="block text-gray-700 font-bold mb-2">Test Description:</label>
                        <textarea
                            id="testDescription"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600"
                        >
                            Add Test
                        </button>
                    </div>
                </form>

                <div className="mt-6 w-full">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Current Skill Tests:</h3>
                    <ul className="list-disc list-inside">
                        {skillTests.map((test, index) => (
                            <li key={index} className="text-gray-700 mb-2">
                                <strong>{test.testName}</strong>: {test.testDescription}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
