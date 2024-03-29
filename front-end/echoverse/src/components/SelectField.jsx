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
    roundness = "rounded-md",
    activeColor = "bg-gray-dark",
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
                    className={`relative h-10 w-full cursor-default bg-gray-charcoal pl-3 pr-10 text-left sm:text-sm ${roundness} ${shadow}`}
                >
                    <div className="flex items-center gap-2">
                        {selectedField?.image && (
                            <img
                                src={selectedField.image}
                                className="h-3.5 w-3.5"
                            />
                        )}
                        <span className="block truncate text-start">
                            {isMultiple ? defaultValue : selectedField.name}
                        </span>
                    </div>

                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <img
                            draggable={false}
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
                                            ? `${activeColor} text-blue-light`
                                            : "text-white"
                                    }`
                                }
                                value={choice}
                                key={choice.id}
                            >
                                <>
                                    <div className="flex items-center gap-2">
                                        {choice?.image && (
                                            <img
                                                src={choice.image}
                                                className="h-3.5 w-3.5"
                                            />
                                        )}
                                        <span
                                            className={`block truncate text-start ${
                                                selectedField
                                                    ? "font-medium"
                                                    : "font-normal"
                                            }`}
                                        >
                                            {choice.name}
                                        </span>
                                    </div>
                                    {isMultiple ? (
                                        selectedField.some(
                                            (e) => e.name === choice.name
                                        ) ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <img
                                                    draggable={false}
                                                    src={checkDone}
                                                    className="h-4 w-4"
                                                    alt="chevronDown"
                                                />
                                            </span>
                                        ) : null
                                    ) : selectedField.name === choice.name ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <img
                                                draggable={false}
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
