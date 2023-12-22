import { Dialog, Transition } from "@headlessui/react";
import FormImage from "./ModalImage";
import Button from "./Button";
import { Fragment } from "react";

function Modal({
    isOpen,
    setIsOpen,
    img,
    alt,
    title,
    description,
    children,
    btnText,
    btnAction,
}) {
    return (
        <Transition
            // as={Fragment}
            show={isOpen}
        >
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
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
                        className="fixed inset-0 bg-black-dark/30"
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
                        <Dialog.Panel className="mx-auto max-w-lg rounded-xl bg-indigo-950">
                            <div className="flex flex-col items-center px-20 py-14 text-center">
                                <FormImage img={img} alt={alt} />
                                <div className="py-8 font-archivo-black">
                                    <Dialog.Title className="pb-4 text-3xl">
                                        {title}
                                    </Dialog.Title>
                                    <Dialog.Description className="text-base text-gray-light">
                                        {description}
                                    </Dialog.Description>
                                </div>

                                {children}

                                <Button
                                    type="submit"
                                    btnClass="primary"
                                    action={btnAction}
                                >
                                    {btnText}
                                </Button>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default Modal;
