import Modal from "../../../components/Modal";

import checkDone from "../../../assets/svg/checkDone.svg";
import Button from "../../../components/Button";

function EmailSendModal({ isEmailSendModalOpen, setIsEmailSendModalOpen }) {
    return (
        <Modal
            isOpen={isEmailSendModalOpen}
            onClose={() => setIsEmailSendModalOpen(false)}
            img={checkDone}
            alt="checkDone"
            title="Email Send!"
            description="Check your email address for further instructions"
        >
            <Button
                type="button"
                btnClass="primary"
                roundness='rounded-xls'
                action={() => setIsEmailSendModalOpen(false)}
            >
                Ok
            </Button>
        </Modal>
    );
}

export default EmailSendModal;
