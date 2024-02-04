import { useReducer, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import Avatar from "../components/Avatar";
import SearchForm from "../components/SearchForm";

import Messages from "../features/Messages/components/Messages";
import MobileNavBarIcon from "../features/SideNavBar/components/MobileNavBarIcon";
import BackButton from "../features/GameThreadChannel/components/BackButton";
import MessageInputField from "../features/MessageInput/components/MessageInputField";

import useWindowDimensions from "../hooks/useWindowDimensions";

import person from "../assets/img/person.jpg";
import onlineStatus from "../assets/svg/onlineStatus.svg";
import idleStatus from "../assets/svg/idleStatus.svg";
import doNotDisturbStatus from "../assets/svg/doNotDisturbStatus.svg";
import invisibleStatus from "../assets/svg/invisibleStatus.svg";
import messages from "../assets/data/messages.json";
import VirtualUserCard from "../features/ChannelUserCard/components/VirtualUserCard";

const modifiers = [
    {
        name: "flip",
        options: {
            fallbackPlacements: ["bottom", "bottom-end"],
        },
        enabled: true,
    },
    {
        name: "offset",
        options: {
            offset: [-4, 48],
        },
    },
    {
        name: "preventOverflow",
        options: {
            altAxis: true,
            mainAxis: true,
        },
        enabled: true,
    },
];

const statusImgMapping = {
    online: onlineStatus,
    idle: idleStatus,
    doNotDisturb: doNotDisturbStatus,
    invisible: invisibleStatus,
};

const user = {
    id: 1,
    username: "ManOfPoco",
    displayName: "ManOfPoco",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    joinDate: "1706798630.002737",
    customStatus: "I've completely burned out",
    status: "online",
};

const initialState = {
    inputMessageType: null,
    selectedMessage: {
        selectedMessageId: null,
        selectedMessageUsername: null,
        selectedMessageContent: null,
    },
};
function reducer(state, action) {
    switch (action.type) {
        case "setReplyInputMessageType":
            return {
                ...state,
                inputMessageType: "reply",
                selectedMessage: {
                    selectedMessageId: action.payload.id,
                    selectedMessageUsername: action.payload.username,
                },
            };

        case "setEditInputMessageType":
            return {
                ...state,
                inputMessageType: "edit",
                selectedMessage: {
                    selectedMessageId: action.payload.id,
                    selectedMessageContent: action.payload.message,
                },
            };

        case "resetInputMessageType":
            return { ...initialState };

        default:
            break;
    }
}

function Direct() {
    const navigate = useNavigate();

    const [setIsSideNavBarActive] = useOutletContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [referenceElement, setReferenceElement] = useState(null);
    const userRef = useRef(null);

    const { width } = useWindowDimensions();

    const { username, displayName, status } = user;

    const onlineStatusImg = statusImgMapping[status] || "offline";

    function handleSetReferenceElement() {
        if (!referenceElement) {
            const elementCoords = userRef.current.getBoundingClientRect();
            setReferenceElement({
                target: userRef.current,
                left: elementCoords.left,
                top: elementCoords.top,
            });
        } else {
            setReferenceElement(null);
        }
    }

    return (
        <div className="flex h-dvh w-dvw flex-col bg-gray-chat lg:w-[calc(100dvw-320px)]">
            <div className="flex w-full items-center border-b border-black-dark shadow-lg">
                {width < 1024 && (
                    <MobileNavBarIcon
                        setIsSideNavBarActive={setIsSideNavBarActive}
                    />
                )}
                {width < 1024 && (
                    <BackButton onClick={() => navigate("/direct")} />
                )}
                <div className="flex w-full items-center justify-between gap-5 px-2">
                    <div
                        className="flex cursor-pointer items-center gap-3 truncate py-1"
                        onClick={handleSetReferenceElement}
                        ref={userRef}
                    >
                        <div className="relative">
                            <Avatar img={person} type="sm" />
                            {status !== "invisible" && status !== "offline" && (
                                <div className="absolute bottom-0 right-0 rounded-full bg-gray-dark p-0.5">
                                    <img
                                        src={onlineStatusImg}
                                        className="h-2.5 w-2.5"
                                    />
                                </div>
                            )}
                        </div>
                        <h5 className="font-medium">{displayName}</h5>
                    </div>

                    <div className="hidden sm:block">
                        <SearchForm />
                    </div>
                </div>
            </div>

            {referenceElement && (
                <VirtualUserCard
                    referenceElement={referenceElement}
                    member={user}
                    setReferenceElement={setReferenceElement}
                    setSelectedUser={null}
                    placement="bottom-start"
                    modifiers={modifiers}
                />
            )}

            <div className="flex h-[calc(100dvh-101px)] w-full flex-col-reverse overflow-y-auto pb-5 md:h-[calc(100dvh-109px)]">
                <div>
                    <div>
                        <div className="flex flex-col gap-2.5 pe-4 ps-4 pt-10 md:pe-8">
                            <Avatar img={person} type="lg" />
                            <div>
                                <h4 className="text-3xl font-semibold">
                                    {username}
                                </h4>
                                <span className="text-sm text-gray-light">
                                    This is the beginning of your direct message
                                    history with US_GOVERMENT
                                </span>
                            </div>
                        </div>
                    </div>
                    <Messages messages={messages} dispatch={dispatch} />
                </div>
            </div>
            <MessageInputField state={state} dispatch={dispatch} />
        </div>
    );
}

export default Direct;
