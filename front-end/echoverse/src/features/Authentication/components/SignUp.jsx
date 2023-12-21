import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ButtonAction from "../../../components/ButtonAction";
import Logo from "../../../components/Logo";

import emailAt from "../../../assets/svg/emailAt.svg";
import passwordLock from "../../../assets/svg/passwordLock.svg";
import google from "../../../assets/svg/google.svg";
import facebook from "../../../assets/svg/facebook.svg";
import person from "../../../assets/svg/person.svg";

function SignUp({ action }) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleNavigate() {
        if (action !== "signUp") {
            navigate("/sign-up");
        }
    }

    return (
        <div className="relative flex h-[80dvh] min-h-[602px] items-center justify-center py-5 lg:min-h-[706px] xl:min-h-[730px]">
            <div
                className={`flex max-w-xl grow justify-center rounded-lg bg-black-dark px-2 drop-shadow-2xl ${
                    action === "signUp" ? "" : "blur-sm"
                } `}
                onClick={handleNavigate}
            >
                <div className="flex flex-col items-center pb-8 pt-10 lg:pt-12">
                    <div className="hidden pb-5 md:block lg:pb-6 xl:pb-8">
                        <Logo classes={"w-full h-18"} isLinkRequired={false} />
                    </div>
                    <p className="text-center font-archivo-black text-3xl">
                        Welcome Echoverse!
                    </p>
                    <p className="mt-5 font-roboto text-sm text-gray-light">
                        Sign up to continue
                    </p>
                    <form onSubmit={(data) => console.log(data)}>
                        <div className="mb-5 mt-8 flex flex-col gap-5 transition-all duration-300 focus-within:ring-blue-light">
                            <div className="flex items-center rounded-xls bg-gray-charcoal px-4 py-2">
                                <img
                                    draggable="false"
                                    className="h-5.5 w-5.5"
                                    src={person}
                                    alt="search"
                                />
                                <input
                                    placeholder="Username"
                                    className="w-full border-0 bg-gray-charcoal px-1 font-roboto outline-none"
                                    {...register("Username", {
                                        required: true,
                                    })}
                                />
                            </div>
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
                        <ButtonAction type="purple" action={handleSubmit}>
                            Sign Up
                        </ButtonAction>
                    </form>
                    <p className="my-7 text-sm">Or sign up with</p>
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
                    <p className="mt-10 xl:mt-16 text-sm">
                        Already have an account?&nbsp;
                        <Link to={"/login"}>
                            <span className="text-blue-light">Login</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
