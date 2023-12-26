import openSVG from "../../../assets/svg/openSVG.svg";
import hideSVG from "../../../assets/svg/hideSVG.svg";

function CalendarItem({ period, mode, dispatch }) {
    const { status, dayOfTheWeek: day, time, notes } = period;

    function handleClick() {
        if (mode === "add") handleChangeDateStatus();
        else if (mode === "edit") handleSetCalendarNote();
        else if (mode === "delete") handleDeleteCalendarStatus();
    }

    function handleChangeDateStatus() {
        // request
    }

    function handleSetCalendarNote() {
        dispatch({ type: "openSetGamingNotesModal", day, time });
    }

    function handleDeleteCalendarStatus() {
        // request
    }

    return (
        <div
            title={notes}
            className="group grid cursor-pointer"
            onClick={handleClick}
        >
            <div
                className={`h-3 w-[52px] rounded-lg ${
                    status === true ? "bg-majorelle-blue" : "bg-gray-charcoal"
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
                    <img src={openSVG} alt={"edit"} className="h-3 w-3" />
                </div>
                <div
                    className={`${
                        mode === "delete" && status === true
                            ? "hidden justify-center group-hover:flex"
                            : "hidden"
                    }`}
                >
                    <img src={hideSVG} alt={"remove"} className="h-3 w-3" />
                </div>
            </div>
        </div>
    );
}

export default CalendarItem;
