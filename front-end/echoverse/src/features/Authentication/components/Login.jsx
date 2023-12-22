import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import Logo from "../../../components/Logo";
import InputField from "../../../components/InputField";

import passwordLock from "../../../assets/svg/passwordLock.svg";
import emailAt from "../../../assets/svg/emailAt.svg";
import google from "../../../assets/svg/google.svg";
import facebook from "../../../assets/svg/facebook.svg";
import ResetPasswordModal from "./ResetPasswordModal";

function Login({ action }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const {
        register: loginRegister,
        handleSubmit: handleLoginSubmit,
        formState: { loginErrors },
    } = useForm();

    function handleNavigate() {
        if (action !== "login") {
            navigate("/login");
        }
    }

    return (
        <>
            <ResetPasswordModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />

            <div className="relative flex h-[80dvh] min-h-[602px] items-center justify-center py-5 lg:min-h-[706px] xl:min-h-[730px]">
                <div
                    className={`flex max-w-xl grow justify-center rounded-lg bg-blue-dark px-2 drop-shadow-2xl transition-all duration-500 ${
                        action === "login" ? "blur-none" : "blur-sm"
                    } ${
                        isModalOpen ? "blur-sm" : "blur-none"
                    }`}
                    onClick={handleNavigate}
                >
                    <div
                        className={`flex flex-col items-center pb-8 pt-16 xl:pt-16 ${
                            action === "login" ? "" : "pointer-events-none"
                        }`}
                    >
                        <div className="hidden pb-5 md:block lg:pb-8 xl:pb-10">
                            <Logo
                                classes={"w-full h-18"}
                                isLinkRequired={false}
                            />
                        </div>
                        <p className="font-archivo-black text-3xl">
                            Welcome Back!
                        </p>
                        <p className="mt-5 font-roboto text-sm text-gray-light">
                            Login to continue
                        </p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mt-8 flex flex-col gap-5 transition-all duration-300 focus-within:ring-blue-light">
                                <InputField
                                    img={emailAt}
                                    type="email"
                                    placeholder="Email"
                                    autocomplete='username'
                                    register={loginRegister("Email", {
                                        required: true,
                                    })}
                                />
                                <InputField
                                    img={passwordLock}
                                    type="password"
                                    placeholder="Password"
                                    autocomplete='current-password'
                                    register={loginRegister("Password", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    customClasses="mb-6 mt-3 text-sm text-blue-light"
                                    action={() => setIsModalOpen(true)}
                                >
                                    Forgot Password?
                                </Button>
                            </div>
                            <Button
                                type="submit"
                                btnClass="primary"
                                action={handleLoginSubmit}
                            >
                                Login
                            </Button>
                        </form>
                        <p className="my-7 text-sm">Or continue with</p>
                        <div className="flex w-full justify-around gap-4">
                            <Button
                                customClasses="rounded-full bg-gray-charcoal p-3"
                                action={() => console.log("google login")}
                            >
                                <img
                                    draggable="false"
                                    className="h-8 w-8"
                                    src={google}
                                    alt="password"
                                />
                            </Button>
                            <Button
                                customClasses="rounded-full bg-gray-charcoal p-3"
                                action={() => console.log("facebook login")}
                            >
                                <img
                                    draggable="false"
                                    className="h-8 w-8"
                                    src={facebook}
                                    alt="password"
                                />
                            </Button>
                        </div>
                        <p className="mt-10 text-sm xl:mt-16">
                            Don't have an account? Create an&nbsp;
                            <Link to={"/sign-up"}>
                                <span className="text-blue-light">account</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
