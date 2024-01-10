import Button from "../../../components/Button";

import deleteCross from "../../../assets/svg/deleteCross.svg";

function DateRangeInputField({ value, onClick, onChange, ref, date, setDate }) {
    return (
        <div className="flex w-[180px] items-center justify-between rounded-lg bg-gray-charcoal px-2 py-1.5">
            <input
                placeholder="Select date"
                className="z-10 mx-2 w-full border-0 bg-gray-charcoal font-roboto outline-none"
                value={value}
                onClick={onClick}
                onChange={onChange}
                ref={ref}
            />
            {date && (
                <Button action={() => setDate(null)}>
                    <img src={deleteCross} className="h-6 w-6" />
                </Button>
            )}
        </div>
    );
}

export default DateRangeInputField;
