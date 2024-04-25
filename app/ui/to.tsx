// "use client";
// import { useState } from "react";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import {
//     AccountCircleOutlined,
//     NotificationsOutlined,
//     SearchOutlined,
// } from "@mui/icons-material";

// const Top: React.FC = () => {
//     const [isUserDropped, setIsUserDropped] = useState<boolean>(false);

//     const UserDropDown = () => {
//         setIsUserDropped(!isUserDropped);
//     };

//     return (
//         <div
//             className=" float-right w-auto"
//             style={{
//                 width: "81.68%",
//                 height: "64px",
//                 backgroundImage:
//                     "linear-gradient(to right, #2D8B57 93%, #32774D 7%)",
//             }}
//         >
//             <div className="flex flex-row justify-between ">
//                 <div className="flex flex-row pt-4  justify-center items-center text-gray-200  ">
//                     <p className="ml-6 mr-2 ">
//                         <SearchOutlined />
//                     </p>
//                     <p>Search</p>
//                 </div>
//                 <div className="flex flex-row mr-14 pt-2 items-center justify-center text-gray-200">
//                     <div className="inline">
//                         <NotificationsOutlined className="mr-3" />
//                     </div>
//                     <div className=" flex flex-row mr-4 items-center justify-center">
//                         <div className="mx-2">
//                             <AccountCircleOutlined className="w-10 h-10" />
//                         </div>
//                         <div>
//                             <p>Ebenezer Acquah</p>
//                         </div>
//                         <div onClick={UserDropDown}>
//                             {isUserDropped ? (
//                                 <KeyboardArrowUpIcon className="h-6 w-6 text-gray-200 mr-5" />
//                             ) : (
//                                 <KeyboardArrowDownIcon className="h-6 w-6 text-gray-200 mr-5" />
//                             )}
//                         </div>
//                     </div>
//                     {isUserDropped}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Top;

"use client";
import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    AccountCircleOutlined,
    NotificationsOutlined,
    SearchOutlined,
} from "@mui/icons-material";

const Top: React.FC = () => {
    const [isUserDropped, setIsUserDropped] = useState<boolean>(false);

    const UserDropDown = () => {
        setIsUserDropped(!isUserDropped);
    };

    return (
        <div
            className=" float-right "
            style={{
                width: "81.68%",
                height: "64px",
                backgroundImage:
                    "linear-gradient(to right, #2D8B57 93%, #32774D 7%)",
            }}
        >
            <div className="flex flex-row justify-between ">
                <div className="flex flex-row pt-4  justify-center items-center text-gray-200  ">
                    <p className="ml-6 mr-2 ">
                        <SearchOutlined />
                    </p>
                    <p>Search</p>
                </div>
                <div className="flex flex-row mr-14 pt-2 items-center justify-center text-gray-200">
                    <div className="inline">
                        <NotificationsOutlined className="mr-3" />
                    </div>
                    <div className=" flex flex-row mr-4 items-center justify-center">
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
    );
};

export default Top;
