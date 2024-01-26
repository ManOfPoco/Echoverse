import openSVG from "../../../assets/svg/openSVG.svg";
import hideSVG from "../../../assets/svg/hideSVG.svg";

import { usePopper } from "react-popper";
import { useState } from "react";

function CalendarItem({ period, mode, dispatch }) {
    const { status, dayOfTheWeek: day, time, notes } = period;

    const [isHovered, setIsHovered] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
        modifiers: [
            {
                name: "flip",
                enabled: false,
            },
        ],
    });

    function handleClick() {
        if (mode === "add") handleChangeDateStatus();
        else if (mode === "edit") handleSetCalendarNote();
        else if (mode === "delete") handleDeleteCalendarStatus();
    }

    function handleChangeDateStatus() {
        // request
    }

    function handleSetCalendarNote() {
        dispatch({ type: "openSetGamingNotesModal", day, time, notes });
    }

    function handleDeleteCalendarStatus() {
        // request
    }

    return (
        <>
            <div
                className="group grid cursor-pointer"
                onClick={handleClick}
                ref={setReferenceElement}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`h-3 w-[52px] rounded-lg ${
                        status === true
                            ? "bg-majorelle-blue"
                            : "bg-gray-charcoal"
                    }`}
                >
                    <div
                        className={`${
                            mode === "add"
                                ? "hidden justify-center group-hover:flex"
                                : "hidden"
                        }`}
                    >
                        <img
                            draggable={false}
                            src={status === true ? hideSVG : openSVG}
                            alt={status === true ? "remove" : "add"}
                            className="h-3 w-3"
                        />
                    </div>
                    <div
                        className={`${
                            mode === "edit"
                                ? "hidden justify-center group-hover:flex"
                                : "hidden"
                        }`}
                    >
                        <img
                            draggable={false}
                            src={openSVG}
                            alt={"edit"}
                            className="h-3 w-3"
                        />
                    </div>
                    <div
                        className={`${
                            mode === "delete" && status === true
                                ? "hidden justify-center group-hover:flex"
                                : "hidden"
                        }`}
                    >
                        <img
                            draggable={false}
                            src={hideSVG}
                            alt={"remove"}
                            className="h-3 w-3"
                        />
                    </div>
                </div>
            </div>
            {isHovered && notes && (
                <div
                    className="mb-1 rounded-lg bg-black-dark px-2 py-2 after:absolute after:left-[calc(50%-6px)] after:top-full
                    after:border-l-6 after:border-r-6 after:border-t-6 after:border-l-transparent after:border-r-transparent after:border-t-black-dark after:content-['']"
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {notes}
                </div>
            )}
        </>
    );
}

export default CalendarItem;
