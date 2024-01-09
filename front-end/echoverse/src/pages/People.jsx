import { Outlet } from "react-router-dom";
import NavigationMenu from "../features/People/components/NavigationMenu";

function People() {
    return (
        <>
            <div className="mb-2 flex justify-center">
                <div className="w-full min-w-[320px] max-w-[600px]">
                    <NavigationMenu />
                </div>
            </div>
            <div className="flex w-full justify-center overflow-hidden">
                <Outlet />
            </div>
        </>
    );
}

export default People;
