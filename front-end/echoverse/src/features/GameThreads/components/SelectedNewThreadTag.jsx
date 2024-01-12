import deleteCross from "../../../assets/svg/deleteCross.svg";

function SelectedNewThreadTag({ tag, dispatch }) {
    function handleRemoveTag() {
        dispatch({ type: "removeTag", tag });
    }

    return (
        <div className="z-40 flex cursor-pointer items-center gap-1.5 rounded-xls bg-gray-charcoal px-2.5 py-1">
            <span>{tag}</span>
            <img
                src={deleteCross}
                className="h-4 w-4"
                onClick={handleRemoveTag}
            />
        </div>
    );
}

export default SelectedNewThreadTag;
