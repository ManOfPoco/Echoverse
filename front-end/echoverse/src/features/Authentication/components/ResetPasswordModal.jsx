import { useForm } from "react-hook-form";

import Modal from "../../../components/Modal";
import emailAt from "../../../assets/svg/emailAt.svg";
import resetPasswordLock from "../../../assets/svg/resetPasswordLock.svg";
import InputField from "../../../components/InputField";

function ResetPasswordModal({ isModalOpen, setIsModalOpen }) {
    const {
        register: passwordResetRegister,
        handleSubmit: handlePasswordReset,
        formState: { passwordResetErrors },
    } = useForm();

    return (
        <Modal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            img={resetPasswordLock}
            alt="lock"
            title="Reset Password"
            description="Enter your email address below and follow the instruction in it"
            btnText="Send Reset Link"
            btnAction={handlePasswordReset}
        >
            <form className="pb-5" onSubmit={(e) => e.preventDefault()}>
                <InputField
                    img={emailAt}
                    type="email"
                    placeholder="Email"
                    autocomplete='username'
                    register={passwordResetRegister("Email", {
                        required: true,
                    })}
                />
            </form>
        </Modal>
    );
}

export default ResetPasswordModal;
