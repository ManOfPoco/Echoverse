import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import ModalImage from "../components/ModalImage";
import Button from "../components/Button";

import securityKey from "../assets/svg/securityKey.svg";
import passwordLock from "../assets/svg/passwordLock.svg";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

function SetNewPassword() {
    const navigate = useNavigate();
    const {
        register: setNewPasswordRegister,
        handleSubmit: handleNewPassword,
        formState: { newPasswordRegisterErrors },
    } = useForm();

    return (
        <div className="flex h-[80dvh] min-h-[562px] items-center justify-center py-5">
            <Transition
                as={Fragment}
                appear={true}
                show={true}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-500 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <div className="max-w-lg rounded-xl bg-indigo-950">
                    <div className="flex flex-col items-center px-20 py-14 text-center">
                        <ModalImage img={securityKey} alt="securityKey" />
                        <div className="py-8 font-archivo-black">
                            <div className="pb-4 text-3xl">
                                Set your new password
                            </div>
                            <div className="text-base text-gray-light">
                                Enter your password below and we'll log you in
                                asap
                            </div>
                        </div>

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
                                register={setNewPasswordRegister(
                                    "ConfirmPassword",
                                    {
                                        required: true,
                                    }
                                )}
                            />
                            <Button
                                type="button"
                                btnClass="primary"
                                roundness="rounded-full"
                                action={() =>
                                    navigate("/password-reset-success")
                                }
                            >
                                Reset Password
                            </Button>
                        </form>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default SetNewPassword;
