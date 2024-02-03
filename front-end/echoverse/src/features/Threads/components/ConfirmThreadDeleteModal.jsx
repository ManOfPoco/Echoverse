import { useState } from "react";
import ConfirmationModal from "../../../components/ConfirmationModal";
import Button from "../../../components/Button";
import ThreadInstance from "./ThreadInstance";
import toast from "react-hot-toast";

function ConfirmThreadDeleteModal({
    thread,
    isDeleteThreadModalOpen,
    setIsDeleteThreadModalOpen,
}) {
    function handleCloseModal() {
        setIsDeleteThreadModalOpen(false);
    }

    function handleDeleteThread() {
        handleCloseModal();
        toast.success(`Thread was deleted`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <ConfirmationModal
            isOpen={isDeleteThreadModalOpen}
            onClose={handleCloseModal}
            handleDelete={handleDeleteThread}
        >
            <div className="flex max-w-screen-md flex-col gap-2">
                <h5 className="text-lg font-medium">Delete thread</h5>
                <p className="text-base text-gray-light">
                    Are you sure you want to delete this thread?
                </p>
                <div className="pointer-events-none rounded-md border border-black-dark drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] sm:px-4">
                    <ThreadInstance
                        thread={thread}
                        enablePointerEvents={false}
                    />
                </div>
            </div>
        </ConfirmationModal>
    );
}

export default ConfirmThreadDeleteModal;
