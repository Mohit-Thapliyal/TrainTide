"use client";

import { useContext } from "react";
import { AppointmentContext } from "../Context";
import Link from "next/link";
import { formatTimeAndDate } from "../utils";

const Appointments = () => {
    const { appointments } = useContext(AppointmentContext);
    return (
        <div className="flex items-center pt-48 pb-20 flex-col gap-8">
            <div className="flex flex-col fixed top-0 pt-10 pb-6 backdrop-blur-md gap-10 bg-white/90">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-medium">Appointments</p>
                    <Link href={"add"} className="bg-teal-600 p-2 px-4 rounded-md text-white">+ Add Appointment</Link>
                </div>
                <div className="flex gap-5 font-medium pl-10">
                    <span className="w-40">First Name</span>
                    <span className="w-40">Last Name</span>
                    <span className="w-40">Location</span>
                    <span className="w-52 text-center">Appointment Count</span>
                    <span className="w-52">Latest Appointment</span>
                </div>
            </div>
            {appointments.map((data) => (
                <div
                    key={data.id}
                    className="flex pl-10 bg-gray-100 py-4 rounded-md shadow-md gap-5 items-center"
                >
                    <span className="w-40">{data.firstname}</span>
                    <span className="w-40">{data.lastname}</span>
                    <span className="w-40 text-sm line-clamp-2">
                        {data.location}
                    </span>
                    <Link
                        href={`appointments/${data.id}`}
                        className="w-52 text-center underline text-blue-600 hover:text-blue-500"
                    >
                        {data.appointments.length}
                    </Link>
                    <p className="w-52 flex flex-col text-sm">
                        <span>
                            {
                                formatTimeAndDate(
                                    data.appointments[
                                        data.appointments.length - 1
                                    ]
                                ).time
                            }
                        </span>
                        <span>
                            {
                                formatTimeAndDate(
                                    data.appointments[
                                        data.appointments.length - 1
                                    ]
                                ).date
                            }
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Appointments;
