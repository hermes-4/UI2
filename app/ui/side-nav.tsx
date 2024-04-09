"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
    HomeIcon,
    UsersIcon,
    ClockIcon,
    ChevronDoubleLeftIcon,
    ChevronDownIcon,
    Bars4Icon,
} from "@heroicons/react/24/outline";

const Home = <HomeIcon className="h-5 w-5 text-black" />;

const User = <UsersIcon className="h-6 w-6 text-black" />;

const Schedule = <ClockIcon className="h-5 w-5 text-black" />;

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Accounts", href: "/accounts", icon: User },
    { name: "Schedules", href: "/schedules", icon: Schedule },
];

function Navlinks() {
    const path = usePathname();
    return (
        <>
            {links.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-red-900 from-5% via-red-100 to-red-100 to-5%":
                            path === link.href,
                    })}
                >
                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-2">
                            <p className="col-span-1">{link.icon}</p>
                            <p className="col-span-3">{link.name}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default function Sidenav() {
    return (
        <>
            <div className="fixed  top-0 bottom-0 w-40 bg-white  ">
                <div className="text-lg font-small my-4   grid grid-cols-5 justify-center items-center">
                    <Bars4Icon className="h-6 w-6 text-black col-span-1" />
                    <p className="col-span-3">Operations</p>
                    <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-900 " />
                </div>
                <div className="grid grid-cols-4 justify-center items-center m-4">
                    <p className="col-span-3">General</p>
                    <ChevronDownIcon className="h-6 w-6 text-gray-900 col-span-1" />
                </div>
                <Navlinks />
            </div>
        </>
    );
}
