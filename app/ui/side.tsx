"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Bars3BottomLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    AttachMoneyOutlined,
    CopyrightOutlined,
    DescriptionOutlined,
    EmailOutlined,
    ImportContactsTwoTone,
    LocalMallOutlined,
    LocalOfferOutlined,
    NearMeOutlined,
    PhoneInTalkOutlined,
    ShoppingCartOutlined,
    TrendingUpOutlined,
    ViewInArOutlined,
} from "@mui/icons-material";
import { PhotoIcon } from "@heroicons/react/24/outline";

const links = [
    { name: "Catalog", href: "" },
    { name: "Order From", href: "" },
    { name: "Orders", href: "" },
    { name: "Recurring Orders", href: "" },
    { name: "Vendor Invoice", href: "/" },
];

const commissary = [{ name: "", href: "", icon: "" }];

const e_i = [{ name: "", href: "", icon: "" }];

const inventory = [{ name: "", href: "", icon: "" }];

const recipes = [{ name: "", href: "", icon: "" }];

const pos = [{ name: "", href: "", icon: "" }];

const i_v = [{ name: "", href: "", icon: "" }];

const trackers = [{ name: "", href: "", icon: "" }];

const i_va = [{ name: "", href: "", icon: "" }];

const reorts = [{ name: "", href: "", icon: "" }];

function Home() {
    return (
        <>
            <div className="grid grid-cols-4 my-2 ml-4 h-8 justify-center items-center text-gray-5s00 ">
                <p className=" col-span-1  mb-1 mt-0">
                    <HomeIcon className="w-6 h-6" />
                </p>
                <p
                    className="col-span-3"
                    style={{ fontSize: 18, fontWeight: 500 }}
                >
                    Home
                </p>
            </div>
        </>
    );
}

function Order_Invoice() {
    const path = usePathname();
    return (
        <div className="bg-green">
            {links.map((link, index) => (
                <div
                    key={index}
                    // className={clsx("flex  ", {
                    //     " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-200 to-5%":
                    //         path === link.href,
                    // })}
                    className={clsx("", {
                        "text-green-600": path === link.href,
                    })}
                >
                    <Link href={link.href}>
                        <div className=" py-2 ml-14 flex justify-start items-start ">
                            <p style={{ fontSize: 12, fontWeight: 500 }}>
                                {link.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

function Commissary() {
    const path = usePathname();
    return (
        <>
            {commissary.map((link, index) => (
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
                                style={{ fontSize: 12, fontWeight: 500 }}
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

function EI() {
    const path = usePathname();
    return (
        <>
            {e_i.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
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
                                style={{ fontSize: 12, fontWeight: 500 }}
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

function Inventory() {
    const path = usePathname();
    return (
        <>
            {inventory.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
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
                                style={{ fontSize: 12, fontWeight: 600 }}
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

function Recipes() {
    const path = usePathname();
    return (
        <>
            {recipes.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
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
                                style={{ fontSize: 12, fontWeight: 600 }}
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

function POS() {
    const path = usePathname();
    return (
        <>
            {pos.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
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
                                style={{ fontSize: 12, fontWeight: 600 }}
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

function Item_Vendor() {
    const path = usePathname();
    return (
        <>
            {i_v.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
                            path === link.href,
                    })}
                >
                    <div className="grid grid-cols-4 gap-4 my-2 items-center "></div>
                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-2 items-center ">
                            <p className=" col-span-1  mb-1 mt-0">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 12, fontWeight: 500 }}
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

function Trackers() {
    const path = usePathname();
    return (
        <>
            {trackers.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
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
                                style={{ fontSize: 12, fontWeight: 600 }}
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

function Image_Vault() {
    const path = usePathname();
    return (
        <>
            {i_va.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
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
                                style={{ fontSize: 12, fontWeight: 600 }}
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

function Reorts() {
    const path = usePathname();
    return (
        <>
            {reorts.map((link, index) => (
                <div
                    key={index}
                    className={clsx("flex justify-center items-center", {
                        " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
                            path === link.href,
                    })}
                >
                    {/* <div
                        className={clsx("flex justify-center items-center", {
                            " bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-100 to-5%":
                                path === link.href,
                        })}
                    > */}

                    <Link href={link.href}>
                        <div className="grid grid-cols-4 gap-4 my-2 items-center ">
                            <p className=" col-span-1  mb-1 mt-0">
                                {link.icon}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 12, fontWeight: 600 }}
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

export default function Side() {
    const [isOIOpen, setIsOIOpen] = useState(true);

    const toggleOI = () => {
        setIsOIOpen(!isOIOpen);
    };

    const [isCommissaryOpen, setIsCommissaryOpen] = useState(false);

    const toggleCommissary = () => {
        setIsCommissaryOpen(!isCommissaryOpen);
    };

    const [isEIOpen, setIsEIOpen] = useState(false);

    const toggleEI = () => {
        setIsEIOpen(!isEIOpen);
    };

    const [isInventoryOpen, setIsInventoryOpen] = useState(false);

    const toggleInventory = () => {
        setIsInventoryOpen(!isInventoryOpen);
    };

    const [isRecipesOpen, setIsRecipesOpen] = useState(false);

    const toggleRecipes = () => {
        setIsRecipesOpen(!isRecipesOpen);
    };

    const [isPosOpen, setIsPosOpen] = useState(false);

    const togglePos = () => {
        setIsPosOpen(!isPosOpen);
    };

    const [isItemOpen, setIsItemOpen] = useState(false);

    const toggleItem = () => {
        setIsItemOpen(!isItemOpen);
    };

    const [isTrackersOpen, setIsTrackersOpen] = useState(false);

    const toggleTrack = () => {
        setIsTrackersOpen(!isTrackersOpen);
    };

    const [isImageOpen, setIsImageOpen] = useState(false);

    const toggleIv = () => {
        setIsImageOpen(!isImageOpen);
    };

    const [isReortsOpen, setIsReortsOpen] = useState(false);

    const toggleReorts = () => {
        setIsReortsOpen(!isReortsOpen);
    };

    return (
        <div
            className="float-left h-auto  overflow-y-auto text-gray-500 drop-shadow-sm shadow"
            style={{ width: "230px" }}
        >
            <div className="h-auto bg-white">
                <div
                    className="flex flex-row  h-16 bg-green text-gray-400 justify-between items-center"
                    style={{ backgroundColor: "#2D8B57 " }}
                >
                    <p className="h-4 w-24 bg-white rounded ml-5"></p>
                    <p className="h-5 w-5 mr-4 text-white">
                        <Bars3BottomLeftIcon />
                    </p>
                </div>
                <div className=" my-4 ml-7 mr-3 flex flex-row justify-between items-center text-gray-500">
                    <p
                        className=" font-bold ml-2"
                        style={{ fontSize: 15, fontWeight: 700 }}
                    >
                        Sample Kitchen
                    </p>
                    <KeyboardDoubleArrowLeftIcon className="h-5 w-5 text-gray-900 " />
                </div>
                <hr className=" text-gray-100" />
                <Home />

                {isOIOpen ? (
                    <div className="bg-green-100 m-2 rounded">
                        <div className="bg-gradient-to-r from-green-800 from-5% via-green-200 to-green-200 to-5%   rounded ">
                            <div className="grid grid-cols-5 text-green-600 justify-center items-center h-9 mx-4 my-2 ">
                                <p className=" col-span-1  mb-1 mt-0 ">
                                    <ShoppingCartOutlined className="h-6 w-6" />
                                </p>
                                <p
                                    className="col-span-3 "
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 500,
                                    }}
                                >
                                    Order & Invoice
                                </p>
                                <KeyboardArrowUpIcon
                                    className="h-6 w-6  col-span-1 ml-3"
                                    onClick={toggleOI}
                                />
                            </div>
                        </div>
                        <Order_Invoice />
                    </div>
                ) : (
                    <div className="grid grid-cols-5 justify-center items-center h-9 mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <ShoppingCartOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3"
                            style={{
                                fontSize: 15,
                                fontWeight: 500,
                            }}
                        >
                            Order & Invoice
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1 ml-3"
                            onClick={toggleOI}
                        />
                    </div>
                )}

                {isCommissaryOpen ? (
                    <>
                        <div className="grid grid-cols-5  justify-center items-center h-9 mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <LocalMallOutlined className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 16, fontWeight: 500 }}
                            >
                                Commissary
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleCommissary}
                            />
                        </div>
                        {/* <Commissary /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5  justify-center items-center h-9 mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <LocalMallOutlined />
                        </p>
                        <p
                            className="col-span-3 "
                            style={{ fontSize: 16, fontWeight: 500 }}
                        >
                            Commissary
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleCommissary}
                        />
                    </div>
                )}

                {isEIOpen ? (
                    <>
                        <div className="grid grid-cols-5 justify-center items-center h-9 mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <ImportContactsTwoTone className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Electronic Invoice
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 float-right text-gray-900 col-span-1"
                                onClick={toggleEI}
                            />
                        </div>
                        {/* <EI /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 justify-center items-center h-9 mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <ImportContactsTwoTone />
                        </p>
                        <p
                            className="col-span-3 "
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Electronic Invoice
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleEI}
                        />
                    </div>
                )}

                {isInventoryOpen ? (
                    <>
                        <div className="grid grid-cols-5 justify-center items-center h-9 mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <ViewInArOutlined className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Inventory
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleInventory}
                            />
                        </div>
                        {/* <Inventory /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <ViewInArOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3 "
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Inventory
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleInventory}
                        />
                    </div>
                )}

                {isRecipesOpen ? (
                    <>
                        <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <DescriptionOutlined className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Recipes
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleRecipes}
                            />
                        </div>
                        {/* <Recipes /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <DescriptionOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3 font-light"
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Recipes
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleRecipes}
                        />
                    </div>
                )}

                {isPosOpen ? (
                    <>
                        <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <AttachMoneyOutlined className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Point of Sale
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={togglePos}
                            />
                        </div>
                        {/* <POS /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <AttachMoneyOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3 font-light"
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Point of Sale
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={togglePos}
                        />
                    </div>
                )}

                {isItemOpen ? (
                    <>
                        <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <LocalOfferOutlined className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Item Vendors
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleItem}
                            />
                        </div>
                        {/* <Item_Vendor /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <LocalOfferOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3"
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Item Vendors
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleItem}
                        />
                    </div>
                )}

                {isTrackersOpen ? (
                    <>
                        <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <NearMeOutlined className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Trackers
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleTrack}
                            />
                        </div>
                        {/* <Trackers /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <NearMeOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3 "
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Trackers
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleTrack}
                        />
                    </div>
                )}

                {isImageOpen ? (
                    <>
                        <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <PhotoIcon className="h-6 w-6" />
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Image Vault
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleIv}
                            />
                        </div>
                        {/* <Image_Vault /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <PhotoIcon className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3 "
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Image Vault
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleIv}
                        />
                    </div>
                )}

                {isReortsOpen ? (
                    <>
                        <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                            <p className=" col-span-1  mb-1 mt-0">
                                <TrendingUpOutlined className="h-6 w-6" />{" "}
                            </p>
                            <p
                                className="col-span-3"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                Reorts
                            </p>
                            <KeyboardArrowUpIcon
                                className="h-6 w-6 text-gray-900 col-span-1"
                                onClick={toggleReorts}
                            />
                        </div>
                        {/* <Reorts /> */}
                    </>
                ) : (
                    <div className="grid grid-cols-5 h-9 justify-center items-center mx-4 my-2">
                        <p className=" col-span-1  mb-1 mt-0">
                            <TrendingUpOutlined className="h-6 w-6" />
                        </p>
                        <p
                            className="col-span-3"
                            style={{ fontSize: 15, fontWeight: 500 }}
                        >
                            Reorts
                        </p>
                        <KeyboardArrowDownIcon
                            className="h-6 w-6 text-gray-900 col-span-1"
                            onClick={toggleReorts}
                        />
                    </div>
                )}
            </div>
            <div className="text-gray-500">
                <div className="flex flex-row mt-4 mb-2">
                    <p>
                        <EmailOutlined className="mr-2 w-4 h-4" />
                    </p>
                    <p>info@fntech.com</p>
                </div>
                <div className="flex flex-row mt-1 mb-2">
                    <PhoneInTalkOutlined className="h-7 w-4 mr-2" />
                    <p>(844)367-77---</p>
                </div>
                <div className="flex flex-row mt-1 mb-4 ">
                    <CopyrightOutlined className="pt-1 w-4 h-5" />
                    <p>2018,FNBTech Inc. v5.10</p>
                </div>
            </div>
        </div>
    );
}
