import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import Button from "../../../components/Button";

import customStatusImg from "../../../assets/img/customStatus.png";
import onlineStatus from "../../../assets/svg/onlineStatus.svg";
import idleStatus from "../../../assets/svg/idleStatus.svg";
import doNotDisturbStatus from "../../../assets/svg/doNotDisturbStatus.svg";
import invisibleStatus from "../../../assets/svg/invisibleStatus.svg";

const clearOptions = [
    {
        id: 0,
        name: "Today",
    },
    {
        id: 1,
        name: "12 hours",
    },
    {
        id: 2,
        name: "8 hours",
    },
    {
        id: 3,
        name: "4 hours",
    },
    {
        id: 4,
        name: "2 hours",
    },
    {
        id: 5,
        name: "1 hour",
    },
    {
        id: 6,
        name: "30 minutes",
    },
    {
        id: 7,
        name: "Don't clear",
    },
];

const statusOptions = [
    {
        id: 0,
        name: "Online",
        image: onlineStatus,
    },
    {
        id: 1,
        name: "Idle",
        image: idleStatus,
    },
    {
        id: 2,
        name: "Do Not Disturb",
        image: doNotDisturbStatus,
    },
    {
        id: 3,
        name: "Invisible",
        image: invisibleStatus,
    },
];

function SetCustomStatusModal({
    isSetCustomStatusModalOpen,
    setIsSetCustomStatusModalOpen,
    customStatus,
}) {
    const [message, setMessage] = useState("");
    const [clearAfter, setClearAfter] = useState(clearOptions[0]);
    const [status, SetStatus] = useState(statusOptions[0]);

    function handleCloseModal() {
        setIsSetCustomStatusModalOpen(false);
    }

    function handleSaveCustomStatus() {
        handleCloseModal();
        toast.success(`Your custom status saved`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    useEffect(() => {
        if (isSetCustomStatusModalOpen) setMessage(customStatus);
    }, [isSetCustomStatusModalOpen, customStatus]);

    return (
        <Transition show={isSetCustomStatusModalOpen}>
            <Dialog
                onClose={() => setIsSetCustomStatusModalOpen(false)}
                className="relative z-50"
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-black-dark/60"
                        aria-hidden="true"
                    />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-500 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <div className="fixed inset-0 flex w-screen items-center justify-center sm:p-4">
                        <Dialog.Panel className="mx-auto w-full max-w-lg rounded-lg bg-gray-dark px-4 pt-2 sm:px-8">
                            <div className="flex w-full flex-col">
                                <img
                                    src={customStatusImg}
                                    className="h-36 w-fit self-center"
                                />
                                <h5 className="pb-5 pt-2 text-center text-xl font-medium">
                                    Set a custom status
                                </h5>
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h4 className="pb-1 text-xs font-semibold text-gray-light">
                                            What&apos;s going on?
                                        </h4>
                                        <InputField
                                            defaultValue={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            size="w-full"
                                            roundness="rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="pb-1 text-xs font-semibold text-gray-light">
                                            Clear after
                                        </h4>
                                        <SelectField
                                            choices={clearOptions}
                                            selectedField={clearAfter}
                                            defaultValue={clearAfter}
                                            setSelectedField={setClearAfter}
                                            size="w-full"
                                            roundness="rounded-md"
                                            activeColor="bg-gray-dark/50"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="pb-1 text-xs font-semibold text-gray-light">
                                            Status
                                        </h4>
                                        <SelectField
                                            choices={statusOptions}
                                            selectedField={status}
                                            defaultValue={status}
                                            setSelectedField={SetStatus}
                                            size="w-full"
                                            roundness="rounded-md"
                                            activeColor="bg-gray-dark/50"
                                        />
                                    </div>
                                    <div className="mt-2 flex justify-end gap-1 pb-5">
                                        <Button
                                            btnClass="secondary"
                                            size="h-9 w-28"
                                            roundness="rounded-lg"
                                            action={handleCloseModal}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            btnClass="blue"
                                            size="h-9 w-28"
                                            roundness="rounded-lg"
                                            action={handleSaveCustomStatus}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default SetCustomStatusModal;
