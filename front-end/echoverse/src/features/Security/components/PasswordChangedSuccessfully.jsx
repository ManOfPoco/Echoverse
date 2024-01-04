import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

import checkDone from "../../../assets/svg/checkDone.svg";

function PasswordChangedSuccessfully({
    isPasswordChangedSuccessfullyModalOpen,
    setIsPasswordChangedSuccessfullyModalOpen,
}) {
    return (
        <Modal
            isOpen={isPasswordChangedSuccessfullyModalOpen}
            onClose={() => setIsPasswordChangedSuccessfullyModalOpen(false)}
            img={checkDone}
            alt="notes"
            title="Password Successfully Changed!"
            description="Your password has been successfully changed"
        >
            <Button
                type="button"
                btnClass="primary"
                roundness="rounded-full"
                action={() => setIsPasswordChangedSuccessfullyModalOpen(false)}
            >
                Ok
            </Button>
        </Modal>
    );
}

export default PasswordChangedSuccessfully;
