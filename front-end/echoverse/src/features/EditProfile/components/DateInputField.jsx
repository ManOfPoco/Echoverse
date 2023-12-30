import { useState } from "react";
import { forwardRef } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import calendar from "../../../assets/svg/calendar.svg";

function DateInputField({ onClick }) {
    const [startDate, setStartDate] = useState(new Date());
    const DateInput = forwardRef(({ value, onClick, onChange }, ref) => (
        <input
            placeholder="Select date"
            className={`z-10 w-full border-0 bg-gray-charcoal px-2 font-roboto outline-none`}
            value={value}
            onClick={onClick}
            onChange={onChange}
            ref={ref}
        />
    ));
    DateInput.displayName = "DateInput";

    return (
        <div
            className="flex w-[270px] items-center rounded-md bg-gray-charcoal px-2 py-2"
            onClick={onClick}
        >
            <img
                draggable="false"
                className="h-4 w-4"
                src={calendar}
                alt="search"
            />

            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<DateInput />}
                className="bg-gray-800"
            />
        </div>
    );
}

export default DateInputField;
