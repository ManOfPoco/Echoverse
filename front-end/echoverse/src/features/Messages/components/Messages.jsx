import Message from "./Message";

import useContextMenu from "../hooks/useContextMenu";
import ContextMenu from "./ContextMenu";

function Messages({ messages, dispatch }) {
    const {
        clickedMessage,
        clickedCoordinates,
        handleOpenContextMenu,
        handleCloseContextMenu
    } = useContextMenu();

    return (
        <div className="font-nunito">
            {messages.map((message, index) => (
                <Message
                    messageObj={message}
                    previousMessageObj={messages[index - 1]}
                    handleOpenContextMenu={handleOpenContextMenu}
                    key={message.id}
                />
            ))}
            {clickedMessage && (
                <ContextMenu
                    clickedMessage={clickedMessage}
                    clickedCoordinates={clickedCoordinates}
                    handleCloseContextMenu={handleCloseContextMenu}
                    dispatch={dispatch}
                />
            )}
        </div>
    );
}

export default Messages;
