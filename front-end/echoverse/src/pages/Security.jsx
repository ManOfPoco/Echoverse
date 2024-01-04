import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import LabelInputField from "../features/Settings/components/LabelInputField";
import ChangePasswordModal from "../features/Security/components/ChangePasswordModal";
import PasswordChangedSuccessfully from "../features/Security/components/PasswordChangedSuccessfully";

const data = {
    email: "johnpeterson@example.com",
    password: "************************************",
};

function Security() {
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
        useState(false);
    const [
        isPasswordChangedSuccessfullyModalOpen,
        setIsPasswordChangedSuccessfullyModalOpen,
    ] = useState(false);

    function handleChangePassword() {
        setIsChangePasswordModalOpen(false);
        setIsPasswordChangedSuccessfullyModalOpen(true);
    }

    return (
        <>
            <ChangePasswordModal
                isChangePasswordModalOpen={isChangePasswordModalOpen}
                setIsChangePasswordModalOpen={setIsChangePasswordModalOpen}
                handleChangePassword={handleChangePassword}
            />
            <PasswordChangedSuccessfully
                isPasswordChangedSuccessfullyModalOpen={
                    isPasswordChangedSuccessfullyModalOpen
                }
                setIsPasswordChangedSuccessfullyModalOpen={
                    setIsPasswordChangedSuccessfullyModalOpen
                }
            />

            <h4 className="mb-5 px-4 text-xl font-semibold lg:font-bold">
                Security
            </h4>
            <div className="flex flex-col gap-5">
                <LabelInputField
                    label="Email"
                    defaultValue={data.email}
                    isDisabled={true}
                />
                <LabelInputField label="Password">
                    <div className="flex flex-col items-start">
                        <InputField
                            size="w-[270px]"
                            roundness="rounded-md"
                            classes="text-sm"
                            defaultValue={data.password}
                            isDisabled={true}
                        />
                        <Button
                            customClasses="pt-1.5 text-blue-light text-xs hover:text-blue-500 h-3.5"
                            action={() => setIsChangePasswordModalOpen(true)}
                        >
                            Change password
                        </Button>
                    </div>
                </LabelInputField>
            </div>
        </>
    );
}

export default Security;
