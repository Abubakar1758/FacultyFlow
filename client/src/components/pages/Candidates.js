import React from 'react';
import { useParams } from 'react-router-dom';

export default function Candidates() {
    const { id } = useParams();
    const applicants = [
        {
            name: "Dr. John Doe",
            education: "Ph.D. in Data Science, XYZ University",
            experience: "5 years of research and teaching experience in data science.",
            summary: "Dr. John Doe has published extensively on machine learning and big data analytics. He is known for his engaging teaching style and dedication to student success.",
            matchScore: 95
        },
        {
            name: "Dr. Jane Smith",
            education: "Ph.D. in Statistics, ABC University",
            experience: "7 years of experience in statistical modeling and data analysis.",
            summary: "Dr. Jane Smith has a strong background in statistical analysis and data mining. She has been involved in numerous collaborative research projects and has a passion for mentoring students.",
            matchScore: 90
        },
        {
            name: "Dr. Alice Johnson",
            education: "Ph.D. in Computer Science, DEF University",
            experience: "4 years of experience in teaching data science and machine learning.",
            summary: "Dr. Alice Johnson's research focuses on the application of machine learning in healthcare. She has received several grants for her innovative research and has a track record of successful student mentorship.",
            matchScore: 85
        },
        {
            name: "Dr. Bob Brown",
            education: "Ph.D. in Applied Mathematics, GHI University",
            experience: "6 years of experience in data science and computational mathematics.",
            summary: "Dr. Bob Brown specializes in applied machine learning and big data analytics. He has a proven ability to communicate complex topics to a wide audience and is committed to interdisciplinary collaboration.",
            matchScore: 80
        }
    ];

    // Sort applicants by matchScore in descending order
    const sortedApplicants = applicants.sort((a, b) => b.matchScore - a.matchScore);

    return (
        <div className="p-4 sm:ml-64 mt-14">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Candidates for Job {id}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedApplicants.map((applicant, index) => (
                        <div key={index} className="relative bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded-full shadow-lg">
                                #{index + 1}
                            </div>
                            <h4 className="text-xl font-semibold mt-3 mb-2 text-gray-900">{applicant.name}</h4>
                            <p className="text-gray-700 mb-2"><strong>Education:</strong> {applicant.education}</p>
                            <p className="text-gray-700 mb-2"><strong>Experience:</strong> {applicant.experience}</p>
                            <p className="text-gray-700 mb-2"><strong>Match Score:</strong> <span className="text-green-600">{applicant.matchScore}</span></p>
                            <p className="text-gray-700">{applicant.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
