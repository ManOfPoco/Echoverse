import { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import SearchForm from "../components/SearchForm";

import useGameThreads from "../features/GameThreads/hooks/useGameThreads";
import GameThreadFilters from "../features/GameThreads/components/GameThreadFilters";
import GameThreadsList from "../features/GameThreads/components/GameThreadsList";
import NewGameThread from "../features/GameThreads/components/NewGameThread";
import BreadCrumbNavBar from "../components/BreadCrumbNavBar";
import BreadCrumbNavBarElement from "../components/BreadCrumbNavBarElement";

import messageFilled from "../assets/svg/messageFilled.svg";
import chatBubbles from "../assets/svg/chatBubbles.svg";

import tags from "../assets/data/tags.json";
import gameThreads from "../assets/data/gameThreads.json";

function GameThreads() {
    const [isNewPost, setIsNewPost] = useState(false);
    const [state, dispatch] = useGameThreads(tags);
    const { game } = useParams();

    const { view } = state;

    return (
        <div className="max-w-full bg-black-night h-[calc(100dvh-72px)] lg:h-[calc(100dvh-80px)] xl:h-[calc(100dvh-126px)]">
            <div className="w-full max-w-[1440px] lg:mx-auto">
                <div className="flex items-center gap-3 truncate border-b border-black-dark px-2 shadow-lg sm:px-3 md:px-5">
                    <BreadCrumbNavBar img={chatBubbles}>
                        <BreadCrumbNavBarElement to="/games" title="Games" />
                        <BreadCrumbNavBarElement
                            to={`/games/game-threads/${game}`}
                            title={game}
                        />
                    </BreadCrumbNavBar>
                </div>
            </div>
            <div className="h-[calc(100dvh-113px)] w-full max-w-[1440px] overflow-y-auto px-2 pt-2 sm:px-3 sm:pt-3 md:h-[calc(100dvh-121px)] md:px-5 md:pt-5 lg:mx-auto lg:h-[calc(100dvh-129px)] xl:h-[calc(100dvh-175px)]">
                {isNewPost ? (
                    <NewGameThread setIsNewPost={setIsNewPost} />
                ) : (
                    <SearchForm type="full" roundness="rounded-lg">
                        <Button
                            btnClass="blue"
                            roundness="rounded-xls"
                            size="min-w-fit px-3 sm:px-4 py-2 lg:py-2.5"
                            customClasses="sm:my-0.5"
                            action={() => setIsNewPost(true)}
                        >
                            <div className="flex items-center justify-center gap-1.5">
                                <img
                                    draggable={false}
                                    src={messageFilled}
                                    className="h-4 w-4"
                                />
                                <span>New Thread</span>
                            </div>
                        </Button>
                    </SearchForm>
                )}

                <div className="mt-6">
                    <GameThreadFilters state={state} dispatch={dispatch} />
                    <GameThreadsList
                        gameThreads={gameThreads}
                        game={game}
                        view={view}
                    />
                </div>
            </div>
        </div>
    );
}

export default GameThreads;
