import FirstDayMessage from "./FirstDayMessage";
import RecentMessage from "./RecentMessage";
import NewMessage from "./NewMessage";
import MessageReply from "./MessageReply";

import { getTimeDifference } from "../utils/dateFormatters";

const is12HoursFormat = true;

function Message({ messageObj, previousMessageObj }) {
    const {

        messageType,
        time,
    } = messageObj;
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
            <FirstDayMessage
                time={time}
                previousMessageObj={previousMessageObj}
            />

            {messageType === "message" && (
                <>
                    {messageTimeDifference !== null &&
                    messageTimeDifference <= 5 ? (
                        <RecentMessage
                            messageObj={messageObj}
                            is12HoursFormat={is12HoursFormat}
                        />
                    ) : (
                        <NewMessage
                            messageObj={messageObj}
                            is12HoursFormat={is12HoursFormat}
                        />
                    )}
                </>
            )}

            {messageType === "reply" && (
                <MessageReply
                    messageObj={messageObj}
                    is12HoursFormat={is12HoursFormat}
                />
            )}
        </>
    );
}

export default Message;
