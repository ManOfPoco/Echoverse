import Avatar from "../../../components/Avatar";

import {
    formatDate,
    isFirstDayMessage,
    getTimeDifference,
} from "../utils/dateFormatters";

import person from "../../../assets/img/person.jpg";
import person1 from "../../../assets/img/person1.jpg";
import person2 from "../../../assets/img/person2.jpg";
import person3 from "../../../assets/img/person3.jpg";
import person4 from "../../../assets/img/person4.jpg";

const imgMapping = {
    person: person,
    person1: person1,
    person2: person2,
    person3: person3,
    person4: person4,
};
const is12HoursFormat = true;

function Message({ messageObj, previousMessageObj }) {
    const { id, img, username, time, message } = messageObj;
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
            {isFirstDayMessage(time, previousMessageObj?.time) ? (
                <div className="relative">
                    <div className="mt-4 flex w-full justify-center pe-4 ps-4 after:absolute after:left-0 after:top-1/2 after:z-10 after:w-full after:border-b after:border-gray-light/30 md:pe-8">
                        <div className="z-20 inline-block bg-gray-chat px-2 text-xs text-gray-clear">
                            {`${new Date(time).toLocaleDateString([], {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                            })}`}
                        </div>
                    </div>
                </div>
            ) : null}
            {messageTimeDifference !== null && messageTimeDifference <= 5 ? (
                <div className="group relative hover:bg-gray-dark/50">
                    <div className="hidden group-hover:block">
                        <span className="text-xss absolute left-0 flex h-7 w-[68px] items-center justify-center font-medium leading-snug text-gray-clear">
                            {new Date(time).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: is12HoursFormat,
                            })}
                        </span>
                    </div>
                    <p className="text-platinum whitespace-pre-wrap break-words py-0.5 pe-4 ps-[68px] leading-snug md:pe-8">
                        {message}
                    </p>
                </div>
            ) : (
                <div className="mt-4 hover:bg-gray-dark/50">
                    <div className="flex gap-3 py-1 pe-4 ps-4 md:pe-8">
                        <div className="min-h-10 min-w-10">
                            <Avatar img={imgMapping[img] || person} type="sm" />
                        </div>
                        <div>
                            <div className="flex items-baseline gap-1.5 font-medium">
                                <h5 className="inline-block cursor-pointer align-top hover:underline">
                                    {username}
                                </h5>
                                <h5 className="text-xs text-gray-clear">
                                    {formatDate(time, is12HoursFormat)}
                                </h5>
                            </div>

                            <p className="text-platinum whitespace-pre-wrap break-words leading-snug">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Message;
