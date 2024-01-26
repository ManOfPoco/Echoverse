import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

import checkDone from "../assets/svg/checkDone.svg";
import chevronDown from "../assets/svg/chevronDown.svg";

function SelectField({
    choices,
    selectedField,
    setSelectedField,
    size = "w-60",
    isMultiple = false,
    defaultValue = "Select",
    showDirection = "down",
    shadow = "shadow-md",
}) {
    return (
        <Listbox
            value={selectedField}
            defaultValue={defaultValue}
            onChange={setSelectedField}
            multiple={isMultiple}
            by="id"
        >
            <div className={`relative ${size}`}>
                <Listbox.Button
                    className={`relative h-10 w-full cursor-default rounded-lg bg-gray-charcoal pl-3 pr-10 text-left sm:text-sm ${shadow}`}
                >
                    <span className="block truncate">
                        {isMultiple ? defaultValue : selectedField.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <img
                            src={chevronDown}
                            className="h-4 w-4"
                            alt="chevronDown"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Listbox.Options
                        className={`absolute z-20 max-h-52 w-full overflow-auto rounded-md bg-gray-charcoal text-base shadow-lg sm:text-sm ${
                            showDirection === "down"
                                ? "top-full mt-1"
                                : showDirection === "up"
                                  ? "bottom-full mb-1"
                                  : ""
                        }`}
                    >
                        {choices.map((choice) => (
                            <Listbox.Option
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pr-4 ps-10 ${
                                        active
                                            ? "bg-gray-dark text-blue-light"
                                            : "text-white"
                                    }`
                                }
                                value={choice}
                                key={choice.id}
                            >
                                <>
                                    <span
                                        className={`block truncate text-start ${
                                            selectedField
                                                ? "font-medium"
                                                : "font-normal"
                                        }`}
                                    >
                                        {choice.name}
                                    </span>
                                    {isMultiple ? (
                                        selectedField.some(
                                            (e) => e.name === choice.name
                                        ) ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <img
                                                    src={checkDone}
                                                    className="h-4 w-4"
                                                    alt="chevronDown"
                                                />
                                            </span>
                                        ) : null
                                    ) : selectedField.name === choice.name ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <img
                                                src={checkDone}
                                                className="h-4 w-4"
                                                alt="chevronDown"
                                            />
                                        </span>
                                    ) : null}
                                </>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}

export default SelectField;
