import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

import securityKey from "../../../assets/svg/securityKey.svg";
import passwordLock from "../../../assets/svg/passwordLock.svg";

function ChangePasswordModal({
    isChangePasswordModalOpen,
    setIsChangePasswordModalOpen,
    handleChangePassword
}) {
    const navigate = useNavigate();
    const {
        register: setNewPasswordRegister,
        handleSubmit: handleNewPassword,
        formState: { newPasswordRegisterErrors },
    } = useForm();

    return (
        <Modal
            isOpen={isChangePasswordModalOpen}
            onClose={() => setIsChangePasswordModalOpen(false)}
            img={securityKey}
            alt="securityKey"
            title="Set your new password"
            description="Enter your new password below"
        >
            <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
            >
                <InputField
                    img={passwordLock}
                    type="password"
                    placeholder="New password"
                    autocomplete="new-password"
                    register={setNewPasswordRegister("Password", {
                        required: true,
                    })}
                />
                <InputField
                    img={passwordLock}
                    type="password"
                    placeholder="Confirm new password"
                    autocomplete="new-password"
                    register={setNewPasswordRegister("ConfirmPassword", {
                        required: true,
                    })}
                />
                <Button
                    type="button"
                    btnClass="primary"
                    roundness="rounded-full"
                    action={handleChangePassword}
                >
                    Reset Password
                </Button>
            </form>
        </Modal>
    );
}

export default ChangePasswordModal;
