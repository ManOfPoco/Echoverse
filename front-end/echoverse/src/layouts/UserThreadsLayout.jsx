import { Outlet } from "react-router-dom";

import Menu from "../components/Menu";
import MenuNavLink from "../components/MenuNavLink";

function UserThreadsLayout() {
    const username = "ManOfPoco";

    return (
        <>
            <div className="h-full min-h-[calc(100dvh-72px)] max-w-full  bg-black-night px-2 sm:px-0 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
                <div className="mx-auto w-full max-w-screen-sm pb-2">
                    <Menu>
                        <MenuNavLink
                            link={`/${username}/threads`}
                            end={true}
                            title="Threads"
                        />
                        <MenuNavLink
                            link={`/${username}/threads/game-threads`}
                            end={false}
                            title="Game Threads"
                        />
                    </Menu>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default UserThreadsLayout;
