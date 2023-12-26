import CalendarItem from "./CalendarItem";

function CalendarRow({ day, periods, activeMode, dispatch }) {
    return (
        <div className="grid grid-cols-4 items-center justify-items-center">
            <div className="grid justify-self-start">{day}</div>
            {periods.map((period) => (
                <CalendarItem
                    period={period}
                    mode={activeMode}
                    dispatch={dispatch}
                    key={`${day}-${period.time}`}
                />
            ))}
        </div>
    );
}

export default CalendarRow;
