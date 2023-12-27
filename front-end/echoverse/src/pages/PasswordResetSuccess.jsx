import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ModalImage from "../components/ModalImage";

import checkDone from "../assets/svg/checkDone.svg";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";

function PasswordResetSuccess() {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-[80dvh] min-h-[430px] items-center justify-center py-5">
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
                        <ModalImage img={checkDone} alt="securityKey" />
                        <div className="py-8 font-archivo-black">
                            <div className="pb-4 text-3xl">Password Reset!</div>
                            <div className="text-base text-gray-light">
                                Your password has been successfully reset, click
                                below to login to the system
                            </div>
                        </div>

                        <Button
                            type="button"
                            btnClass="primary"
                            roundness="rounded-full"
                            action={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default PasswordResetSuccess;
