import SearchInputField from "./SearchInputField";
import SelectedNewThreadTag from "./SelectedNewThreadTag";

function SelectedTags({ selectedTags, state, dispatch, }) {
    return (
        <div className="flex w-fit flex-wrap gap-2 py-1">
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
