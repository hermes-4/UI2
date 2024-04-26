"use client";
import { useState } from "react";
import {
    AccountCircleOutlined,
    AddBoxOutlined,
    AttachMoneyOutlined,
    DeleteOutline,
    EditOutlined,
    NoteAddOutlined,
    NotificationsOutlined,
    SearchOutlined,
    ThumbUpAltOutlined,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    ArrowsUpDownIcon,
    PencilSquareIcon,
    TrashIcon,
    WalletIcon,
} from "@heroicons/react/24/outline";
const Top = () => {
    const [isUserDropped, setIsUserDropped] = useState<boolean>(false);

    const UserDropDown = () => {
        setIsUserDropped(!isUserDropped);
    };
    return (
        <>
            <div
                className="w-full"
                style={{
                    height: "64px",
                    backgroundImage:
                        "linear-gradient(to right, #2D8B57 93%, #32774D 7%)",
                }}
            >
                <div className="flex flex-row justify-between ">
                    <div className="flex flex-row pt-4  justify-center items-center text-gray-200  ">
                        <p className="ml-6  ">
                            <SearchOutlined />
                        </p>
                        <p>Search</p>
                    </div>
                    <div className="flex flex-row pt-2 items-center justify-center mr-2 sm:mr-2 md:mr-3 text-gray-200">
                        <div className="inline">
                            <NotificationsOutlined className="ml-3" />
                        </div>
                        <div className=" flex flex-row mr-2 items-center justify-center">
                            <div className="mx-2">
                                <AccountCircleOutlined className="w-10 h-10" />
                            </div>
                            <div>
                                <p>Ebenezer Acquah</p>
                            </div>
                            <div onClick={UserDropDown}>
                                {isUserDropped ? (
                                    <KeyboardArrowUpIcon className="h-6 w-6 text-gray-200 mr-5" />
                                ) : (
                                    <KeyboardArrowDownIcon className="h-6 w-6 text-gray-200 mr-5" />
                                )}
                            </div>
                        </div>
                        {isUserDropped}
                    </div>
                </div>
            </div>
        </>
    );
};

const Us = () => {
    return (
        <>
            <div className="mx-2 px-2">
                <div className=" flex flex-row mt-4 pt-4 justify-between text-black text-lg font-black">
                    <div>
                        <p>US Foods</p>
                    </div>
                    <div className=" flex flex-row  bg-green-100 h-auto w-max  pl-1 pr-2 pb-1 pt-1 mr-2 mt-1 mb-2 rounded-md ">
                        <p>
                            <EditOutlined className="h-5 text-green-600" />
                        </p>
                        <p className="h-auto  text-green-600">Edit</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <div className="flex flex-row">
                            <p className=" text-gray-400 ">Receive Date:</p>
                            <p className="font-bold   text-gray-700 ml-5">
                                03/23.2018
                            </p>
                        </div>

                        <div className="flex flex-row">
                            <p className=" text-gray-400">Invoice Date:</p>
                            <p className="font-bold  text-gray-700 ml-6">
                                $575.00
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-300 mb-5 mx-3 hidden md:block"
                        style={{ width: "2px", height: "50px" }}
                    ></div>
                    <div>
                        <div className="flex  flex-row ml-0 lg:ml-14 mr-7 ">
                            <p className=" text-gray-400 ">Invoice No.:</p>
                            <p className="font-bold lg:ml-5 text-gray-700 ml-8">
                                185432asd
                            </p>
                        </div>
                        <div className="flex  flex-row ml-0 lg:ml-14 mr-5 ">
                            <p className=" text-gray-400 ">Order No.:</p>
                            <p className="font-bold lg:ml-8 text-gray-700 ml-11">
                                354
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-300 mb-5 mx-3 hidden md:block"
                        style={{ width: "2px", height: "50px" }}
                    ></div>
                    <div>
                        <div className="flex flex-row ml-0 lg:ml-12 ">
                            <p className=" text-gray-400 ">Due Date:</p>
                            <p className="font-bold lg:ml-5 text-gray-700 ml-12">
                                03/23/2018
                            </p>
                        </div>

                        <div className="flex  flex-row ml-0 lg:ml-12">
                            <p className=" text-gray-400 ml-0 ">Amount:</p>
                            <p className="font-bold lg:ml-8 text-gray-700 ml-14">
                                $575.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Table = () => {
    return (
        <>
            <table className="mt-6 mx-2 text-sm   border-collapse table-auto">
                <thead
                    className=" w-auto "
                    style={{ backgroundColor: "rgb(241, 241, 241" }}
                >
                    <th
                        className="text-gray-800 w-auto pt-4 pl-2  flex flex-row mb-3"
                        style={{ width: "2%" }}
                    >
                        <p>#</p>
                        <p>
                            <ArrowsUpDownIcon
                                className="w-4 h-5"
                                style={{ fontWeight: 900 }}
                            />
                        </p>
                    </th>
                    <th
                        className="text-gray-800 py-3 hidden sm:hidden md:inline"
                        style={{ width: "3%" }}
                    >
                        SKU
                    </th>
                    <th className="text-gray-800 w-auto py-3 pr-4 lg:pr-72 ">
                        ITEMS
                    </th>
                    <th className="text-gray-800 w-auto py-3 pr-3 lg:pl-11">
                        QUANTITY
                    </th>
                    <th className="text-gray-800 w-auto py-3  lg:pr-0 lg:pl-8">
                        PRICE
                    </th>
                    <th className="text-gray-800 w-auto py-3 pr-3 lg:pr-32">
                        AMOUNT
                    </th>
                </thead>
                <tbody className="text-gray-600">
                    <tr className="w-auto ">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "2%" }}
                        >
                            01
                        </td>
                        <td
                            className=" py-3  px-4 hidden sm:hidden md:inline"
                            style={{ width: "3%" }}
                        >
                            -
                        </td>
                        <td className="flex lg:flex-row flex-col py-3">
                            <p className="text-green-400 ">
                                Arthoke Hearted 6x55oz
                            </p>

                            <p className="">(Dry/Canned, 900-Dry)</p>
                        </td>
                        <td className="py-3 lg:pl-12">3xcase</td>
                        <td className="py-3 lg:pl-10 ">$50.00</td>
                        <td className="pb-3 flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className=" pb-2 lg:pl-0 lg:pb-0 ">
                                <p>250.00</p>
                            </div>
                            <div className="flex flex-row gap-2  lg:ml-11 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 lg:ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr className="w-auto bg-gray-100">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "2%" }}
                        >
                            02
                        </td>
                        <td
                            className="py-3 px-4 hidden sm:hidden md:inline"
                            style={{ width: "3%" }}
                        >
                            -
                        </td>
                        <td className="flex lg:flex-row flex-col py-3">
                            <p className="text-green-400 ">
                                Bacon, Sliced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3 lg:pl-12">2xcase</td>
                        <td className="py-3 lg:pl-10">52.00</td>
                        <td className="py-3 flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className="pb-2 lg:pl-0 lg:pb-0 ">
                                <p>150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-11 lg:pl-16">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 lg:ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr className="w-auto ">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "2%" }}
                        >
                            04
                        </td>
                        <td
                            className="py-3 px-4 hidden sm:hidden md:inline"
                            style={{ width: "3%" }}
                        >
                            -
                        </td>
                        <td className="flex lg:flex-row flex-col py-3">
                            <p className="text-green-400">
                                Bison, Graound 1x1lb
                            </p>
                            <p className="">(Meat, 1000-Meat)</p>
                        </td>
                        <td className="py-3 lg:pl-12">2xlb</td>
                        <td className="py-3 lg:pl-10">54.04</td>
                        <td className="py-3  flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className="  pb-2 lg:pl-0 lg:pb-0 ">
                                <p>108.08</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-11 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 lg:ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr className="w-auto bg-gray-100">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "2%" }}
                        >
                            05
                        </td>
                        <td
                            className="py-3 px-4 hidden sm:hidden md:inline"
                            style={{ width: "3%" }}
                        >
                            -
                        </td>
                        <td className="flex lg:flex-row flex-col py-3">
                            <p className="text-green-400">
                                Bacon, SLiced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3 lg:pl-12">2xcase</td>
                        <td className="py-3 lg:pl-10">52.00</td>
                        <td className="py-3 flex flex-col lg:flex-row pl-6 lg:pl-11">
                            <div className=" pb-2 lg:pr-5 lg:pl-0 lg:pb-0 ">
                                <p>150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-12 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2  lg:ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>

                    <tr className="w-auto ">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "2%" }}
                        >
                            06
                        </td>
                        <td
                            className=" py-3  px-4 hidden sm:hidden md:inline"
                            style={{ width: "3%" }}
                        >
                            -
                        </td>
                        <td className="flex lg:flex-row flex-col py-3">
                            <p className="text-green-400">
                                Bison, Graound 1x1lb
                            </p>
                            <p className="">(Meat, 1000-Meat)</p>
                        </td>
                        <td className="py-3 lg:pl-12">2xlb</td>
                        <td className="py-3 lg:pl-10 ">54.04</td>
                        <td className="pb-3 flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className=" pb-2 lg:pl-0 lg:pb-0 ">
                                <p>108.08</p>
                            </div>
                            <div className="flex flex-row gap-2  lg:ml-11 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 lg:ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

const Tabs = () => {
    return (
        <>
            <div className="mx-5 flex flex-row float-left text-gray-300 test-sm">
                <div className="flex flex-row rounded-md border-2 border-gray-300 h-auto w-max py-2 px-2 my-5 mr-2">
                    <AddBoxOutlined className="mr-2" />
                    <p>Add Item</p>
                </div>
                <div className="flex flex-row rounded-md text-white  bg-green-700 h-auto w-max py-2 px-2 my-5 mr-2">
                    <NoteAddOutlined className="mr-2" />
                    <p>Add Non Inventory Item</p>
                </div>
                <div className="flex flex-row rounded-md border-2  border-gray-300 h-auto w-max py-2 px-2 my-5 mr-2">
                    <p>
                        <AttachMoneyOutlined className="mr-2" />
                    </p>
                    <p>Add Charge</p>
                </div>
                <div className="flex flex-row rounded-md border-2 border-gray-300 h-auto w-max py-2 px-2 my-5 mr-2">
                    <WalletIcon className="w-5 h-5 mr-2" />
                    <p>Add Credit</p>
                </div>
            </div>
            <div className="flex flex-row float-right mr-12 mt-3 pr-12 ">
                <div>
                    <p className="mr-8 text-gray-400">Sub Total :</p>
                    <p className="mr-8 text-gray-400">Total :</p>
                </div>
                <div>
                    <p className="text-gray-500">$1029.10</p>
                    <p className="text-black" style={{ fontWeight: "700" }}>
                        $1029.10
                    </p>
                </div>
            </div>
        </>
    );
};

const TabsOut = () => {
    return (
        <>
            <div className="flex flex-row justify-end float-right mr-12 my-2  bg-gray-100">
                <div className="flex flex-row rounded-md text-red-700  bg-white border-2 border-red-700 h-auto w-max py-2 px-2 my-5 mr-2">
                    <DeleteOutline className="text-red-700 mr-2" />
                    <p>Delete Invoice</p>
                </div>
                <div className="flex flex-row rounded-md text-green-600 border-2 border-green-600 h-auto w-max py-2 px-2 my-5 mr-2">
                    <ThumbUpAltOutlined className="text-green-600 mr-2" />
                    <p>Approve Invoice</p>
                </div>
                <div className="flex flex-row rounded-md text-white  bg-green-700 h-auto w-max py-2 px-2 my-5 mr-2">
                    <ThumbUpAltOutlined className="mr-2" />
                    <p>Approve & Next</p>
                </div>
            </div>
        </>
    );
};

const Cmobb = () => {
    return (
        <div className="bg-gray-100">
            <Top />
            <div className="bg-white">
                <Us />
                <Table />
            </div>
        </div>
    );
};

export default Cmobb;
