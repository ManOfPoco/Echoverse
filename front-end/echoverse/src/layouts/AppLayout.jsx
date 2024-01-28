import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import NavBar from "./NavBar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SideNavBar from "./SideNavBar";

const re = new RegExp("^/games/game-threads/[^/]+/[^/]+$");

function AppLayout() {
    const { pathname } = useLocation();
    const isChatRelatedRoute = re.test(pathname);

    const [isSideNavBarActive, setIsSideNavBarActive] = useState(false);

    return (
        <>
            <Toaster />
            {isChatRelatedRoute ? (
                <div className="flex">
                    <SideNavBar
                        isSideNavBarActive={isSideNavBarActive}
                        setIsSideNavBarActive={setIsSideNavBarActive}
                    />

                    <Outlet context={[setIsSideNavBarActive]} />
                </div>
            ) : (
                <>
                    <NavBar />
                    <Outlet />
                </>
            )}
        </>
    );
}

export default AppLayout;
