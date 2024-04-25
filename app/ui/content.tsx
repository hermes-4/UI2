import {
    ArrowsUpDownIcon,
    PaperClipIcon,
    PencilSquareIcon,
    TrashIcon,
    WalletIcon,
} from "@heroicons/react/24/outline";
import {
    AddBoxOutlined,
    AttachMoneyOutlined,
    DeleteOutline,
    DownloadOutlined,
    EditOutlined,
    NoteAddOutlined,
    ThumbUpAltOutlined,
    WidthFullOutlined,
} from "@mui/icons-material";
import Side from "./side";
import Top from "./to";

const US = () => {
    return (
        <>
            <div className=" ml-4 mt-3" style={{ width: "88%" }}>
                <div className="flex justify-between w-full">
                    <div className="font-bold my-2 text-black">
                        <p>US Foods</p>
                    </div>
                    <div className=" flex flex-row  bg-green-100 h-auto w-auto  pl-1 pr-2 pb-1 pt-1 mr-2 mt-1 mb-2 rounded-md ">
                        <p>
                            <EditOutlined className="h-5 text-green-600" />
                        </p>
                        <p className="h-auto  text-green-600">Edit</p>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <div style={{ width: "29%" }}>
                        <div className="flex flex-col lg:flex-row">
                            <p className=" text-gray-400 ">Receive Date:</p>
                            <p className="font-bold lg:ml-5  text-gray-700">
                                03/23.2018
                            </p>
                        </div>
                        <div className="flex  flex-col lg:flex-row">
                            <p className=" text-gray-400">Invoice Date:</p>
                            <p className="font-bold lg:ml-6 text-gray-700">
                                $575.00
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-300 mb-5 hidden lg:inline"
                        style={{ width: "2px", height: "50px" }}
                    ></div>
                    <div style={{ width: "35%" }}>
                        <div className="flex  flex-col lg:flex-row ml-0 lg:ml-14 mr-7 ">
                            <p className=" text-gray-400 ">Invoice No.:</p>
                            <p className="font-bold lg:ml-5 text-gray-700">
                                185432asd
                            </p>
                        </div>
                        <div className="flex  flex-col lg:flex-row ml-0 lg:ml-14 mr-5 ">
                            <p className=" text-gray-400 ">Order No.:</p>
                            <p className="font-bold lg:ml-8 text-gray-700">
                                354
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-300 mb-5 hidden lg:inline"
                        style={{ width: "2px", height: "50px" }}
                    ></div>
                    <div style={{ width: "29%" }}>
                        <div className="flex flex-col lg:flex-row ml-0 lg:ml-12 ">
                            <p className=" text-gray-400 ">Due Date:</p>
                            <p className="font-bold lg:ml-5 text-gray-700">
                                03/23/2018
                            </p>
                        </div>
                        <div className="flex  flex-col lg:flex-row ml-0 lg:ml-12">
                            <p className=" text-gray-400 ml-0 ">Amount:</p>
                            <p className="font-bold lg:ml-8 text-gray-700">
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
            {/* <table
                className="mt-6 ml-5   border-collapse table-auto"
                style={{ width: "95" }}
            >
                 <thead
                    className="md:text-sm text-gray-600 font-bold w-max mx-1"
                    style={{ backgroundColor: "rgb(241, 241, 241" }}
                >
                    <td
                        className="text-gray-800 w-auto pt-4 pl-2  flex flex-row mb-3"
                        style={{ width: "4%" }}
                    >
                        <p>#</p>
                        <p>
                            <ArrowsUpDownIcon
                                className="w-4 h-5"
                                style={{ fontWeight: 900 }}
                            />
                        </p>
                    </td>
                    <td
                        className="text-gray-800 py-3 pl-2"
                        style={{ width: "6%" }}
                    >
                        SKU
                    </td>
                    <td className="text-gray-800 w-auto py-3 pr-56">ITEMS</td>
                    <td className="text-gray-800 w-auto py-3 ">QUANTITY</td>
                    <td className="text-gray-800 w-auto py-3 pr-6">PRICE</td>
                    <td className="text-gray-800 w-auto py-3  ">AMOUNT</td>
                </thead>
                <tbody className="text-gray-600">
                    <tr className=" ">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "4%" }}
                        >
                            01
                        </td>
                        <td className=" py-3 px-4" style={{ width: "6%" }}>
                            -
                        </td>
                        <td className="flex flex-row py-3  ">
                            <p className="text-green-400 ">
                                Arthoke Hearted 6x55oz
                            </p>

                            <p className="">(Dry/Canned, 900-Dry)</p>
                        </td>
                        <td className="py-3 pl-3">3xcase</td>
                        <td className="py-3 pl-2">$50.00</td>
                        <td className=" py-3  flex flex-row pl-3">
                            <div>
                                <p className="pt-2">250.00</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-11 pl-14 ">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4 md:ml-3">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr
                        className="bg-gray-100 border-sky-100 border-2"
                        style={{ width: "92%" }}
                    >
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "4%" }}
                        >
                            02
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
                            -
                        </td>
                        <td className="flex flex-row  py-3  ">
                            <p className="text-green-400 ">
                                Bacon, Sliced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3 pl-3">2xcase</td>
                        <td className="py-3 pl-2">52.00</td>
                        <td className="py-3 flex flex-row pl-3">
                            <div>
                                <p className="pt-2">150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-11 pl-10">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4 md:ml-6">
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
                            style={{ width: "4%" }}
                        >
                            04
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
                            -
                        </td>
                        <td className="flex flex-row py-3  ">
                            <p className="text-green-400">
                                Bison, Graound 1x1lb
                            </p>
                            <p className="">(Meat, 1000-Meat)</p>
                        </td>
                        <td className="py-3 pl-3">2xlb</td>
                        <td className="py-3 pl-2">54.04</td>
                        <td className="py-3  flex flex-row pl-3">
                            <div>
                                <p className="pt-2">108.08</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-11 pl-16">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
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
                            style={{ width: "4%" }}
                        >
                            05
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
                            -
                        </td>
                        <td className="flex flex-row py-3  ">
                            <p className="text-green-400">
                                Bacon, SLiced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3 pl-3">2xcase</td>
                        <td className="py-3 pl-2">52.00</td>
                        <td className="py-3  flex flex-row pl-3">
                            <div>
                                <p className="pt-2">150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-12 pl-14 ">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr className="w-auto">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "4%" }}
                        >
                            06
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
                            -
                        </td>
                        <td className="flex flex-row py-3  ">
                            <p className="text-green-400">
                                Bison, Graound 1x1lb
                            </p>
                            <p className="">(Meat, 1000-Meat)</p>
                        </td>
                        <td className="py-3 pl-3">2xlb</td>
                        <td className="py-3 pl-2">54.04</td>
                        <td className="py-3 flex flex-row pl-3">
                            <div>
                                <p className="pt-2">108.08</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-11 pl-14  ">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                </tbody> */}
            <table
                className="mt-6 ml-5   border-collapse table-auto"
                style={{ width: "95%", fontSize: "14" }}
            >
                <thead
                    className=" w-auto "
                    style={{ backgroundColor: "rgb(241, 241, 241" }}
                >
                    <th
                        className="text-gray-800 w-auto pt-4 pl-2  flex flex-row mb-3"
                        style={{ width: "4%" }}
                    >
                        <p>#</p>
                        <p>
                            <ArrowsUpDownIcon
                                className="w-4 h-5"
                                style={{ fontWeight: 900 }}
                            />
                        </p>
                    </th>
                    <th className="text-gray-800 py-3" style={{ width: "6%" }}>
                        SKU
                    </th>
                    <th className="text-gray-800 w-auto py-3 lg:pr-72 ">
                        ITEMS
                    </th>
                    <th className="text-gray-800 w-auto py-3  lg:pl-11">
                        QUANTITY
                    </th>
                    <th className="text-gray-800 w-auto py-3  lg:pr-0 lg:pl-8">
                        PRICE
                    </th>
                    <th className="text-gray-800 w-auto py-3 lg:pr-32">
                        AMOUNT
                    </th>
                </thead>
                <tbody className="text-gray-600">
                    <tr className="w-auto ">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "4%" }}
                        >
                            01
                        </td>
                        <td className=" py-3  px-4" style={{ width: "6%" }}>
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
                        <td className="pb-3 pt-5 flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className="pl-4 pb-2 lg:pl-0 lg:pb-0 ">
                                <p>250.00</p>
                            </div>
                            <div className="flex flex-row gap-2  lg:ml-11 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
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
                            style={{ width: "4%" }}
                        >
                            02
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
                            -
                        </td>
                        <td className="flex lg:flex-row sm:flex-col py-3">
                            <p className="text-green-400 ">
                                Bacon, Sliced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3 lg:pl-12">2xcase</td>
                        <td className="py-3 lg:pl-10">52.00</td>
                        <td className="py-3 flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className="pl-4 pb-2 lg:pl-0 lg:pb-0 ">
                                <p>150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-11 lg:pl-16">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
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
                            style={{ width: "4%" }}
                        >
                            04
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
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
                        <td className="py-3 pt-5 flex flex-col lg:flex-row pl-6 lg:pl-10">
                            <div className="pl-4 pb-2 lg:pl-0 lg:pb-0 ">
                                <p>108.08</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-11 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
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
                            style={{ width: "4%" }}
                        >
                            05
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
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
                        <td className="py-3 pt-5 flex flex-col lg:flex-row pl-7 lg:pl-11">
                            <div className="pl-4 pb-2 lg:pl-0 lg:pb-0 ">
                                <p>150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-12 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
                                    <TrashIcon className="w-4 h-4" />
                                </p>
                                <p className="text-green-600 bg-green-100 w-8 h-8 pt-2 pl-2 ">
                                    <PencilSquareIcon className="w-4 h-4" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr className="w-auto">
                        <td
                            className="w-auto py-3 pl-2"
                            style={{ width: "4%" }}
                        >
                            06
                        </td>
                        <td className="py-3 px-4" style={{ width: "6%" }}>
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
                        <td className="py-3 flex flex-col lg:flex-row pt-5 pl-6 lg:pl-10">
                            <div className="pl-4 pb-2 lg:pl-0 lg:pb-0 ">
                                <p>108.08</p>
                            </div>
                            <div className="flex flex-row gap-2 lg:ml-11 lg:pl-14">
                                <p className="text-red-600 bg-red-100 w-8 h-8 pt-2 pl-2 ml-4">
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
            <div className="flex flex-row">
                <div className="flex flex-col float-right mr-12 mt-3 pr-12 md:hidden">
                    <div className="">
                        <p className="mr-8 text-gray-400">Sub Total :</p>
                        <p className="text-gray-500">$1029.10</p>
                    </div>
                    <div className="">
                        <p className="mr-8 text-gray-400">Total :</p>

                        <p className="text-black" style={{ fontWeight: "700" }}>
                            $1029.10
                        </p>
                    </div>
                </div>
                <div className="mx-5 flex lg:flex-row float-left text-gray-300">
                    <div className="flex flex-row rounded-md border-2 border-gray-300  py-1 px-2 my-5 mr-2">
                        <AddBoxOutlined className="mr-2" />
                        <p className="">Add Item</p>
                    </div>
                    <div className="flex flex-row rounded-md text-white  bg-green-700  py-1 px-2 my-5 mr-2">
                        <NoteAddOutlined className="mr-1" />
                        <p className="">Add Non Inventory Item</p>
                    </div>

                    <div className="flex flex-row rounded-md border-2  border-gray-300 py-1 px-2 my-5 mr-2">
                        <AttachMoneyOutlined className="" />

                        <p className="">Add Charge</p>
                    </div>
                    <div className="flex flex-row rounded-md border-2 border-gray-300  pt-1 px-2 my-5 mr-2">
                        <WalletIcon className="w-6 h-5 mt-1 pr-1" />
                        <p className="">Add Credit</p>
                    </div>
                </div>
                <div className="md:flex flex-col float-right mr-12 mt-3 pr-12 hidden">
                    <div className="flex flex-row">
                        <p className="mr-8 text-gray-400">Sub Total :</p>
                        <p className="text-gray-500">$1029.10</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mr-8 text-gray-400">Total :</p>

                        <p className="text-black" style={{ fontWeight: "700" }}>
                            $1029.10
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const TabsOut = () => {
    return (
        <>
            <div className="flex flex-row mr-10 sm:text-sm md:text-lg my-2 float-right bg-gray-100">
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

export default function Content() {
    return (
        // <>
        //     <div
        //         className=" lg:float-right lg:block sm:flex sm:justify-center sm:items-center w-max mr-4"
        //         style={{ width: "78%", fontSize: "16px" }}
        //     >
        //         <div className=" flex  flex-row  justify-between  mt-6 mr-2 ">
        //             <div className="text-gray-800  font-bold">
        //                 <p>Vendor Invoice</p>
        //             </div>
        //             <div className="mr-4 grid grid-cols-2 gap-2 w-auto text-gray-600 ">
        //                 <DownloadOutlined className="bg-white col-span-1" />
        //                 <PaperClipIcon className="bg-white col-span-1" />
        //             </div>
        //         </div>
        //         <div
        //             className="  mt-4 mx-4 bg-white rounded h-max"
        //             style={{ width: "99%" }}
        //         >
        //             <US />

        //             <div>
        //                 <hr
        //                     className="bg-gray-300 mx-5 "
        //                     style={{ width: "88%", height: "2px" }}
        //                 ></hr>
        //             </div>
        //             <Table />
        //             <div>
        //                 <hr
        //                     className="bg-gray-300 mx-5 mt-2 "
        //                     style={{ width: "88%", height: "2px" }}
        //                 ></hr>
        //             </div>
        //             <Tabs />
        //         </div>
        //         <div>
        //             <TabsOut />
        //         </div>
        //     </div>
        // </>
        <>
            <div className="bg-gray-">
                <div
                    className="flex  flex-row justify-between float-right  mt-6 ml-0 pl-0"
                    style={{ width: "80.1%" }}
                >
                    <div className="text-gray-800  font-bold">
                        <p>Vendor Invoice</p>
                    </div>
                    <div className="mr-4 grid grid-cols-2 gap-2 w-auto text-gray-600 ">
                        <DownloadOutlined className="bg-white col-span-1" />
                        <PaperClipIcon className="bg-white col-span-1" />
                    </div>
                </div>
                <div
                    className="justify-center items-center lg:float-right mt-4 mr-4 bg-white rounded h-max"
                    style={{ width: "78.4%" }}
                >
                    <US />

                    <div>
                        <hr
                            className="bg-gray-300 mx-5 "
                            style={{ width: "95%", height: "2px" }}
                        ></hr>
                    </div>
                    <Table />
                    <div>
                        <hr
                            className="bg-gray-300 mx-5 mt-2"
                            style={{ width: "95%", height: "2px" }}
                        ></hr>
                    </div>
                    <Tabs />
                </div>
                <div>
                    <TabsOut />
                </div>
            </div>
        </>
    );
}
