import Avatar from "../../../components/Avatar";

function getTimeDifference(date1, date2) {
    const difference = date1 - date2;
    const minutesDifference = Math.floor(difference / 1000 / 60);
    return minutesDifference;
}

function Message({ messageObj, previousMessageObj }) {
    const { id, img, username, time, message } = messageObj;
    let messageTimeDifference = null;
    if (previousMessageObj) {
        messageTimeDifference = getTimeDifference(
            new Date(time).getTime(),
            new Date(previousMessageObj.time).getTime()
        );
    }

    console.log(messageTimeDifference);
    return (
        <>
            {messageTimeDifference && messageTimeDifference <= 5 ? (
                <p className="ps-[52px] py-0.5 whitespace-pre-wrap break-words font-roboto">
                    {message}
                </p>
            ) : (
                <div className="flex gap-3 pt-5">
                    <Avatar img={img} type="sm" />
                    <div className="">
                        <div className="flex gap-1.5">
                            <h5 className="pointer-events-auto font-medium hover:underline">
                                {username}
                            </h5>
                            <h5 className="text-xs text-gray-clear">
                                {new Date(time).toLocaleTimeString()}
                            </h5>
                        </div>

                        <p className="whitespace-pre-wrap break-words font-roboto">
                            {message}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Message;
