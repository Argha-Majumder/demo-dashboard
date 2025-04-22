import React from "react"

const App = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-white min-h-screen p-4 md:p-6 lg:p-8 font-sans">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Healthcare Dashboard</h1>
                        <p className="text-gray-500 mt-1">Welcome back, Dr. Smith</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search patients, appointments..."
                                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                            />
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">
                                search
                            </span>
                        </div>
                        <div className="relative">
                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center">
                                    <span className="relative">
                                        <span className="material-symbols-outlined text-gray-600 hover:text-primary-600 transition-colors duration-300">
                                            notifications
                                        </span>
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                            3
                                        </span>
                                    </span>
                                </summary>
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-72 py-2 z-20 border border-gray-100 transform origin-top-right transition-all duration-300 ease-in-out">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <p className="font-medium">Notifications</p>
                                    </div>
                                    <div className="py-2 px-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                        <p className="font-medium">New test results</p>
                                        <p className="text-sm text-gray-500">Patient: James Wilson</p>
                                        <p className="text-xs text-gray-400">10 minutes ago</p>
                                    </div>
                                    <div className="py-2 px-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                        <p className="font-medium">Appointment reminder</p>
                                        <p className="text-sm text-gray-500">Emily Johnson at 2:30 PM</p>
                                        <p className="text-xs text-gray-400">1 hour ago</p>
                                    </div>
                                    <div className="py-2 px-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                        <p className="font-medium">Staff meeting</p>
                                        <p className="text-sm text-gray-500">Department update at 4:00 PM</p>
                                        <p className="text-xs text-gray-400">2 hours ago</p>
                                    </div>
                                    {/* Next: "Add 'View all notifications' button" */}
                                </div>
                            </details>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Dr. Smith"
                                className="h-10 w-10 rounded-full object-cover border-2 border-primary-100"
                            />
                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center gap-1">
                                    <span className="hidden md:block">Dr. Smith</span>
                                    <span className="material-symbols-outlined text-gray-600">expand_more</span>
                                </summary>
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-20 border border-gray-100">
                                    <a href="#profile" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
                                        My Profile
                                    </a>
                                    <a href="#settings" className="block px-4 py-2 hover:bg-gray-50 transition-colors">
                                        Settings
                                    </a>
                                    <a
                                        href="#logout"
                                        className="block px-4 py-2 text-red-500 hover:bg-gray-50 transition-colors"
                                    >
                                        Logout
                                    </a>
                                </div>
                            </details>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-white/80 text-sm">Total Patients</p>
                                <h2 className="text-3xl font-bold mt-1">1,254</h2>
                                <p className="flex items-center text-sm mt-2">
                                    <span className="material-symbols-outlined text-green-300 mr-1 text-sm">
                                        trending_up
                                    </span>
                                    <span className="text-green-300">+12% </span>
                                    <span className="text-white/70 ml-1">this month</span>
                                </p>
                            </div>
                            <div className="bg-white/20 p-3 rounded-lg">
                                <span className="material-symbols-outlined text-white">group</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm">Appointments</p>
                                <h2 className="text-3xl font-bold mt-1 text-gray-800">28</h2>
                                <p className="flex items-center text-sm mt-2">
                                    <span className="text-gray-500">Today's schedule</span>
                                </p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <span className="material-symbols-outlined text-blue-600">calendar_month</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm">Average Wait Time</p>
                                <h2 className="text-3xl font-bold mt-1 text-gray-800">18 min</h2>
                                <p className="flex items-center text-sm mt-2">
                                    <span className="material-symbols-outlined text-red-500 mr-1 text-sm">
                                        trending_up
                                    </span>
                                    <span className="text-red-500">+3 min </span>
                                    <span className="text-gray-500 ml-1">vs last week</span>
                                </p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-lg">
                                <span className="material-symbols-outlined text-red-600">hourglass_top</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm">Satisfaction Rate</p>
                                <h2 className="text-3xl font-bold mt-1 text-gray-800">94%</h2>
                                <p className="flex items-center text-sm mt-2">
                                    <span className="material-symbols-outlined text-green-500 mr-1 text-sm">
                                        trending_up
                                    </span>
                                    <span className="text-green-500">+2% </span>
                                    <span className="text-gray-500 ml-1">vs last month</span>
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <span className="material-symbols-outlined text-green-600">thumb_up</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 lg:col-span-2">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">Patient Statistics</h3>
                                <select className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300">
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 90 days</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-6 h-[300px]">
                            <div className="h-full w-full">
                                {/* Chart would go here */}
                                <div className="h-full w-full flex items-center justify-center bg-gray-50 rounded-lg">
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">
                                            insert_chart
                                        </span>
                                        <p className="text-gray-500">Patient visits chart would appear here</p>
                                    </div>
                                </div>
                                {/* Next: "Add interactive line chart showing patient visits over time" */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800">Department Performance</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Cardiology</span>
                                        <span className="text-sm font-medium text-gray-800">92%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary-500 h-2 rounded-full" style={{width: "92%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Neurology</span>
                                        <span className="text-sm font-medium text-gray-800">87%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary-500 h-2 rounded-full" style={{width: "87%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Pediatrics</span>
                                        <span className="text-sm font-medium text-gray-800">78%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary-500 h-2 rounded-full" style={{width: "78%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Orthopedics</span>
                                        <span className="text-sm font-medium text-gray-800">95%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary-500 h-2 rounded-full" style={{width: "95%"}}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Dermatology</span>
                                        <span className="text-sm font-medium text-gray-800">81%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary-500 h-2 rounded-full" style={{width: "81%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 lg:col-span-2">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">Today's Appointments</h3>
                                <button className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg font-medium text-sm hover:bg-primary-100 transition-colors duration-300">
                                    View All
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                                        <th className="px-6 py-3 font-medium">Patient</th>
                                        <th className="px-6 py-3 font-medium">Time</th>
                                        <th className="px-6 py-3 font-medium">Department</th>
                                        <th className="px-6 py-3 font-medium">Doctor</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                                    alt="Patient"
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">James Wilson</p>
                                                    <p className="text-sm text-gray-500">#PAT-0025</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">09:15 AM</td>
                                        <td className="px-6 py-4 text-gray-600">Cardiology</td>
                                        <td className="px-6 py-4 text-gray-600">Dr. Thompson</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                                Confirmed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">edit</span>
                                                </button>
                                                <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://randomuser.me/api/portraits/women/28.jpg"
                                                    alt="Patient"
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">Emily Johnson</p>
                                                    <p className="text-sm text-gray-500">#PAT-0048</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">10:30 AM</td>
                                        <td className="px-6 py-4 text-gray-600">Neurology</td>
                                        <td className="px-6 py-4 text-gray-600">Dr. Martinez</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                In Progress
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">edit</span>
                                                </button>
                                                <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://randomuser.me/api/portraits/men/43.jpg"
                                                    alt="Patient"
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">Michael Brown</p>
                                                    <p className="text-sm text-gray-500">#PAT-0106</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">11:45 AM</td>
                                        <td className="px-6 py-4 text-gray-600">Orthopedics</td>
                                        <td className="px-6 py-4 text-gray-600">Dr. Wilson</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                                                Waiting
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">edit</span>
                                                </button>
                                                <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://randomuser.me/api/portraits/women/76.jpg"
                                                    alt="Patient"
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">Sofia Garcia</p>
                                                    <p className="text-sm text-gray-500">#PAT-0073</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">01:30 PM</td>
                                        <td className="px-6 py-4 text-gray-600">Pediatrics</td>
                                        <td className="px-6 py-4 text-gray-600">Dr. Smith</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                                Scheduled
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">edit</span>
                                                </button>
                                                <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Next: "Add pagination controls" */}
                    </div>

                    <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
                        </div>
                        <div className="p-4">
                            <div className="flow-root">
                                <ul className="divide-y divide-gray-100">
                                    <li className="py-3">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 rounded-full p-2 mt-1">
                                                <span className="material-symbols-outlined text-blue-600 text-sm">
                                                    check_circle
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">Patient discharged</p>
                                                <p className="text-sm text-gray-500">
                                                    Robert Davis has been discharged from Cardiology
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">30 minutes ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 rounded-full p-2 mt-1">
                                                <span className="material-symbols-outlined text-green-600 text-sm">
                                                    lab_profile
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">Lab results ready</p>
                                                <p className="text-sm text-gray-500">
                                                    Blood work results for Emily Johnson are ready
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-yellow-100 rounded-full p-2 mt-1">
                                                <span className="material-symbols-outlined text-yellow-600 text-sm">
                                                    event
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">New appointment</p>
                                                <p className="text-sm text-gray-500">
                                                    Sofia Garcia scheduled for pediatric checkup
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-red-100 rounded-full p-2 mt-1">
                                                <span className="material-symbols-outlined text-red-600 text-sm">
                                                    medical_services
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">Emergency admission</p>
                                                <p className="text-sm text-gray-500">
                                                    John Doe admitted to ER with chest pain
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-100 rounded-full p-2 mt-1">
                                                <span className="material-symbols-outlined text-purple-600 text-sm">
                                                    medication
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">Medication updated</p>
                                                <p className="text-sm text-gray-500">
                                                    Dr. Thompson updated prescription for Michael Brown
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <button className="w-full mt-4 text-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
                                    View All Activity
                                </button>
                            </div>
                        </div>
                        {/* Next: "Add filter options for activities by type" */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;