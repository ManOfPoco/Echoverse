import SearchInputField from "./SearchInputField";
import SelectedNewThreadTag from "./SelectedNewThreadTag";

function SelectedTags({ selectedTags, state, dispatch, }) {
    return (
        <div className="flex flex-wrap items-center gap-2 rounded-lg px-1 py-1 outline outline-1 outline-black-night">
            {selectedTags.map((selectedTag) => (
                <SelectedNewThreadTag
                    tag={selectedTag}
                    dispatch={dispatch}
                    key={selectedTag}
                />
            ))}
            <SearchInputField state={state} dispatch={dispatch} />
        </div>
    );
}

export default SelectedTags;
