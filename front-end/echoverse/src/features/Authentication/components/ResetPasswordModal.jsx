import { useForm } from "react-hook-form";

import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField";

import emailAt from "../../../assets/svg/emailAt.svg";
import resetPasswordLock from "../../../assets/svg/resetPasswordLock.svg";
import Button from "../../../components/Button";

function ResetPasswordModal({
    isResetPasswordModalOpen,
    setIsResetPasswordModalOpen,
    setIsEmailSendModalOpen,
}) {
    const {
        register: passwordResetRegister,
        handleSubmit: handlePasswordReset,
        formState: { passwordResetErrors },
    } = useForm();

    return (
        <Modal
            isOpen={isResetPasswordModalOpen}
            onClose={() => setIsResetPasswordModalOpen(false)}
            img={resetPasswordLock}
            alt="lock"
            title="Reset Password"
            description="Enter your email address below and follow the instruction in it"
        >
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <InputField
                    img={emailAt}
                    type="email"
                    placeholder="Email"
                    autocomplete="username"
                    register={passwordResetRegister("Email", {
                        required: true,
                    })}
                />
                <Button
                    type="button"
                    btnClass="primary"
                    action={() => {
                        setIsResetPasswordModalOpen(false);
                        setIsEmailSendModalOpen(true);
                    }}
                >
                    Send Reset Link
                </Button>
            </form>
        </Modal>
    );
}

export default ResetPasswordModal;
