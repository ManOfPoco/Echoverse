import { useState } from "react";

import Login from "../features/Authentication/components/Login";
import SignUp from "../features/Authentication/components/SignUp";

function Authentication({ action }) {
    const [activeAuthentication, setActiveAuthentication] = useState(action);

    return (
        <>
            {activeAuthentication === "login" ? (
                <Login setActiveAuthentication={setActiveAuthentication} />
            ) : (
                <SignUp setActiveAuthentication={setActiveAuthentication} />
            )}
        </>
    );
}

export default Authentication;
