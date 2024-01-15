import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";

const re = new RegExp("^/games/game-threads/[^/]+/[^/]+$");

function AppLayout() {
    const { pathname } = useLocation();
    const isChatRelatedRoute = re.test(pathname);

    return (
        <>
            {isChatRelatedRoute ? (
                <div className="flex">
                    <SideNavBar />
                    <Outlet />
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
