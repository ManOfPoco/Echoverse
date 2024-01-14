import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./NavBar";

function AppLayout() {
    const { pathname } = useLocation();

    return (
        <>
            <NavBar  />
            <Outlet />
        </>
    );
}

export default AppLayout;
