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

    function handleDeleteGame() {
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
        >
            <div className="flex max-w-screen-md flex-col gap-2">
                <h5 className="text-lg font-medium">Delete message</h5>
                <p className="text-base text-gray-light">
                    Are you sure you want to delete this message?
                </p>
                <div className="pointer-events-none pb-4 rounded-md border border-black-dark drop-shadow-[0_0_3px_rgba(0,0,0,0.25)]">
                    <Message
                        messageObj={selectedMessage}
                        includeFirstDayMessage={false}
                    />
                </div>

                <div className="mt-2 flex justify-end gap-1 py-1">
                    <Button
                        btnClass="secondary"
                        size="h-9 w-28"
                        roundness="rounded-lg"
                        action={handleCloseModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        btnClass="danger"
                        size="h-9 w-28"
                        roundness="rounded-lg"
                        action={handleDeleteGame}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </ConfirmationModal>
    );
}

export default ConfirmDeleteMessageModal;
