"use client";

import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="w-[18vw] bg-gray-100 min-h-screen fixed flex flex-col px-10 gap-10 pt-5 shadow-sm shadow-gray-400">
            <Link
                href="/"
                className={cx(
                    "text-xl font-medium text-center py-2 rounded-md cursor-pointer shadow-sm shadow-gray-500 duration-300",
                    pathname === "/" ? "bg-[#0F9484] text-white" : "bg-white"
                )}
            >
                TrainTide
            </Link>
            <ul className="flex flex-col gap-5">
                <Link
                    href="/appointments"
                    className={cx(
                        "text-center py-2 rounded-md cursor-pointer shadow-sm shadow-gray-500 duration-300",
                        pathname === "/appointments"
                            ? "bg-[#0F9484] text-white"
                            : "bg-white"
                    )}
                >
                    Appointments
                </Link>
                <Link
                    href="/calendar"
                    className={cx(
                        "text-center py-2 rounded-md cursor-pointer shadow-sm shadow-gray-500 duration-300",
                        pathname === "/calendar"
                            ? "bg-[#0F9484] text-white"
                            : "bg-white"
                    )}
                >
                    Calendar
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
