import { useState } from "react";

import Login from "../features/Authentication/components/Login";
import SignUp from "../features/Authentication/components/SignUp";


function Authentication({ action }) {

    return (
        <>
            {/* <div className="mx-auto max-w-[1440px]">
                <div className="xl:grid xl:grid-cols-10">
                    <div className="py-5 xl:z-10 xl:col-start-2 xl:col-end-7 xl:row-start-1 xl:row-end-1">
                        <Login
                            setActiveAuthentication={setActiveAuthentication}
                        />
                    </div>
                    <div className="py-5 xl:col-start-5 xl:col-end-10 xl:row-start-1 xl:row-end-1">
                        <SignUp
                            setActiveAuthentication={setActiveAuthentication}
                        />
                    </div>
                </div>
            </div> */}

            <div className="mx-auto max-w-[1440px]">
                <div className="xl:grid xl:grid-cols-10">
                    {action === "login" ? (
                        <>
                            <div className="py-5 xl:z-10 xl:col-start-2 xl:col-end-7 xl:row-start-1 xl:row-end-1">
                                <Login
                                    action={action}
                                />
                            </div>
                            <div className="py-5 hidden xl:block xl:col-start-5 xl:col-end-10 xl:row-start-1 xl:row-end-1">
                                <SignUp
                                    action={action}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="py-5 hidden xl:block xl:col-start-2 xl:col-end-7 xl:row-start-1 xl:row-end-1">
                                <Login
                                    action={action}
                                />
                            </div>
                            <div className="py-5 xl:z-10 xl:col-start-5 xl:col-end-10 xl:row-start-1 xl:row-end-1">
                                <SignUp
                                    action={action}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Authentication;
