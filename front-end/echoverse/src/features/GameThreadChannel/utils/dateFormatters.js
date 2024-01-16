function getTimeDifference(date1, date2) {
    const difference = date1 - date2;
    const minutesDifference = Math.floor(difference / 1000 / 60);
    return minutesDifference;
}

function isFirstDayMessage(messageTime, previousMessageTime) {
    const messageDay = new Date(messageTime).getDay();
    const previousMessageDay = new Date(previousMessageTime).getDay();

    return messageDay !== previousMessageDay
}

function formatDate(time, is12HoursFormat = true) {
    const currentTime = new Date();
    const messageSendTime = new Date(time);

    const currentTimeYear = currentTime.getFullYear();
    const currentTimeMonth = currentTime.getMonth();
    const currentTimeDate = currentTime.getDate();
    const currentTimeDay = currentTime.getDay();

    const messageYear = messageSendTime.getFullYear();
    const messageMonth = messageSendTime.getMonth();
    const messageDate = messageSendTime.getDate();
    const messageDay = messageSendTime.getDay();

    if (
        messageYear === currentTimeYear &&
        messageMonth === currentTimeMonth &&
        messageDate === currentTimeDate &&
        messageDay === currentTimeDay
    ) {
        return `Today at ${messageSendTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: is12HoursFormat,
        })}`;
    } else if (
        messageYear === currentTimeYear &&
        messageMonth === currentTimeMonth &&
        messageDate === currentTimeDate - 1
    ) {
        return `Yesterday at ${messageSendTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: is12HoursFormat,
        })}`;
    } else {
        return `${messageSendTime.toLocaleString([], {
            hour12: is12HoursFormat,
        })}`;
    }
}

export { getTimeDifference, isFirstDayMessage, formatDate };
