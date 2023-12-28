import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import SearchForm from "../../../components/SearchForm";

import Followers from "./Followers";

function FollowModal({ isOpen, onClose, title, follows }) {
    return (
        <Transition show={isOpen}>
            <Dialog onClose={onClose} className="relative z-50">
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
                            <div className="flex h-[460px] min-w-[320px] flex-col items-center divide-y divide-black-dark text-base sm:w-[420px]">
                                <div className="flex w-full justify-center py-2 font-semibold">
                                    {title}
                                </div>
                                <div className="w-full px-3 pt-5 sm:px-8">
                                    <SearchForm type="full" />
                                    <Followers follows={follows} />
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default FollowModal;
