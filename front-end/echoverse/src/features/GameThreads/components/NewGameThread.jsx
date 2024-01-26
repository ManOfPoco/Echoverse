import { useReducer } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import TextareaInput from "../../../components/TextareaInput";

import SelectedNewThreadTags from "./SelectedNewThreadTags";

import messageFilled from "../../../assets/svg/messageFilled.svg";
import unavailable from "../../../assets/svg/unavailable.svg";

const selectedTags = [
    "Valheim",
    "Roblox",
    "Satisfactory",
    "Counter Strike 2",
    "No way home",
    "Dead Island 2",
    "Far Cry 5",
];

const initialState = {
    selectedTags: [],
    searchTagQuery: "",
    searchTags: selectedTags,
};

function reducer(state, action) {
    switch (action.type) {
        case "setSearchQuery":
            return { ...state, searchTagQuery: action.searchTagQuery };

        case "addTag":
            if (!state.selectedTags.includes(action.tag)) {
                console.log("asd");
                if (action.clear)
                    return {
                        ...state,
                        searchTagQuery: "",
                        selectedTags: [...state.selectedTags, action.tag],
                    };
                return {
                    ...state,
                    selectedTags: [...state.selectedTags, action.tag],
                };
            }
            return { ...state };

        case "removeTag":
            if (state.selectedTags.includes(action.tag)) {
                return {
                    ...state,
                    selectedTags: [
                        ...state.selectedTags.filter(
                            (tag) => tag !== action.tag
                        ),
                    ],
                };
            }
            return { ...state };

        default:
            break;
    }
}

function NewGameThread({ setIsNewPost }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { selectedTags } = state;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="flex flex-col gap-2 rounded-lg bg-gray-dark px-2 py-2">
            <InputField
                size="w-full"
                roundness="rounded-md"
                classes="text-lg font-semibold"
                placeholder="Title"
                register={register("Title", {
                    required: true,
                })}
            />
            <TextareaInput
                placeholder="Enter a message..."
                roundness="rounded-md"
                register={register("Message", {
                    required: true,
                })}
            />
            <SelectedNewThreadTags
                selectedTags={selectedTags}
                state={state}
                dispatch={dispatch}
            />
            <div className="flex justify-end gap-4">
                <Button
                    btnClass="danger"
                    roundness="rounded-xls"
                    size="min-w-fit px-3 sm:px-4 py-2 lg:py-2.5"
                    customClasses="sm:my-0.5"
                >
                    <div
                        className="flex items-center justify-center gap-1.5"
                        onClick={() => setIsNewPost(false)}
                    >
                        <img
                            draggable={false}
                            src={unavailable}
                            className="h-4 w-4"
                        />
                        <span>Cancel</span>
                    </div>
                </Button>
                <Button
                    btnClass="blue"
                    roundness="rounded-xls"
                    size="min-w-fit px-3 sm:px-4 py-2 lg:py-2.5"
                    customClasses="sm:my-0.5"
                >
                    <div className="flex items-center justify-center gap-1.5">
                        <img
                            draggable={false}
                            src={messageFilled}
                            className="h-4 w-4"
                        />
                        <span>Post</span>
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default NewGameThread;
