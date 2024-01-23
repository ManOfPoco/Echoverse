import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SideNavBarMobile from "./SideNavBarMobile";

const re = new RegExp("^/games/game-threads/[^/]+/[^/]+$");

function AppLayout() {
    const { pathname } = useLocation();
    const isChatRelatedRoute = re.test(pathname);

    const { width } = useWindowDimensions();
    const [isSideNavBarActive, setIsSideNavBarActive] = useState(false);

    return (
        <>
            {isChatRelatedRoute ? (
                <div className="flex">
                    {width < 1024 ? (
                        <SideNavBarMobile
                            isSideNavBarActive={isSideNavBarActive}
                            setIsSideNavBarActive={setIsSideNavBarActive}
                        />
                    ) : (
                        <SideNavBar />
                    )}

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
