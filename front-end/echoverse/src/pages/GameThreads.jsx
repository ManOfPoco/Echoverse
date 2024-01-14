import { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import SearchForm from "../components/SearchForm";

import useGameThreads from "../features/GameThreads/hooks/useGameThreads";
import GameThreadFilters from "../features/GameThreads/components/GameThreadFilters";
import GameThreadsList from "../features/GameThreads/components/GameThreadsList";
import NewGameThread from "../features/GameThreads/components/NewGameThread";
import BreadCrumbNavBar from "../features/GameThreads/components/BreadCrumbNavBar";
import BreadCrumbNavBarElement from "../features/GameThreads/components/BreadCrumbNavBarElement";

import messageFilled from "../assets/svg/messageFilled.svg";
import chatBubbles from "../assets/svg/chatBubbles.svg";

const gameThreads = [
    {
        id: 1,
        title: "Game Title 1",
        description:
            "Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1iption for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1",
        username: "User123",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        lastMessageUsername: "AnotherUser456",
        categories: ["Adventure", "Action", "RPG"],
        postedAgo: "5 hours ago",
        messagesQuantity: 10,
    },
    {
        id: 2,
        title: "Game Title 2",
        description: "Description for Game Title 2",
        username: "Gamer456",
        lastMessage:
            "Vestibulum in tellus eu arcu accumsan auctor vitae sed nibh.",
        lastMessageUsername: "RandomUser789",
        categories: [
            "Strategy",
            "Simulation",
            "Indie",
            "Adventure",
            "Action",
            "RPG",
            "Puzzle",
            "Casual",
            "Mobile",
        ],
        postedAgo: "2 hours ago",
        messagesQuantity: 2,
    },
    {
        id: 3,
        title: "Game Title 3",
        description: "Description for Game Title 3",
        username: "PlayGameNow",
        lastMessage:
            "Curabitur tristique urna et cursus cursus. Sed sagittis nisi eget.",
        lastMessageUsername: "PlayerX",
        categories: ["FPS", "Multiplayer", "Online"],
        postedAgo: "8 hours ago",
        messagesQuantity: 10,
    },
    {
        id: 4,
        title: "Game Title 4",
        description: "Description for Game Title 4",
        username: "GameMaster",
        lastMessage:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
        lastMessageUsername: "MasterGamer",
        categories: ["Puzzle", "Casual", "Mobile"],
        postedAgo: "3 hours ago",
        messagesQuantity: 33,
    },
    {
        id: 5,
        title: "Game Title 5",
        description: "Description for Game Title 5",
        username: "GamingFanatic",
        lastMessage:
            "Maecenas sed ante nec augue commodo accumsan eu at ligula.",
        lastMessageUsername: "FanaticPlayer",
        categories: ["Sports", "Racing", "Arcade"],
        postedAgo: "1 hour ago",
        messagesQuantity: 52,
    },
    {
        id: 6,
        title: "Game Title 6",
        description: "Description for Game Title 6",
        username: "ArcadePlayer",
        lastMessage:
            "Vivamus vel turpis vel quam tempus efficitur ut a ligula.",
        lastMessageUsername: "ArcadeLover",
        categories: ["Casual", "Indie", "Singleplayer"],
        postedAgo: "7 hours ago",
        messagesQuantity: 10,
    },
    {
        id: 8,
        title: "Game Title 7",
        description: "Description for Game Title 7",
        username: "GameEnthusiast",
        lastMessage:
            "Integer ullamcorper quam eu elit lacinia, eu feugiat ligula tempus.",
        lastMessageUsername: "EnthusiasticGamer",
        categories: ["Simulation", "Strategy", "Tycoon"],
        postedAgo: "4 hours ago",
        messagesQuantity: 61,
    },
    {
        id: 9,
        title: "Game Title 8",
        description: "Description for Game Title 8",
        username: "OnlineGamer",
        lastMessage:
            "Suspendisse potenti. Nullam et justo et felis bibendum laoreet nec.",
        lastMessageUsername: "GamerOnline",
        categories: ["MMORPG", "Fantasy", "Adventure"],
        postedAgo: "6 hours ago",
        messagesQuantity: 21,
    },
    {
        id: 10,
        title: "Game Title 9",
        description: "Description for Game Title 9",
        username: "IndieDev",
        lastMessage:
            "Nam consectetur nisi sit amet dictum elementum. Donec id convallis.",
        lastMessageUsername: "DevGamer",
        categories: ["Indie", "Adventure", "Pixel Art"],
        postedAgo: "9 hours ago",
        messagesQuantity: 444,
    },
    {
        id: 11,
        title: "Game Title 10",
        description: "Description for Game Title 10",
        username: "GameExplorer",
        lastMessage:
            "Fusce at justo vel leo blandit rhoncus. Quisque eu mauris.",
        lastMessageUsername: "ExplorerGamer",
        categories: ["Action", "Shooter", "Sci-Fi"],
        postedAgo: "1 hour ago",
        messagesQuantity: 10,
    },
];

const tags = [
    "Valheim",
    "Roblox",
    "Satisfactory",
    "Counter Strike 2",
    "No way home",
    "Dead Island 2",
    "Far Cry 5",
];

function GameThreads() {
    const [isNewPost, setIsNewPost] = useState(false);
    const [state, dispatch] = useGameThreads(tags);
    const { game } = useParams();

    const { view } = state;

    return (
        <div className="max-w-full bg-black-night">
            <div className="w-full max-w-[1440px] lg:mx-auto">
                <BreadCrumbNavBar img={chatBubbles}>
                    <BreadCrumbNavBarElement to="/games" title="Games" />
                    <BreadCrumbNavBarElement
                        to={`/games/game-threads/${game}`}
                        title={game}
                    />
                </BreadCrumbNavBar>
            </div>
            <div className="h-full max-h-[calc(100dvh-117px)] w-full max-w-[1440px] overflow-y-scroll px-2 pt-2 sm:px-3 sm:pt-3 md:max-h-[calc(100dvh-125px)] md:px-5 md:pt-5 lg:mx-auto lg:max-h-[calc(100dvh-133px)] xl:max-h-[calc(100dvh-179px)]">
                {isNewPost ? (
                    <NewGameThread setIsNewPost={setIsNewPost} />
                ) : (
                    <SearchForm type="full" roundness="rounded-lg">
                        <Button
                            btnClass="blue"
                            roundness="rounded-xls"
                            size="min-w-fit py-1 px-2 sm:px-4 sm:py-2 lg:py-2.5"
                            customClasses="sm:my-0.5"
                            action={() => setIsNewPost(true)}
                        >
                            <div className="flex items-center justify-center gap-1.5">
                                <img src={messageFilled} className="h-4 w-4" />
                                <span>New Thread</span>
                            </div>
                        </Button>
                    </SearchForm>
                )}

                <div className="mt-6">
                    <GameThreadFilters state={state} dispatch={dispatch} />
                    <GameThreadsList
                        view={view}
                        gameThreads={gameThreads}
                        game={game}
                    />
                </div>
            </div>
        </div>
    );
}

export default GameThreads;
