"use client";

import { useContext } from "react";
import { AppointmentContext } from "../../Context";
import { useParams } from "next/navigation";
import { formatTimeAndDate } from "@/app/utils";


const Appointment = () => {
    const { appointments } = useContext(AppointmentContext);
    const { id } = useParams();
    const userInfo = appointments.filter((data) => data.id === id)[0];
    return (
        <div className="flex px-24 py-10 gap-8 flex-col">
            <div className="flex flex-col gap-1">
                <p className="text-xl font-medium">{userInfo.firstname+" "+userInfo.lastname}</p>
                <p>{userInfo.location}</p>
            </div>
            <div className="flex gap-5">
                {userInfo.appointments.map((data) => (
                    <div
                        key={data}
                        className="flex p-5 bg-gray-100 rounded-md shadow-md flex-col gap-2"
                    >
                        <span className="">
                            {formatTimeAndDate(data).time}
                        </span>
                        <span className="">{formatTimeAndDate(data).date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointment;
