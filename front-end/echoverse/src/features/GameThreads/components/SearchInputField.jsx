import { useState } from "react";
import { usePopper } from "react-popper";
import { Transition } from "@headlessui/react";

import InputField from "../../../components/InputField";

import SearchNewThreadTag from "./SearchNewThreadTag";

function SearchInputField({ placement = "bottom", state, dispatch }) {
    const { searchTagQuery, searchTags } = state;
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: placement,
    });

    function handleSetTagQuery(value) {
        dispatch({ type: "setSearchQuery", searchTagQuery: value });
    }

    function handleAddSearchTag(tag) {
        dispatch({ type: "addTag", tag });
    }

    function handleAddTag(e) {
        if (e.key === "Enter" && searchTagQuery.length >= 3) {
            dispatch({ type: "addTag", tag: searchTagQuery, clear: true });
        }
    }

    return (
        <div className="z-40 w-full min-w-[272px] max-w-[320px]">
            <div ref={setReferenceElement}>
                <InputField
                    size="w-auto"
                    placeholder="Tag..."
                    bgColor="bg-gray-dark"
                    defaultValue={searchTagQuery}
                    onChange={(e) => handleSetTagQuery(e.target.value)}
                    onKeyDown={(e) => handleAddTag(e)}
                />
            </div>
            <Transition
                show={searchTagQuery !== ""}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
            >
                <div
                    className={`mt-1 flex w-full max-w-[320px] flex-wrap gap-3.5 rounded-lg bg-gray-dark px-3 py-2.5 shadow-xl outline outline-1 outline-gray-charcoal`}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {searchTags.map((searchTag) => (
                        <SearchNewThreadTag
                            tag={searchTag}
                            onClick={() => handleAddSearchTag(searchTag)}
                            key={searchTag}
                        />
                    ))}
                </div>
            </Transition>
        </div>
    );
}

export default SearchInputField;
