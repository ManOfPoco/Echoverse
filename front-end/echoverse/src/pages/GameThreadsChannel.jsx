import { useReducer, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import BreadCrumbNavBar from "../components/BreadCrumbNavBar";
import BreadCrumbNavBarElement from "../components/BreadCrumbNavBarElement";

import ChannelInnerNavBar from "../features/GameThreadChannel/components/ChannelInnerNavBar";
import GameThreadTags from "../features/GameThreadChannel/components/GameThreadTags";
import Messages from "../features/Messages/components/Messages";
import Message from "../features/Messages/components/Message";
import MobileNavBarIcon from "../features/SideNavBar/components/MobileNavBarIcon";
import BackButton from "../features/GameThreadChannel/components/BackButton";
import MessageInputField from "../features/MessageInput/components/MessageInputField";
import MembersList from "../features/GameThreadChannel/components/MembersList";

import useWindowDimensions from "../hooks/useWindowDimensions";

import person from "../assets/img/person.jpg";
import chatBubble from "../assets/svg/chatBubble.svg";

import messages from "../assets/data/messages.json";
import members from "../assets/data/members.json";

const thread = {
    id: 1,
    title: "Game Discussion ThreadGame Discussion ThreadGame Discussion ThreadGame Discussion ThreadGame Discussion ThreadGame Discussion ThreadGame Discussion Thread",
    description: "Discuss your favorite games and share gaming experiences.",
    gameTags: ["Action", "Adventure", "RPG", "Dedicated Server"],
    creationTime: "2024-01-15T09:45:00Z",
    createdBy: {
        id: 1,
        username: "GameMaster",
    },
    initialMessage: {
        id: 999,
        messageType: "message",
        senderId: 1,
        username: "ManOfPoco",
        img: person,
        time: "2024-01-11T10:00:00Z",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam ipsum necessitatibus id architecto fugiat minus, commodi tenetur, saepe distinctio qui et reiciendis numquam quidem sapiente molestiae libero error perferendis.`,
    },
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

function GameThreadsChannel() {
    const [setIsSideNavBarActive] = useOutletContext();
    const { game, threadId } = useParams();

    const [state, dispatch] = useReducer(reducer, initialState);

    const { width, height } = useWindowDimensions();
    const { title, gameTags, initialMessage } = thread;

    const [showUserList, setShowUserList] = useState(
        width <= 1024 ? false : true
    );

    return (
        <div className="flex h-dvh w-full flex-col bg-gray-chat">
            <div className="flex items-center border-b border-black-dark shadow-lg">
                <MobileNavBarIcon
                    setIsSideNavBarActive={setIsSideNavBarActive}
                />

                {width < 1024 && <BackButton />}
                <div className="flex items-center justify-between truncate lg:px-3">
                    {width < 1024 ? (
                        <BreadCrumbNavBar img={chatBubble}>
                            <BreadCrumbNavBarElement
                                to={`/games/game-threads/${game}/${threadId}`}
                                title={title}
                            />
                        </BreadCrumbNavBar>
                    ) : (
                        <BreadCrumbNavBar img={chatBubble}>
                            <BreadCrumbNavBarElement
                                to={`/games/game-threads/${game}`}
                                title={game}
                                truncate={false}
                            />

                            <BreadCrumbNavBarElement
                                to={`/games/game-threads/${game}/${threadId}`}
                                title={title}
                            />
                        </BreadCrumbNavBar>
                    )}

                    <ChannelInnerNavBar setShowUserList={setShowUserList} />
                </div>
            </div>

            <div className="flex h-[calc(100dvh-41px)] w-full md:h-[calc(100dvh-49px)]">
                <div
                    className={`flex w-full flex-col ${
                        showUserList ? "lg:w-[calc(100dvw-240px)]" : ""
                    } `}
                >
                    <div className="flex h-[calc(100dvh-101px)] w-full flex-col-reverse overflow-y-auto pb-5 md:h-[calc(100dvh-109px)]">
                        <div>
                            <div>
                                <div className="flex flex-col gap-2.5 pe-4 ps-4 pt-10 md:pe-8">
                                    <h4 className="text-3xl font-semibold">
                                        {title}
                                    </h4>
                                    <GameThreadTags tags={gameTags} />
                                </div>

                                <div className="font-nunito">
                                    <Message messageObj={initialMessage} />
                                </div>
                            </div>
                            <Messages
                                messages={messages}
                                state={state}
                                dispatch={dispatch}
                            />
                        </div>
                    </div>
                    <MessageInputField state={state} dispatch={dispatch} />
                </div>

                {showUserList && (
                    <div className="absolute inset-y-0 right-0 top-[41px] z-40 h-[calc(100dvh-41px)] text-platinum md:top-[49px] md:h-[calc(100dvh-49px)] lg:static">
                        <MembersList members={members} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GameThreadsChannel;
