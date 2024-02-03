import toast from "react-hot-toast";

import ConfirmationModal from "../../../components/ConfirmationModal";
import Button from "../../../components/Button";

import Message from "./Message";

function ConfirmDeleteMessageModal({
    isDeleteMessageModalOpen,
    setIsDeleteMessageModalOpen,
    selectedMessage,
}) {
    function handleCloseModal() {
        setIsDeleteMessageModalOpen(false);
    }

    function handleDeleteMessage() {
        handleCloseModal();
        toast.success(`Message was deleted`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <ConfirmationModal
            isOpen={isDeleteMessageModalOpen}
            onClose={handleCloseModal}
            bgColor="bg-gray-dark"
            handleDelete={handleDeleteMessage}
        >
            <div className="flex max-w-screen-md flex-col gap-2">
                <h5 className="text-lg font-medium">Delete message</h5>
                <p className="text-base text-gray-light">
                    Are you sure you want to delete this message?
                </p>
                <div className="pointer-events-none rounded-md border border-black-dark pb-4 drop-shadow-[0_0_3px_rgba(0,0,0,0.25)]">
                    <Message
                        messageObj={selectedMessage}
                        includeFirstDayMessage={false}
                    />
                </div>
            </div>
        </ConfirmationModal>
    );
}

export default ConfirmDeleteMessageModal;
