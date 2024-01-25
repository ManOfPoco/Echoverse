import Avatar from "../../../components/Avatar";

import MessageAttachments from "./MessageAttachments";

import person from "../../../assets/img/person.jpg";
import person1 from "../../../assets/img/person1.jpg";
import person2 from "../../../assets/img/person2.jpg";
import person3 from "../../../assets/img/person3.jpg";
import person4 from "../../../assets/img/person4.jpg";

import { formatDate } from "../utils/dateFormatters";

const imgMapping = {
    person: person,
    person1: person1,
    person2: person2,
    person3: person3,
    person4: person4,
};

function NewMessage({ messageObj, is12HoursFormat }) {
    const {
        id,
        senderId,
        avatar,
        username,
        time,
        message,
        messageFiles,
        isEdited,
    } = messageObj;

    return (
        <div className="mt-4 hover:bg-gray-dark/50" id={`message-${id}`}>
            <div className="flex gap-3 py-1 pe-3 sm:pe-4 ps-2 sm:ps-4 md:pe-8">
                <div className="min-h-10 min-w-10">
                    <Avatar img={imgMapping[avatar] || person} type="sm" />
                </div>
                <div>
                    <div className="flex items-baseline gap-1.5 font-medium">
                        <h5 className="inline-block cursor-pointer align-top hover:underline">
                            {username}
                        </h5>
                        <h5 className="text-xss md:text-xs text-gray-clear">
                            {formatDate(time, is12HoursFormat)}
                        </h5>
                        <span className="text-xss text-gray-clear">
                            {isEdited && "(edited)"}
                        </span>
                    </div>

                    <p className="whitespace-pre-wrap break-words leading-snug text-platinum">
                        {message}
                    </p>
                    {messageFiles && (
                        <MessageAttachments
                            messageFiles={messageFiles}
                            isRecentMessage={false}
                            senderId={senderId}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewMessage;
