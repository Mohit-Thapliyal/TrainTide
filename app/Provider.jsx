"use client";
import { useState } from "react";
import { appointments as defaultAppointments } from "@/app/data.json";
import { AppointmentContext } from "./Context";

function AppointmentContextProvider({ children }) {
    const [appointments, setAppointments] = useState(defaultAppointments);

    return (
        <div>
            <AppointmentContext.Provider
                value={{ appointments }}
            >
                {children}
            </AppointmentContext.Provider>
        </div>
    );
}

export default AppointmentContextProvider;
