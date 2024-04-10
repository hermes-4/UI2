import React from "react";
import {
    FolderIcon,
    BuildingOffice2Icon,
    UsersIcon,
    UserGroupIcon,
    BuildingLibraryIcon,
    ArrowUpRightIcon,
    ArrowUpLeftIcon,
} from "@heroicons//react/24/outline";

interface Info {
    title: string;
    number: number;
    icon: React.ReactNode;
}

const Folder = <FolderIcon className="h-5 w-5 text-red-900" />;
const MapPin = (
    <svg
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-5 h-5 text-red-900"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        ></path>
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        ></path>
    </svg>
);

const Building = <BuildingOffice2Icon className="w-5 h-5 text-red-900" />;
const Passenger = <UsersIcon className="w-5 h-5 text-red-900" />;
const Capacity = <UserGroupIcon className="h-5 w-5 text-red-900" />;

const Town = <BuildingLibraryIcon className="h-5 w-5 text-red-900" />;
const Route = <ArrowUpRightIcon className="h-5 w-5 text-red-900" />;
const Branch = (
    <>
        <ArrowUpRightIcon className="h-5 w-5 text-red-900" />
        <ArrowUpLeftIcon className="h-5 w-5 text-red-900" />
    </>
);
const Trip = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 150"
        className="h-5 w-5"
    >
        <rect x="50" y="30" width="200" height="90" fill="red" />
        <rect x="70" y="40" width="60" height="50" fill="#ffffff" />
        <rect x="140" y="40" width="60" height="50" fill="#ffffff" />
        <circle cx="80" cy="120" r="15" fill="#000000" />
        <circle cx="220" cy="120" r="15" fill="#000000" />
    </svg>
);

const Incident = (
    <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="200"
        height="200"
    >
        <rect
            x="20"
            y="30"
            width="60"
            height="40"
            fill="#ffffff"
            stroke="#EF4444"
            stroke-width="2"
        />

        <rect x="40" y="35" width="20" height="30" fill="#f00" />

        <circle cx="28" cy="35" r="4" fill="#fff" />
        <circle cx="72" cy="35" r="4" fill="#fff" />
    </svg>
);

const Minor = (
    <svg
        className="h-6 w-6"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="red"
            strokeWidth="5"
        />

        <circle
            cx="70"
            cy="70"
            r="10"
            fill="none"
            stroke="red"
            strokeWidth="3"
        />
        <circle
            cx="130"
            cy="70"
            r="10"
            fill="none"
            stroke="red"
            strokeWidth="3"
        />

        <circle
            cx="100"
            cy="100"
            r="5"
            fill="none"
            stroke="red"
            strokeWidth="3"
        />

        <path
            d="M 80 120 Q 100 140 120 120"
            fill="none"
            stroke="red"
            strokeWidth="3"
        />
    </svg>
);
const Main = [
    { title: "No. of Trips", number: 1, icon: Trip },
    { title: "No. of Passengers", number: 0, icon: Passenger },
    { title: "No. of Minors", number: 0, icon: Minor },
    { title: "No. of Capacity", number: 50, icon: Capacity },
    { title: "No. of Migrations", number: 0, icon: Folder },
    { title: "No. of Incidents", number: 0, icon: Incident },
];

const Other = [
    {
        title: "No. of Companies",
        number: 26,
        icon: Building,
    },
    { title: "No. of Branches", number: 68, icon: Branch },
    {
        title: "No. of Loading Points",
        number: 74,
        icon: MapPin,
    },
    { title: "No. of Towns", number: 44, icon: Town },
    { title: "No. of Routes", number: 247, icon: Route },
    { title: "No. of Midroutes", number: 46, icon: Route },
];
function InfoItem({ title, number, icon }: Info) {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
                <h2 className="text-sm font-regular" style={{ fontSize: 12 }}>
                    {title}
                </h2>
                <p className="text-sm font-bold" style={{ fontSize: 12 }}>
                    {number}
                </p>
            </div>
            <div className="col-span-1 flex justify-end items-center">
                {icon}
            </div>
        </div>
    );
}

export default function Tile() {
    return (
        <>
            <div
                className="float-right my-2"
                style={{ fontSize: 18, width: "85.5%" }}
            >
                <p>Main</p>
            </div>
            <div
                className="grid grid-cols-3 gap-4 grid-flow-row justify-between w-10/12 float-right mr-4"
                style={{ width: "85.5%" }}
            >
                {Main.map((item, index) => (
                    <div
                        key={index}
                        className="col-span-1 bg-white right-16 rounded-lg shadow-md h-16 p-2 "
                    >
                        <InfoItem
                            title={item.title}
                            number={item.number}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>

            <div
                className="w-10/12 float-right my-2 "
                style={{ fontSize: 18, width: "85.5%" }}
            >
                <p>Other</p>
            </div>
            <div
                className="grid grid-cols-3 gap-4 grid-flow-row justify-between w-10/12 float-right mr-4"
                style={{ width: "85.5%" }}
            >
                {Other.map((item, index) => (
                    <div
                        key={index}
                        className="col-span-1 bg-white right-16 rounded-lg shadow-md h-16 p-2 "
                    >
                        <InfoItem
                            title={item.title}
                            number={item.number}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
