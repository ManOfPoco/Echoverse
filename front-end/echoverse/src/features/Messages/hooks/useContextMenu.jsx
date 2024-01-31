import { useState } from "react";

function useContextMenu() {
    const [clickedMessage, setClickedMessage] = useState(null);
    const [clickedCoordinates, setClickedCoordinates] = useState({
        top: 0,
        left: 0,
    });

    function handleOpenContextMenu(e, messageObj) {
        e.preventDefault();
        setClickedMessage(messageObj);
        setClickedCoordinates({
            top: e.pageY,
            left: e.pageX,
        });
    }

    function handleCloseContextMenu() {
        setClickedMessage(null);
        setClickedCoordinates({
            top: 0,
            left: 0,
        });
    }

    return {
        clickedMessage,
        clickedCoordinates,
        handleOpenContextMenu,
        handleCloseContextMenu,
    };
}

export default useContextMenu;
