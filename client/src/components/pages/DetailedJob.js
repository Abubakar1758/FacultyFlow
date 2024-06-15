import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailedJob() {
    const { id } = useParams();
    const jobDetails = {
        title: "Associate Professor of Data Science",
        description: "We are seeking a highly qualified Associate Professor of Data Science to join our faculty. The ideal candidate will have a strong research background in data science and a commitment to excellence in teaching and mentorship.",
        responsibilities: [
            "Develop and teach undergraduate and graduate courses in Data Science.",
            "Conduct original research and publish in high-impact journals.",
            "Mentor and advise students at all levels.",
            "Secure external funding for research projects.",
            "Collaborate with other faculty members on interdisciplinary research.",
            "Participate in university and departmental service activities."
        ],
        skills: ["Python", "R", "Machine Learning", "Statistical Analysis", "Big Data Technologies", "Data Visualization", "Teaching Experience"],
        location: "University Campus, Remote options available",
        salary: "$80,000 - $120,000 per year"
    };

    return (
        <div className="p-4 sm:ml-64 mt-14">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">{jobDetails.title}</h2>
                <p className="text-gray-700 mb-4">{jobDetails.description}</p>
                <h3 className="text-2xl font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    {jobDetails.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="text-2xl font-semibold mb-2">Required Skills</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    {jobDetails.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <p className="text-gray-700 mb-4"><strong>Location:</strong> {jobDetails.location}</p>
                <p className="text-gray-700 mb-4"><strong>Salary:</strong> {jobDetails.salary}</p>
                <Link to={"/candidates"} className="inline-block mt-4 px-4 py-2 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600">
                    Show Candidates
                </Link>
            </div>
        </div>
    );
}
