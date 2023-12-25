function CalendarItem({ status }) {
    return (
        <div
            className={`h-3 w-[52px] rounded-lg ${
                status === "active" ? "bg-turquoise" : "bg-gray-charcoal"
            }`}
        ></div>
    );
}

export default CalendarItem;
