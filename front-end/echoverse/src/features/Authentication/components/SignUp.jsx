import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import Logo from "../../../components/Logo";

import emailAt from "../../../assets/svg/emailAt.svg";
import passwordLock from "../../../assets/svg/passwordLock.svg";
import google from "../../../assets/svg/google.svg";
import facebook from "../../../assets/svg/facebook.svg";
import person from "../../../assets/svg/person.svg";
import InputField from "../../../components/InputField";

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
                className={`flex max-w-xl grow justify-center rounded-lg bg-black-dark px-2 drop-shadow-2xl  ${
                    action === "signUp" ? "blur-none" : "blur-sm"
                } `}
                onClick={handleNavigate}
            >
                <div
                    className={`flex flex-col items-center pb-8 pt-10 lg:pt-12 ${
                        action === "signUp" ? "" : "pointer-events-none"
                    }`}
                >
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
                            <InputField
                                img={person}
                                type="text"
                                placeholder="Username"
                                register={register("Username", {
                                    required: true,
                                })}
                            />
                            <InputField
                                img={emailAt}
                                type="email"
                                placeholder="Email"
                                register={register("Email", {
                                    required: true,
                                })}
                            />
                            <InputField
                                img={passwordLock}
                                type="password"
                                placeholder="Password"
                                register={register("Password", {
                                    required: true,
                                })}
                            />
                        </div>
                        <Button type="primary" action={handleSubmit}>
                            Sign Up
                        </Button>
                    </form>
                    <p className="my-7 text-sm">Or sign up with</p>
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
