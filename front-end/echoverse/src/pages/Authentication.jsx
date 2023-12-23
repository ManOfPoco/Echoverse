import { Transition } from "@headlessui/react";

import Login from "../features/Authentication/components/Login";
import SignUp from "../features/Authentication/components/SignUp";

function Authentication({ action }) {
    return (
        <div className="mx-auto max-w-[1440px]">
            <div className="xl:grid xl:grid-cols-authentication">
                <div
                    className={`py-5 xl:col-start-4 xl:col-end-12 xl:row-start-1 xl:row-end-1 ${
                        action === "login" ? "xl:z-10" : "hidden xl:block"
                    }`}
                >
                    <Transition
                        appear={action === "login"}
                        show={true}
                        enter="transition-all duration-500"
                        enterFrom="blur-sm"
                        enterTo="blur-none"
                    >
                        <Login action={action} />
                    </Transition>
                </div>
                <div
                    className={`py-5 xl:col-start-10 xl:col-end-[18] xl:row-start-1 xl:row-end-1 ${
                        action === "signUp" ? "xl:z-10" : "hidden xl:block"
                    }`}
                >
                    <Transition
                        appear={action === "signUp"}
                        show={true}
                        enter="transition-all duration-500"
                        enterFrom="blur-sm"
                        enterTo="blur-none"
                    >
                        <SignUp action={action} />
                    </Transition>
                </div>
            </div>
        </div>
    );
}

export default Authentication;
