import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

function ConfirmationModal({
    isOpen,
    onClose,
    bgColor = "bg-gray-dark",
    handleDelete,
    children,
}) {
    return (
        <Transition show={isOpen}>
            <Dialog
                onClose={onClose}
                className="relative z-50"
                initialFocus={null}
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
                        <Dialog.Panel
                            className={`mx-auto rounded-xl ${bgColor}`}
                        >
                            <div className="flex flex-col px-4 py-3">
                                {children}
                                <div className="mt-2 flex justify-end gap-1 py-1">
                                    <Button
                                        btnClass="secondary"
                                        size="h-9 w-28"
                                        roundness="rounded-lg"
                                        action={onClose}
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        btnClass="danger"
                                        size="h-9 w-28"
                                        roundness="rounded-lg"
                                        action={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default ConfirmationModal;
