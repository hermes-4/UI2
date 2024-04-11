"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
    HomeIcon,
    ChevronDoubleLeftIcon,
    ChevronDownIcon,
    BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logo.ico";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import CarCrashOutlinedIcon from "@mui/icons-material/CarCrashOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapIcon from "@mui/icons-material/Map";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const Home = (
    <HomeIcon className="h-4 w-4 text-black" style={{ fontSize: 14 }} />
);
const Schedule = <AccessTimeOutlinedIcon style={{ fontSize: 14 }} />;
const Ticket = <NewspaperOutlinedIcon style={{ fontSize: 14 }} />;
const Incident = <CarCrashOutlinedIcon style={{ fontSize: 14 }} />;
const Booking = <BookOnlineOutlinedIcon style={{ fontSize: 14 }} />;
const Company = <BuildingOffice2Icon style={{ fontSize: 14 }} />;
const Bus = <AirportShuttleOutlinedIcon style={{ fontSize: 14 }} />;
const Branch = <AccountTreeOutlinedIcon style={{ fontSize: 14 }} />;
const Points = <LocationSearchingOutlinedIcon style={{ fontSize: 14 }} />;
const Point = <PriceChangeOutlinedIcon style={{ fontSize: 14 }} />;
const Pickup = <RoomOutlinedIcon style={{ fontSize: 14 }} />;
const Midroute = <RoomOutlinedIcon style={{ fontSize: 14 }} />;
const Staff = <PeopleAltOutlinedIcon style={{ fontSize: 14 }} />;
const Region = <MapIcon style={{ fontSize: 14 }} />;

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Accounts", href: "", icon: Staff },
    { name: "Tickets", href: "", icon: Ticket },
    { name: "Schedules", href: "", icon: Schedule },
    { name: "Incidents", href: "", icon: Incident },
    { name: "Advanced Booking", href: "", icon: Booking },
];

const comp = [
    { name: "Bus Companies", href: "", icon: Company },
    { name: "Bus", href: "", icon: Bus },
];

const branch = [
    { name: "All Branches", href: "", icon: Branch },
    { name: "Loading Points", href: "", icon: Points },
    { name: "Loading Point Here", href: "", icon: Point },
    { name: "Pickup Points", href: "", icon: Pickup },
    { name: "Midroutes", href: "", icon: Midroute },
    { name: "Staff", href: "", icon: Staff },
];

const other = [{ name: "Regions", href: "", icon: Region }];

function General() {
    const path = usePathname();
    return (
        <>
            {links.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center ", {
                        " bg-gradient-to-r from-red-900 from-5% via-red-100 to-red-100 to-5%":
                            path === link.href,
                    })}
                >
                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-2 items-center ">
                            <p className=" col-span-1  mb-1 mt-0">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3  truncate"
                                style={{ fontSize: 10, fontWeight: 500 }}
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
                        <div className="grid grid-cols-4 gap-4 my-2 items-center ">
                            <p className=" col-span-1  mb-1 mt-0">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 500 }}
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
                        <div className="grid grid-cols-4 gap-4 my-2 items-center ">
                            <p className=" col-span-1  mb-1 mt-0">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 500 }}
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
                        <div className="grid grid-cols-4 gap-4 my-2 items-center ">
                            <p className=" col-span-1  mb-1 mt-0">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 10, fontWeight: 600 }}
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
                <div>
                    <div className="text-lg font-small my-2 grid grid-cols-5 justify-center items-center">
                        <Image
                            src={logo}
                            alt="OYA logo"
                            className="w-7 h-7 mx-1"
                        />
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
                            <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
                                <p
                                    className="col-span-3"
                                    style={{ fontSize: 14, fontWeight: 400 }}
                                >
                                    General
                                </p>
                                <ChevronDownIcon
                                    className="h-6 w-6 text-gray-900 col-span-1"
                                    onClick={toggleGeneral}
                                />
                            </div>
                            <General />
                        </>
                    ) : (
                        <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
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
                            <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
                                <p
                                    className="col-span-3"
                                    style={{ fontSize: 14, fontWeight: 400 }}
                                >
                                    Companies
                                </p>
                                <ChevronDownIcon
                                    className="h-6 w-6 text-gray-900 col-span-1"
                                    onClick={toggleCompanies}
                                />
                            </div>
                            <Companies />
                        </>
                    ) : (
                        <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
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
                            <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
                                <p
                                    className="col-span-3"
                                    style={{ fontSize: 14, fontWeight: 400 }}
                                >
                                    Branches
                                </p>
                                <ChevronDownIcon
                                    className="h-6 w-6 text-gray-900 col-span-1"
                                    onClick={toggleBranches}
                                />
                            </div>
                            <Branches />
                        </>
                    ) : (
                        <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
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
                            <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
                                <p
                                    className="col-span-3"
                                    style={{ fontSize: 14, fontWeight: 400 }}
                                >
                                    Other
                                </p>
                                <ChevronDownIcon
                                    className="h-6 w-6 text-gray-900 col-span-1"
                                    onClick={toggleOther}
                                />
                            </div>
                            <Other />
                        </>
                    ) : (
                        <div className="grid grid-cols-4 justify-center items-center mx-4 my-2">
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
            </div>
        </>
    );
}
