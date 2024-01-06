import Switch from "./Switch";

function FilterSwitchOption({ option, state, onChange }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <span>{option}</span>
                <Switch state={state} onChange={onChange} />
            </div>
        </>
    );
}

export default FilterSwitchOption;
