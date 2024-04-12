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
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CarCrashOutlinedIcon from "@mui/icons-material/CarCrashOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import ForkLefttOutlinedIcon from "@mui/icons-material/ForkLeftOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocationCityIcon from "@mui/icons-material/LocationCity";
interface Info {
    title: string;
    number: number;
    icon: React.ReactNode;
}
const Incident = (
    <CarCrashOutlinedIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);

const Folder = (
    <FolderIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);
const MapPin = (
    <RoomOutlinedIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);

const Building = (
    <BuildingOffice2Icon
        className="w-5 h-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);
const Passenger = (
    <PeopleAltOutlinedIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);
const Capacity = (
    <UserGroupIcon
        className="h-5 w-5 "
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);

const Town = (
    <LocationCityIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);
const Route = (
    <ForkLefttOutlinedIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);
const Branch = (
    <AccountTreeOutlinedIcon
        className="h-5 w-5"
        style={{ fontSize: 18, color: "#7c0000" }}
    />
);
const Trip = (
    <AirportShuttleIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
);

const Minor = (
    <ChildCareOutlinedIcon
        className="h-5 w-5"
        style={{ fontSize: 14, color: "#7c0000" }}
    />
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
                <h2 className="text-sm font-regular" style={{ fontSize: 14 }}>
                    {title}
                </h2>
                <p className="text-sm font-bold" style={{ fontSize: 15 }}>
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
                className="text-gray-500 float-right my-2"
                style={{ fontSize: 18, width: "86.7%" }}
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
                className="text-gray-500 float-right my-2 "
                style={{ fontSize: 18, width: "86.7%" }}
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
