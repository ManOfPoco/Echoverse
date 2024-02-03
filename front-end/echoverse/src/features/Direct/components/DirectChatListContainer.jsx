import SearchForm from "../../../components/SearchForm";
import MobileNavBarIcon from "../../SideNavBar/components/MobileNavBarIcon";

import DirectChatList from "./DirectChatList";

function DirectChatListContainer({ setIsSideNavBarActive }) {
    return (
        <>
            <div className="flex w-full flex-col sm:w-80">
                <div className="flex items-center pb-2 pt-3">
                    <MobileNavBarIcon
                        setIsSideNavBarActive={setIsSideNavBarActive}
                    />
                    <div className="w-full pe-3">
                        <SearchForm type="full" />
                    </div>
                </div>
                <DirectChatList />
            </div>
        </>
    );
}

export default DirectChatListContainer;
