import Switch from "../../../../components/Switch";

function FilterOption({ option, state, onChange }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <span>{option}</span>
                <Switch state={state} onChange={onChange} />
            </div>
        </>
    );
}

export default FilterOption;
