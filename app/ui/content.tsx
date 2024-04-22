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
            <div className="float-left ml-4 mt-3" style={{ width: "88%" }}>
                <div className="font-bold my-2">
                    <p>US Foods</p>
                </div>

                <div className="flex flex-row">
                    <div style={{ width: "29%" }}>
                        <div className="flex flex-row">
                            <p className=" text-gray-400 ">Receive Date:</p>
                            <p className="font-bold ml-5">03/23.2018</p>
                        </div>
                        <div className="flex flex-row">
                            <p className=" text-gray-400">Invoice Date:</p>
                            <p className="font-bold ml-6">$575.00</p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-300 mb-5 "
                        style={{ width: "2px", height: "50px" }}
                    ></div>
                    <div style={{ width: "35%" }}>
                        <div className="flex flex-row ml-14 mr-7 ">
                            <p className=" text-gray-400 ">Invoice No.:</p>
                            <p className="font-bold ml-5">185432asd</p>
                        </div>
                        <div className="flex flex-row ml-14 mr-5">
                            <p className=" text-gray-400 ">Order No.:</p>
                            <p className="font-bold ml-8">354</p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-300 mb-5 "
                        style={{ width: "2px", height: "50px" }}
                    ></div>
                    <div style={{ width: "29%" }}>
                        <div className="flex flex-row ml-12">
                            <p className=" text-gray-400 ">Due Date:</p>
                            <p className="font-bold ml-5">03/23/2018</p>
                        </div>
                        <div className="flex flex-row ml-12">
                            <p className=" text-gray-400 ">Amount:</p>
                            <p className="font-bold ml-8">$575.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row float-right bg-green-100 h-auto w-auto pl-1 pr-2 pb-1 pt-1 mr-7 mt-4 rounded-md ">
                <p>
                    <EditOutlined className="h-5 text-green-600" />
                </p>
                <p className="h-auto  text-green-600">Edit</p>
            </div>
        </>
    );
};

const Table = () => {
    return (
        <>
            <table
                className="mt-6 ml-5   border-collapse table-auto"
                style={{ width: "95%", fontSize: "14" }}
            >
                <tbody className="text-gray-600">
                    <tr
                        className=" w-auto "
                        style={{ backgroundColor: "rgb(241, 241, 241" }}
                    >
                        <th className="text-gray-800 w-auto py-3 pl-2  flex flex-row mb-3">
                            <p>#</p>
                            <ArrowsUpDownIcon
                                className="w-4 h-5"
                                style={{ fontWeight: 900 }}
                            />
                        </th>
                        <th className="text-gray-800 w-auto py-3">SKU</th>
                        <th className="text-gray-800 w-auto py-3">ITEMS</th>
                        <th className="text-gray-800 w-auto py-3">QUANTITY</th>
                        <th className="text-gray-800 w-auto py-3">PRICE</th>
                        <th className="text-gray-800 w-auto py-3 float-left">
                            AMOUNT
                        </th>
                    </tr>
                    <tr className="w-auto ">
                        <td className="w-auto py-3 pl-2">01</td>
                        <td className=" py-3">-</td>
                        <td className="flex flex-row py-3">
                            <p className="text-green-400 w-auto">
                                Arthoke Hearted 6x55oz
                            </p>

                            <p className="">(Dry/Canned, 900-Dry)</p>
                        </td>
                        <td className="py-3">3xcase</td>
                        <td className="py-3">50.00</td>
                        <td className="py-3 flex flex-row">
                            <div className="">
                                <p>250.00</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-11 pl-11">
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
                        <td className="w-auto py-3 pl-2">02</td>
                        <td className="py-3">-</td>
                        <td className="flex flex-row w-auto py-3">
                            <p className="text-green-400 ">
                                Bacon, Sliced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3">2xcase</td>
                        <td className="py-3">52.00</td>
                        <td className="py-3 flex flex-row">
                            <div>
                                <p>150.0</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-12 pl-12">
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
                        <td className="w-auto py-3 pl-2">04</td>
                        <td className="py-3">-</td>
                        <td className="flex flex-row w-auto py-3">
                            <p className="text-green-400">
                                Bison, Graound 1x1lb
                            </p>
                            <p className="">(Meat, 1000-Meat)</p>
                        </td>
                        <td className="py-3">2xlb</td>
                        <td className="py-3">54.04</td>
                        <td className="py-3 flex flex-row">
                            <div>
                                <p>108.08</p>
                            </div>
                            <div className="flex flex-row gap-2 ml-11 pl-11">
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
                        <td className="w-auto py-3 pl-2">05</td>
                        <td className="py-3">-</td>
                        <td className="flex flex-row w-auto py-3">
                            <p className="text-green-400">
                                Bacon, SLiced 15x1lb
                            </p>
                            <p className="">(Meat, 100-Meat)</p>
                        </td>
                        <td className="py-3">2xcase</td>
                        <td className="py-3">52.00</td>
                        <td className="py-3 flex flex-row">
                            150.0
                            <div className="flex flex-row gap-2 ml-12 pl-12">
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
                        <td className="w-auto py-3 pl-2">06</td>
                        <td className="py-3">-</td>
                        <td className="flex flex-row w-auto py-3">
                            <p className="text-green-400">
                                Bison, Graound 1x1lb
                            </p>
                            <p className="">(Meat, 1000-Meat)</p>
                        </td>
                        <td className="py-3">2xlb</td>
                        <td className="py-3">54.04</td>
                        <td className="py-3 flex flex-row">
                            108.08
                            <div className="flex flex-row gap-2 ml-11 pl-11">
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
            <div className="mx-5 flex flex-row float-left text-gray-300">
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

export default function Content() {
    return (
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
                    className=" float-right mt-4 mr-4 bg-white rounded h-max"
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
