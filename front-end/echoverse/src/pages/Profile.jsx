import { useNavigate } from "react-router-dom";

import Avatar from "../components/Avatar";

import InteractButtons from "../features/Profile/components/InteractButtons";
import UserData from "../features/Profile/components/UserData";

import profile from "../assets/img/profile.jpg";
import GamingCalendar from "../features/Profile/components/GamingCalendar";
import { useState } from "react";

function Profile() {
    const navigate = useNavigate();
    const [isCalendarOpen, setIsCalendarOpen] = useState(true);

    const isCurrentUser = true;
    const data = {
        username: "ManOfPoco",
        gamesQuantity: 522,
        followers: 155,
        following: 13,
        firstName: "John Peterson",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        region: "Europe",
        languages: ["English"],
        platforms: ["PC", "Xbox"],
        games: [
            {
                title: "Counter Strike 2",
                img: "img",
                platforms: ["PC", "Xbox", "Switch"],
                steamLink:
                    "https://store.steampowered.com/app/730/CounterStrike_2/",
            },
        ],
    };

    return (
        <div className="bg-black-night h-[calc(100dvh-72px)] max-w-full lg:h-[calc(100dvh-80px)] xl:mt-5 xl:h-[calc(100dvh-146px)]">
            <div className="w-full max-w-[1080px] lg:mx-auto">
                <div className="flex h-fit w-full pt-5">
                    <div className="flex w-fit flex-col px-5 md:hidden">
                        <Avatar img={profile} type="lg" />
                    </div>
                    <div className="hidden w-fit px-5 md:flex md:flex-col">
                        <Avatar img={profile} type="lgx" />
                    </div>
                    <div className="flex w-full max-w-[calc(100%-120px)] flex-col gap-4 pe-5 text-sm md:max-w-[calc(100%-200px)]">
                        <div className="flex w-full flex-wrap items-center justify-between gap-5">
                            <h2 className="text-xl">{data.username}</h2>
                            <InteractButtons isCurrentUser={isCurrentUser} />
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="hidden max-w-md flex-col gap-4 md:flex">
                                <UserData
                                    gamesQuantity={data.gamesQuantity}
                                    followers={data.followers}
                                    following={data.following}
                                    firstName={data.firstName}
                                    description={data.description}
                                    region={data.region}
                                    languages={data.languages}
                                    platforms={data.platforms}
                                />
                            </div>
                            <div className="hidden pt-2 md:flex md:flex-col lg:pt-0">
                                <GamingCalendar
                                    isCurrentUser={isCurrentUser}
                                    isCalendarOpen={isCalendarOpen}
                                    setIsCalendarOpen={setIsCalendarOpen}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-5 md:hidden">
                    <UserData
                        gamesQuantity={data.gamesQuantity}
                        followers={data.followers}
                        following={data.following}
                        firstName={data.firstName}
                        description={data.description}
                        region={data.region}
                        languages={data.languages}
                        platforms={data.platforms}
                    />
                    <GamingCalendar
                        isCurrentUser={isCurrentUser}
                        isCalendarOpen={isCalendarOpen}
                        setIsCalendarOpen={setIsCalendarOpen}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
