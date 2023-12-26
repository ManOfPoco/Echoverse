import { Transition } from "@headlessui/react";
import Button from "../../../components/Button";

import CalendarItem from "./CalendarItem";

import deleteSVG from "../../../assets/svg/deleteSVG.svg";
import editSVG from "../../../assets/svg/editSVG.svg";
import openSVG from "../../../assets/svg/openSVG.svg";
import hideSVG from "../../../assets/svg/hideSVG.svg";

function GamingCalendar({ isCurrentUser, isCalendarOpen, setIsCalendarOpen }) {
    return (
        <div className="w-[300px] divide-y divide-black-dark sm:w-[328px] lg:h-[293px]">
            <div
                className={`flex w-full justify-center bg-blue-prussian py-2 ${
                    isCalendarOpen ? "rounded-t-xl" : "rounded-xl"
                }`}
            >
                <h3 className="pe-5 sm:pe-0">Gaming Calendar</h3>
                <div className="absolute flex w-[300px] justify-end gap-3 pe-2 sm:w-[328px]">
                    {isCurrentUser && (
                        <>
                            <Button>
                                <img
                                    draggable={false}
                                    src={editSVG}
                                    className="h-5 w-5"
                                    alt="edit"
                                />
                            </Button>
                            <Button>
                                <img
                                    draggable={false}
                                    src={deleteSVG}
                                    className="h-5 w-5"
                                    alt="delete"
                                />
                            </Button>
                        </>
                    )}
                    {isCalendarOpen ? (
                        <Button action={() => setIsCalendarOpen(false)}>
                            <img
                                draggable={false}
                                src={hideSVG}
                                className="h-5 w-5"
                                alt="hide"
                            />
                        </Button>
                    ) : (
                        <Button action={() => setIsCalendarOpen(true)}>
                            <img
                                draggable={false}
                                src={openSVG}
                                className="h-5 w-5"
                                alt="open"
                            />
                        </Button>
                    )}
                </div>
            </div>
            <Transition
                show={isCalendarOpen}
                // enter="transform transition ease-in-out duration-500"
                // enterFrom="-translate-y-1/3"
                // enterTo="translate-x-0"
                // leave="transform transition ease-in-out duration-500"
                // leaveFrom="translate-x-0"
                // leaveTo="-translate-y-full"

                enter="transition ease-in-out duration-500"
                enterFrom="opacity-0 scale-0 rotate-0"
                enterTo="opacity-100 rotate-5"
                leave="transition ease-in duration-400"
                leaveFrom="opacity-100 rotate-5"
                leaveTo="opacity-0 scale-0 rotate-0"

                // enter="transform transition ease-in-out duration-500 sm:duration-700"
                // enterFrom="translate-x-full"
                // enterTo="translate-x-0"
                // leave="transform transition ease-in-out duration-500 sm:duration-700"
                // leaveFrom="translate-x-0"
                // leaveTo="translate-x-full"
            >
                <div className="grid-rows-8 grid gap-1 rounded-b-xl bg-blue-prussian px-1 pb-6 pt-2 sm:gap-2 sm:px-5">
                    <div className="grid grid-cols-4 justify-items-center">
                        <div className="grid"></div>
                        <div className="grid">Morning</div>
                        <div className="grid">Afternoon</div>
                        <div className="grid">Evening</div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Monday</div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Tuesday</div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Wednesday</div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Thursday</div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Friday</div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Saturday</div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center justify-items-center">
                        <div className="grid justify-self-start">Sunday</div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="active" />
                        </div>
                        <div className="grid">
                            <CalendarItem status="busy" />
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default GamingCalendar;
