import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import TextareaInput from "../components/TextareaInput";

import BreadCrumbNavBarContainer from "../components/BreadCrumbNavBarContainer";
import BreadCrumbNavBar from "../components/BreadCrumbNavBar";
import BreadCrumbNavBarElement from "../components/BreadCrumbNavBarElement";

import ChannelInnerNavBar from "../features/GameThreadChannel/components/ChannelInnerNavBar";
import GameThreadTags from "../features/GameThreadChannel/components/GameThreadTags";
import Messages from "../features/GameThreadChannel/components/Messages";
import Message from "../features/GameThreadChannel/components/Message";

import useWindowDimensions from "../hooks/useWindowDimensions";

import person from "../assets/img/person.jpg";
import chatBubble from "../assets/svg/chatBubble.svg";
import add from "../assets/svg/add.svg";
import gif from "../assets/svg/gif.svg";
import smileEmoji from "../assets/svg/smileEmoji.svg";

import messages from "../assets/data/messages.json";
import MobileNavBarIcon from "../features/SideNavBarMobile/components/MobileNavBarIcon";

const thread = {
    id: 1,
    title: "Game Discussion Thread",
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

function GameThreadsChannel() {
    const [setIsSideNavBarActive] = useOutletContext();

    const [message, setMessage] = useState("");
    const { game, threadId } = useParams();
    const { height } = useWindowDimensions();
    const { title, gameTags, initialMessage } = thread;

    return (
        <div className="w-full bg-gray-chat lg:w-[calc(100%-56px)]">
            <BreadCrumbNavBarContainer>
                <MobileNavBarIcon
                    setIsSideNavBarActive={setIsSideNavBarActive}
                />
                <div className="flex justify-between">
                    <BreadCrumbNavBar img={chatBubble}>
                        <BreadCrumbNavBarElement to="/games" title="Games" />
                        <BreadCrumbNavBarElement
                            to={`/games/game-threads/${game}`}
                            title={game}
                        />
                        <BreadCrumbNavBarElement
                            to={`/games/game-threads/${game}/${threadId}`}
                            title={title}
                        />
                    </BreadCrumbNavBar>

                    <ChannelInnerNavBar />
                </div>
            </BreadCrumbNavBarContainer>
            <div className="flex h-[calc(100dvh-105px)] w-full flex-col-reverse overflow-y-auto pb-5 md:h-[calc(100dvh-121px)]">
                <div>
                    <div>
                        <div className="flex flex-col gap-2.5 pe-4 ps-4 pt-10 md:pe-8">
                            <h4 className="text-3xl font-semibold">{title}</h4>
                            <GameThreadTags tags={gameTags} />
                        </div>

                        <div className="font-nunito">
                            <Message messageObj={initialMessage} />
                        </div>
                    </div>
                    <Messages messages={messages} />
                </div>
            </div>
            <div className="mx-4 mb-4 flex items-center justify-between gap-5 rounded-lg bg-gray-dark px-2 py-1">
                <div className="flex items-center gap-2">
                    <img src={add} className="h-7 w-7" />
                    <TextareaInput
                        placeholder="Message"
                        size="min-h-7 w-full sm:max-w-[524px]"
                        resizeLimit={height > 300 ? height - 200 : height}
                        padding="py-2"
                        resize="none"
                        bgColor="bg-gray-dark"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        // onPaste={(e) => handleThreadInputOnPaste(e)}
                        // onDrop={(e) => handleImageOnDrop(e)}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img src={gif} className="h-7 w-7" />
                    <img src={smileEmoji} className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
}

export default GameThreadsChannel;
