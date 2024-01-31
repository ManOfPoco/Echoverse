import { getTimeDifference } from "../../GameThreadChannel/utils/dateFormatters";

import FirstDayMessage from "./FirstDayMessage";
import RecentMessage from "./RecentMessage";
import NewMessage from "./NewMessage";
import MessageReply from "./MessageReply";

const is12HoursFormat = true;

function Message({
    messageObj,
    previousMessageObj,
    includeFirstDayMessage = true,
    handleOpenContextMenu,
}) {
    const { messageType, time } = messageObj;

    let messageTimeDifference = null;
    if (
        previousMessageObj &&
        messageObj.senderId === previousMessageObj.senderId
    ) {
        messageTimeDifference = getTimeDifference(
            new Date(time).getTime(),
            new Date(previousMessageObj.time).getTime()
        );
    }

    return (
        <>
            {includeFirstDayMessage && (
                <FirstDayMessage
                    time={time}
                    previousMessageObj={previousMessageObj}
                />
            )}

            {messageType === "message" && (
                <>
                    {messageTimeDifference !== null &&
                    messageTimeDifference <= 5 ? (
                        <RecentMessage
                            messageObj={messageObj}
                            is12HoursFormat={is12HoursFormat}
                            handleOpenContextMenu={handleOpenContextMenu}
                        />
                    ) : (
                        <NewMessage
                            messageObj={messageObj}
                            is12HoursFormat={is12HoursFormat}
                            handleOpenContextMenu={handleOpenContextMenu}
                        />
                    )}
                </>
            )}

            {messageType === "reply" && (
                <MessageReply
                    messageObj={messageObj}
                    is12HoursFormat={is12HoursFormat}
                    handleOpenContextMenu={handleOpenContextMenu}
                />
            )}
        </>
    );
}

export default Message;
