import { forwardRef } from "react";
import Button from "../../../components/Button";

import deleteCross from "../../../assets/svg/deleteCross.svg";

export const FilterStartInput = forwardRef(
    ({ value, onClick, onChange, startDate, setStartDate }, ref) => (
        <div
            className={`flex w-[180px] items-center rounded-lg bg-gray-charcoal px-2 py-1.5`}
        >
            <input
                placeholder="Select date"
                className={`z-10 mx-2 w-full border-0 bg-gray-charcoal font-roboto outline-none`}
                value={value}
                onClick={onClick}
                onChange={onChange}
                ref={ref}
            />
            {startDate && (
                <Button action={() => setStartDate(null)}>
                    <img
                        draggable={false}
                        src={deleteCross}
                        className="h-6 w-6"
                    />
                </Button>
            )}
        </div>
    )
);
FilterStartInput.displayName = "FilterStartInput";

export const FilterEndInput = forwardRef(
    ({ value, onClick, onChange, endDate, setEndDate }, ref) => (
        <div
            className={`flex w-[180px] items-center rounded-lg bg-gray-charcoal px-2 py-1.5`}
        >
            <input
                placeholder="Select date"
                className={`z-10 mx-2 w-full border-0 bg-gray-charcoal font-roboto outline-none`}
                value={value}
                onClick={onClick}
                onChange={onChange}
                ref={ref}
            />
            {endDate && (
                <Button action={() => setEndDate(null)}>
                    <img
                        draggable={false}
                        src={deleteCross}
                        className="h-6 w-6"
                    />
                </Button>
            )}
        </div>
    )
);
FilterEndInput.displayName = "FilterEndInput";
