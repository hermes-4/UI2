import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Top() {
    return (
        <div className="float-right w-11/12 h-16 border-b border-gray-400  bg-white">
            <div className="flex float-right items-center rounded h-14 my-1 mx-3 bg-gray-300 w-52">
                <div className="">
                    <UserCircleIcon className="h-8 w-8 text-gray-900" />
                </div>
                <div>
                    <p>Ebenezer Acquah</p>
                </div>
                <div>
                    <ChevronDownIcon className="h-6 w-6 text-gray-900" />
                </div>
            </div>
        </div>
    );
}
