"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
    HomeIcon,
    UsersIcon,
    ClockIcon,
    ChevronDoubleLeftIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    TicketIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logo.ico";

const Home = <HomeIcon className="h-5 w-5 text-black" />;

const User = <UsersIcon className="h-6 w-6 text-black" />;

const Schedule = <ClockIcon className="h-5 w-5 text-black" />;
const Ticket = <TicketIcon className="h-6 w-6 text-gray-500" />;
const Incident = <></>;
const Booking = <></>;
const Company = <></>;
const Bus = <></>;
const Branch = <></>;
const Points = <></>;
const Point = <></>;
const Pickup = <></>;
const Midroute = <></>;
const Staff = <></>;
const Region = <></>;

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Accounts", href: "/accounts", icon: User },
    { name: "Tickets", href: "", icon: Ticket },
    { name: "Schedules", href: "/schedules", icon: Schedule },
    { name: "Incidents", href: "", icon: Incident },
    { name: "Booking", href: "", icon: Booking },
];

const comp = [
    { name: "Company", href: "", icon: Company },
    { name: "Bus", href: "", icon: Bus },
];

const branch = [
    { name: "Branch", href: "", icon: Branch },
    { name: "Points", href: "", icon: Points },
    { name: "Point", href: "", icon: Point },
    { name: "Pickup", href: "", icon: Pickup },
    { name: "Midroute", href: "", icon: Midroute },
    { name: "Staff", href: "", icon: Staff },
];

const other = [{ name: "Region", href: "", icon: Region }];

function General() {
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
                        <div className="grid grid-cols-4 gap-4 my-1 justify-center">
                            <p className="col-span-1 w-3 h-3 mb-2">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 400 }}
                            >
                                {link.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}
function Companies() {
    const path = usePathname();
    return (
        <>
            {comp.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-red-900 from-5% via-red-100 to-red-100 to-5%":
                            path === link.href,
                    })}
                >
                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-1 justify-center">
                            <p className="col-span-1 w-3 h-3 mb-2">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 400 }}
                            >
                                {link.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

function Branches() {
    const path = usePathname();
    return (
        <>
            {branch.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-red-900 from-5% via-red-100 to-red-100 to-5%":
                            path === link.href,
                    })}
                >
                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-1 justify-center">
                            <p className="col-span-1 w-3 h-3 mb-2">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 400 }}
                            >
                                {link.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

function Other() {
    const path = usePathname();
    return (
        <>
            {other.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-red-900 from-5% via-red-100 to-red-100 to-5%":
                            path === link.href,
                    })}
                >
                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-1 justify-center">
                            <p className="col-span-1 w-3 h-3 mb-2">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 400 }}
                            >
                                {link.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default function Sidenav() {
    const [isGeneralOpen, setIsGeneralOpen] = useState(true);

    const toggleGeneral = () => {
        setIsGeneralOpen(!isGeneralOpen);
    };

    const [isCompaniesOpen, setIsCompaniesOpen] = useState(true);

    const toggleCompanies = () => {
        setIsCompaniesOpen(!isCompaniesOpen);
    };

    const [isBranchesOpen, setIsBranchesOpen] = useState(true);

    const toggleBranches = () => {
        setIsBranchesOpen(!isBranchesOpen);
    };

    const [isOtherOpen, setIsOtherOpen] = useState(true);

    const toggleOther = () => {
        setIsOtherOpen(!isOtherOpen);
    };

    //when isdropdown is true, render the list
    return (
        <>
            <div className="fixed  top-0 bottom-0 w-40 bg-white overflow-x-auto">
                <div className="text-lg font-small my-2 grid grid-cols-5 justify-center items-center">
                    <Image src={logo} alt="OYA logo" className="w-7 h-7 mx-1" />
                    <p
                        className="col-span-3 font-bold ml-2"
                        style={{ fontSize: 14, fontWeight: 700 }}
                    >
                        Operations
                    </p>
                    <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-900 " />
                </div>

                {isGeneralOpen ? (
                    <>
                        <div className="grid grid-cols-4 justify-center items-center m-4">
                            <p
                                className="col-span-3"
                                style={{ fontSize: 14, fontWeight: 400 }}
                            >
                                General
                            </p>
                            <ChevronUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleGeneral}
                            />
                        </div>
                        <General />
                    </>
                ) : (
                    <div className="grid grid-cols-4 justify-center items-center m-4">
                        <p
                            className="col-span-3 font-light"
                            style={{ fontSize: 14, fontWeight: 400 }}
                        >
                            General
                        </p>
                        <ChevronDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleGeneral}
                        />
                    </div>
                )}

                {isCompaniesOpen ? (
                    <>
                        <div className="grid grid-cols-4 justify-center items-center m-4">
                            <p
                                className="col-span-3"
                                style={{ fontSize: 14, fontWeight: 400 }}
                            >
                                Companies
                            </p>
                            <ChevronUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleCompanies}
                            />
                        </div>
                        <Companies />
                    </>
                ) : (
                    <div className="grid grid-cols-4 justify-center items-center m-4">
                        <p
                            className="col-span-3 font-light"
                            style={{ fontSize: 14, fontWeight: 400 }}
                        >
                            Companies
                        </p>
                        <ChevronDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleCompanies}
                        />
                    </div>
                )}

                {isBranchesOpen ? (
                    <>
                        <div className="grid grid-cols-4 justify-center items-center m-4">
                            <p
                                className="col-span-3"
                                style={{ fontSize: 14, fontWeight: 400 }}
                            >
                                Branches
                            </p>
                            <ChevronUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleBranches}
                            />
                        </div>
                        <Branches />
                    </>
                ) : (
                    <div className="grid grid-cols-4 justify-center items-center m-4">
                        <p
                            className="col-span-3 font-light"
                            style={{ fontSize: 14, fontWeight: 400 }}
                        >
                            Branches
                        </p>
                        <ChevronDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleBranches}
                        />
                    </div>
                )}

                {isOtherOpen ? (
                    <>
                        <div className="grid grid-cols-4 justify-center items-center m-4">
                            <p
                                className="col-span-3"
                                style={{ fontSize: 14, fontWeight: 400 }}
                            >
                                Other
                            </p>
                            <ChevronUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleOther}
                            />
                        </div>
                        <Other />
                    </>
                ) : (
                    <div className="grid grid-cols-4 justify-center items-center m-4">
                        <p
                            className="col-span-3 font-light"
                            style={{ fontSize: 14, fontWeight: 400 }}
                        >
                            Other
                        </p>
                        <ChevronDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleOther}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
