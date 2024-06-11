export default function Footer() {
    return (
        <div className="sm:ml-64 mt-14">
             <div className="w-full mt-12 py-6 bg-gray-200 text-gray-700 text-center shadow-lg">
            <p className="text-sm">
                © {new Date().getFullYear()} FacultyFlow. All Rights Reserved.
            </p>
            <p className="text-sm mt-1">
                <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a> | <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
        </div>
        </div>
       
    )
}