import { useParams } from "react-router-dom";

import Avatar from "../components/Avatar";

import BreadCrumbNavBar from "../features/GameThreads/components/BreadCrumbNavBar";
import BreadCrumbNavBarElement from "../features/GameThreads/components/BreadCrumbNavBarElement";
import GameThreadTags from "../features/GameThreadChannel/components/GameThreadTags";
import Messages from "../features/GameThreadChannel/components/Messages";

import person from "../assets/img/person.jpg";
import chatBubble from "../assets/svg/chatBubble.svg";
import add from "../assets/svg/add.svg";
import Message from "../features/GameThreadChannel/components/Message";
import InputField from "../components/InputField";
import { useState } from "react";

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
        senderId: 1,
        username: "ManOfPoco",
        img: person,
        time: "2024-01-15T10:00:00Z",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam ipsum necessitatibus id architecto fugiat minus, commodi tenetur, saepe distinctio qui et reiciendis numquam quidem sapiente molestiae libero error perferendis.`,
    },
    messages: [
        {
            id: 1,
            senderId: 1,
            username: "ManOfPoco",
            img: person,
            time: "2024-01-15T10:00:00Z",
            message:
                "Welcome to the Game Discussion Thread! What's your favorite game?",
        },
        {
            id: 2,
            senderId: 2,
            username: "ManOfPoco",
            img: person,
            time: "2024-01-15T10:15:00Z",
            message:
                "I love playing action RPGs. Currently hooked on 'Fantasy Quest.'",
        },
        {
            id: 3,
            senderId: 2,
            username: "ManOfPoco",
            img: person,
            time: "2024-01-15T10:18:00Z",
            message:
                "I love playing action RPGs. Currently hooked on 'Fantasy Quest.'",
        },
        {
            id: 4,
            senderId: 3,
            username: "ManOfPoco",
            img: person,
            time: "2024-01-14T10:30:00Z",
            message:
                "Adventure games are my favorite! Any recommendations for a good one?",
        },
        {
            id: 5,
            senderId: 1,
            username: "ManOfPoco",
            img: person,
            time: "2024-01-15T11:00:00Z",
            message:
                "Glad to have you all here! 'Galactic Explorer' is an excellent adventure game.",
        },
        {
            id: 6,
            senderId: 2,
            username: "ManOfPoco",
            img: person,
            time: "2024-01-15T11:30:00Z",
            message:
                "Thanks for the recommendation, GameMaster! I'll check it out.",
        },
    ],
};

function GameThreadsChannel() {
    const [message, setMessage] = useState("");
    const { game, threadId } = useParams();
    const {
        title,
        description,
        gameTags,
        creationTime,
        createdBy,
        initialMessage,
        messages,
    } = thread;

    return (
        <div className="w-full bg-gray-charcoal">
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
            <div className="flex h-[calc(100dvh-53px)] w-full flex-col-reverse overflow-y-auto">
                <div className="flex flex-col gap-5">
                    <div className="pe-8 ps-4">
                        <div>
                            <div className="flex flex-col gap-2.5 border-b border-gray-light/40 pb-7">
                                <h4 className="text-3xl font-semibold">
                                    {title}
                                </h4>
                                <GameThreadTags tags={gameTags} />
                            </div>

                            <div className="border-b border-gray-light/40 pb-5">
                                <Message messageObj={initialMessage} />
                            </div>
                        </div>
                        <Messages messages={messages} />
                    </div>
                    <div className="mx-4 mb-6 flex items-center rounded-lg bg-gray-dark px-2 py-2 gap-2">
                        <img src={add} className="h-7 w-7" />
                        <textarea
                            placeholder="Message"
                            className="w-full h-6 border-0 bg-gray-dark font-roboto outline-none"
                            value={message}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameThreadsChannel;
