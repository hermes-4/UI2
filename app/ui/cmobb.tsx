const Table = () => {
    return (
        <>
             <table
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
                </tbody> 
