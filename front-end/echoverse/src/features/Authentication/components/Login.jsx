import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import ButtonAction from "../../../components/ButtonAction";
import Logo from "../../../components/Logo";

import emailAt from "../../../assets/svg/emailAt.svg";
import passwordLock from "../../../assets/svg/passwordLock.svg";
import google from "../../../assets/svg/google.svg";
import facebook from "../../../assets/svg/facebook.svg";

function Login({ setActiveAuthentication }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="relative flex h-[85dvh] min-h-[602px] items-center justify-center py-5 lg:min-h-[706px] xl:min-h-[780px]">
            <div className="flex max-w-xl grow justify-center rounded-lg bg-blue-dark px-2">
                <div className="flex flex-col items-center pb-8 pt-16 xl:pt-24">
                    <div className="hidden lg:block lg:pb-8 xl:pb-10">
                        <Logo classes={"lg:w-full lg:h-18"} />
                    </div>
                    <p className="font-archivo-black text-3xl">Welcome Back!</p>
                    <p className="mt-5 font-roboto text-sm text-gray-light">
                        Login to continue
                    </p>
                    <form onSubmit={(data) => console.log(data)}>
                        <div className="mt-8 flex flex-col gap-5 transition-all duration-300 focus-within:ring-blue-light">
                            <div className="flex items-center rounded-xls bg-gray-charcoal px-4 py-2">
                                <img
                                    draggable="false"
                                    className="h-5.5 w-5.5"
                                    src={emailAt}
                                    alt="search"
                                />
                                <input
                                    placeholder="Email"
                                    className="w-full border-0 bg-gray-charcoal px-1 font-roboto outline-none"
                                    {...register("Email", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="flex items-center rounded-xls bg-gray-charcoal px-4 py-2">
                                <img
                                    draggable="false"
                                    className="h-6 w-6"
                                    src={passwordLock}
                                    alt="password"
                                />
                                <input
                                    placeholder="Password"
                                    className="w-full border-0 bg-gray-charcoal px-1 font-roboto outline-none"
                                    {...register("Password", {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Link
                                to="/reset-password"
                                className="mb-6 mt-3 text-sm text-blue-light"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <ButtonAction type="purple" action={handleSubmit}>
                            Login
                        </ButtonAction>
                    </form>
                    <p className="my-7 text-sm">Or continue with</p>
                    <div className="flex w-full justify-around gap-4">
                        <div
                            className="rounded-full bg-gray-charcoal p-3"
                            onClick={() => console.log("google login")}
                        >
                            <img
                                draggable="false"
                                className="h-8 w-8"
                                src={google}
                                alt="password"
                            />
                        </div>
                        <div
                            className="rounded-full bg-gray-charcoal p-3"
                            onClick={() => console.log("facebook login")}
                        >
                            <img
                                draggable="false"
                                className="h-8 w-8"
                                src={facebook}
                                alt="password"
                            />
                        </div>
                    </div>
                    <p className="mt-20 text-sm">
                        Don't have an account? Create an&nbsp;
                        <Link to={"/sign-up"}>
                            <span
                                className="text-blue-light"
                                onClick={() =>
                                    setActiveAuthentication("signUp")
                                }
                            >
                                account
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
