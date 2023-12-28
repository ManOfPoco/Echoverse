import { Transition } from "@headlessui/react";

import dropdownArrowDown from "../../../assets/svg/dropdownArrowDown.svg";

function Filter({
    filterImg,
    title,
    isOpen,
    setIsOpen,
    filtersWidth,
    children,
}) {
    return (
        <div>
            <div
                className="mt-4 flex max-w-fit cursor-pointer items-center rounded-xls bg-gray-dark px-2.5 py-1.5 lg:mx-0"
                onClick={setIsOpen}
            >
                <img src={filterImg} alt="sortFilter" className="h-4 w-4" />
                <div className="flex ps-2.5">
                    <h5>{title}</h5>
                    <img src={dropdownArrowDown} alt="arrowDown" />
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className={`absolute right-auto top-full z-40 mt-1 flex flex-col gap-5 rounded-lg bg-gray-dark px-5 py-2.5 shadow-xl ${filtersWidth}`}
                >
                    {children}
                </div>
            </Transition>
        </div>
    );
}

export default Filter;
