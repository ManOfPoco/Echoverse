import { Outlet } from "react-router-dom";

import Menu from "../components/Menu";
import MenuNavLink from "../components/MenuNavLink";

function UserSavedThreadsLayout() {
    const username = "ManOfPoco";

    return (
        <>
            <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night px-2 lg:min-h-[calc(100dvh-80px)] lg:px-0 xl:min-h-[calc(100dvh-126px)]">
                <div className="mx-auto w-full max-w-screen-sm pb-2">
                    <Menu>
                        <MenuNavLink
                            link={`/${username}/saved`}
                            end={true}
                            title="Threads"
                        />
                        <MenuNavLink
                            link={`/${username}/saved/game-threads`}
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

export default UserSavedThreadsLayout;
