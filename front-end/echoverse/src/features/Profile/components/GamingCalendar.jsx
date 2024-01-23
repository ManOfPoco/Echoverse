import { useReducer } from "react";
import { Transition } from "@headlessui/react";

import Button from "../../../components/Button";

import SetGamingNotesModal from "./SetGamingNotesModal";
import CalendarRow from "./CalendarRow";

import trashCan from "../../../assets/svg/trashCan.svg";
import deleteActive from "../../../assets/svg/deleteActive.svg";
import editSVG from "../../../assets/svg/editSVG.svg";
import editActive from "../../../assets/svg/editActive.svg";
import openSVG from "../../../assets/svg/openSVG.svg";
import hideSVG from "../../../assets/svg/hideSVG.svg";

/* 
add: allows adding gaming days
edit: allows adding gaming notes to gaming days
delete: allows deleting gaming days with notes
*/
const initialState = {
    isCalendarOpen: true,
    activeMode: "add",
    selectedDay: null,
    selectedTime: null,
    isGamingNotesModalOpen: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "setCalendarOpen":
            return {
                ...state,
                isCalendarOpen: !state.isCalendarOpen,
                activeMode: "add",
            };

        case "selectDate":
            if (state.activeMode === "add") {
                return {
                    ...state,
                    selectedDay: action.day,
                    selectedTime: action.time,
                };
            }
            return { ...state };

        case "setActiveMode":
            if (state.activeMode === action.newMode) {
                return {
                    ...state,
                    activeMode: "add",
                };
            }
            return {
                ...state,
                isCalendarOpen: true,
                activeMode: action.newMode,
            };

        case "openSetGamingNotesModal":
            if (state.activeMode === "edit") {
                return {
                    ...state,
                    selectedDay: action.day,
                    selectedTime: action.time,
                    isGamingNotesModalOpen: true,
                };
            }
            return { ...state };

        case "closeSetGamingNotesModal":
            if (state.activeMode === "edit") {
                return {
                    ...state,
                    isGamingNotesModalOpen: false,
                };
            }
            return { ...state };

        case "setGamingNotes":
            if (state.activeMode === "edit") {
                return {
                    ...state,
                    selectedDay: null,
                    selectedTime: null,
                    activeMode: "add",
                    isGamingNotesModalOpen: false,
                };
            }
            return { ...state };

        default:
            break;
    }
}

function GamingCalendar({ isCurrentUser, data }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        isCalendarOpen,
        activeMode,
        selectedDay,
        selectedTime,
        isGamingNotesModalOpen,
    } = state;

    function handleChangeMode(mode) {
        dispatch({
            type: "setActiveMode",
            newMode: mode,
        });
    }

    function handleToggleCalendar() {
        dispatch({ type: "setCalendarOpen" });
    }

    return (
        <>
            <SetGamingNotesModal
                isGamingNotesModalOpen={isGamingNotesModalOpen}
                dispatch={dispatch}
                day={selectedDay}
                time={selectedTime}
                selectedTime={selectedTime}
            />
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
                                <Button action={() => handleChangeMode("edit")}>
                                    {activeMode === "edit" ? (
                                        <img
                                            title="edit"
                                            draggable={false}
                                            src={editActive}
                                            className="h-5 w-5"
                                            alt="editActive"
                                        />
                                    ) : (
                                        <img
                                            title="edit"
                                            draggable={false}
                                            src={editSVG}
                                            className="h-5 w-5"
                                            alt="edit"
                                        />
                                    )}
                                </Button>
                                <Button
                                    action={() => handleChangeMode("delete")}
                                >
                                    {activeMode === "delete" ? (
                                        <img
                                            title="edit"
                                            draggable={false}
                                            src={deleteActive}
                                            className="h-5 w-5"
                                            alt="deleteActive"
                                        />
                                    ) : (
                                        <img
                                            title="delete"
                                            draggable={false}
                                            src={trashCan}
                                            className="h-5 w-5"
                                            alt="delete"
                                        />
                                    )}
                                </Button>
                            </>
                        )}
                        {isCalendarOpen ? (
                            <Button action={handleToggleCalendar}>
                                <img
                                    title="hide"
                                    draggable={false}
                                    src={hideSVG}
                                    className="h-5 w-5"
                                    alt="hide"
                                />
                            </Button>
                        ) : (
                            <Button action={handleToggleCalendar}>
                                <img
                                    title="open"
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
                    enter="transition ease-in-out duration-500"
                    enterFrom="opacity-0 scale-0 rotate-0"
                    enterTo="opacity-100 rotate-5"
                    leave="transition ease-in duration-400"
                    leaveFrom="opacity-100 rotate-5"
                    leaveTo="opacity-0 scale-0 rotate-0"
                >
                    <div className="grid-rows-8 grid gap-1 rounded-b-xl bg-blue-prussian px-1 pb-6 pt-2 sm:gap-2 sm:px-5">
                        <div className="grid grid-cols-4 justify-items-center">
                            <div className="grid"></div>
                            <div className="grid">Morning</div>
                            <div className="grid">Afternoon</div>
                            <div className="grid">Evening</div>
                        </div>
                        {Object.entries(data).map(([day, periods]) => (
                            <CalendarRow
                                day={day}
                                periods={periods}
                                activeMode={activeMode}
                                dispatch={dispatch}
                                key={day}
                            />
                        ))}
                    </div>
                </Transition>
            </div>
        </>
    );
}

export default GamingCalendar;
