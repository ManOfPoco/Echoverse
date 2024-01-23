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
import BreadCrumbNavBarContainer from "../components/BreadCrumbNavBarContainer";

function GameThreads() {
    const [isNewPost, setIsNewPost] = useState(false);
    const [state, dispatch] = useGameThreads(tags);
    const { game } = useParams();

    const { view } = state;

    return (
        <div className="max-w-full bg-black-night">
            <div className="w-full max-w-[1440px] lg:mx-auto">
                <BreadCrumbNavBarContainer>
                    <BreadCrumbNavBar img={chatBubbles}>
                        <BreadCrumbNavBarElement to="/games" title="Games" />
                        <BreadCrumbNavBarElement
                            to={`/games/game-threads/${game}`}
                            title={game}
                        />
                    </BreadCrumbNavBar>
                </BreadCrumbNavBarContainer>
            </div>
            <div className="h-full max-h-[calc(100dvh-117px)] w-full max-w-[1440px] overflow-y-scroll px-2 pt-2 sm:px-3 sm:pt-3 md:max-h-[calc(100dvh-125px)] md:px-5 md:pt-5 lg:mx-auto lg:max-h-[calc(100dvh-133px)] xl:max-h-[calc(100dvh-179px)]">
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
                                <img src={messageFilled} className="h-4 w-4" />
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
