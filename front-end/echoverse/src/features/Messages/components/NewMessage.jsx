import Avatar from "../../../components/Avatar";

import MessageAttachments from "./MessageAttachments";

import person from "../../../assets/img/person.jpg";
import person1 from "../../../assets/img/person1.jpg";
import person2 from "../../../assets/img/person2.jpg";
import person3 from "../../../assets/img/person3.jpg";
import person4 from "../../../assets/img/person4.jpg";

import { formMessageDate } from "../../GameThreadChannel/utils/dateFormatters";
import DropdownUserCard from "../../ChannelUserCard/components/DropdownUserCard";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import MessageReactions from "./MessageReactions";

const imgMapping = {
    person: person,
    person1: person1,
    person2: person2,
    person3: person3,
    person4: person4,
};

const modifiers = [
    {
        name: "flip",
        options: {
            fallbackPlacements: ["top", "bottom"],
        },
        enabled: true,
    },
    {
        name: "preventOverflow",
        options: {
            altAxis: true,
        },
        enabled: true,
    },
    {
        name: "offset",
        options: {
            offset: [0, 8],
        },
    },
];

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
        reactions,
    } = messageObj;

    return (
        <div className="mt-4 hover:bg-gray-dark/50" id={`message-${id}`}>
            <div className="flex py-1 pe-3 ps-2 sm:pe-4 sm:ps-4 md:pe-8">
                <DropdownUserCard
                    referenceElement={
                        <div className="min-h-10 min-w-10 cursor-pointer">
                            <Avatar
                                img={imgMapping[avatar] || person}
                                type="sm"
                            />
                        </div>
                    }
                    placement="right-start"
                    modifiers={modifiers}
                    showAdditionalOptions={false}
                />
                <div className="ps-3">
                    <div className="flex items-baseline gap-1.5 font-medium">
                        <DropdownUserCard
                            referenceElement={
                                <h5 className="inline-block cursor-pointer align-top hover:underline">
                                    {username}
                                </h5>
                            }
                            placement="right-start"
                            modifiers={modifiers}
                            showAdditionalOptions={false}
                        />
                        <h5 className="text-xss text-gray-clear md:text-xs">
                            {formMessageDate(time, is12HoursFormat)}
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
                            senderId={senderId}
                        />
                    )}

                    {reactions && reactions.length > 0 && (
                        <MessageReactions
                            reactions={reactions}
                            padding={`${messageFiles ? "pt-1" : "pt-0.5"}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewMessage;
