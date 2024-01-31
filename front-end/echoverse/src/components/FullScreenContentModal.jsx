import { Dialog, Transition } from "@headlessui/react";

function FullScreenContentModal({
    isOpen,
    handleModalClose,
    bgColor = "bg-black-dark",
    children,
}) {
    return (
        <Transition show={isOpen}>
            <Dialog
                open={isOpen}
                onClick={handleModalClose}
                onClose={() => {}}
                className="relative z-50"
            >
                <div className={`fixed inset-0 ${bgColor}`} />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel>
                        <div className="relative mx-auto">{children}</div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
}

export default FullScreenContentModal;
