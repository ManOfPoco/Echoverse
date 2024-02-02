import { Outlet, useOutletContext, useParams } from "react-router-dom";

import useWindowDimensions from "../hooks/useWindowDimensions";
import DirectChatListContainer from "../features/Direct/components/DirectChatListContainer";

function DirectPage() {
    const [setIsSideNavBarActive] = useOutletContext();
    const { chatId } = useParams();
    const { width } = useWindowDimensions();

    return (
        <div className="flex h-dvh w-dvw bg-gray-chat text-platinum">
            {!chatId && (
                <DirectChatListContainer
                    setIsSideNavBarActive={setIsSideNavBarActive}
                />
            )}
            {chatId && width >= 1024 && (
                <DirectChatListContainer
                    setIsSideNavBarActive={setIsSideNavBarActive}
                />
            )}

            {!chatId && width >= 576 && (
                <div className="flex w-full items-center justify-center sm:w-[calc(100dvw-320px)]">
                    <h5 className="rounded-xl bg-gray-dark px-2 py-1">
                        Select a chat to start chatting
                    </h5>
                </div>
            )}
            <Outlet context={[setIsSideNavBarActive]} />
        </div>
    );
}

export default DirectPage;
