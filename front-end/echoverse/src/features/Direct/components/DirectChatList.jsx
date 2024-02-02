import Chat from "./Chat";

import directChatList from "../../../assets/data/directChatList.json";

function DirectChatList() {
    return (
        <div className="flex flex-col overflow-y-auto pt-1">
            {directChatList.map((chat) => (
                <Chat chat={chat} key={chat.id} />
            ))}
        </div>
    );
}

export default DirectChatList;
