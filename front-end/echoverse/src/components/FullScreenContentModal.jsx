import { Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

function FullScreenContentModal({
    isOpen,
    handleModalClose,
    swapDomeElementsWithDomElementsFromStash,
}) {
    const fileRef = useRef(null);

    useEffect(() => {
        console.log(fileRef.current);
        if (fileRef.current) {
            fileRef.current = swapDomeElementsWithDomElementsFromStash(
                fileRef.current
            );
        }
    }, [swapDomeElementsWithDomElementsFromStash]);

    return (
        <Transition show={isOpen}>
            <Dialog
                onClick={() => handleModalClose(fileRef.current)}
                onClose={() => {}}
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
                        className="fixed inset-0 bg-black-dark"
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
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        <Dialog.Panel>
                            <div
                                className="relative mx-auto"
                                onClick={() => console.log(1)}
                            >
                                <div ref={fileRef}></div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default FullScreenContentModal;
