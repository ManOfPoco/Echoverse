import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Avatar from "../components/Avatar";

import InteractButtons from "../features/Profile/components/InteractButtons";
import UserData from "../features/Profile/components/UserData";
import GamingCalendar from "../features/Profile/components/GamingCalendar";
import FollowModal from "../features/Profile/components/FollowModal";
import UserStatistics from "../features/Profile/components/UserStatistics";

import person from "../assets/img/person.jpg";
import cs2 from "../assets/img/cs2.png";
import Menu from "../components/Menu";
import MenuNavLink from "../components/MenuNavLink";

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
            img: cs2,
            platforms: ["PC", "Xbox", "Switch"],
            steamLink:
                "https://store.steampowered.com/app/730/CounterStrike_2/",
        },
        {
            title: "Detroit: Become Human",
            img: "detroitBecomeHuman",
            platforms: ["PC", "PS", "Xbox"],
            steamLink:
                "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
        },
        {
            title: "Satisfactory",
            img: "satisfactory",
            platforms: ["PC"],
            steamLink:
                "https://store.steampowered.com/app/526870/Satisfactory/",
        },
        {
            title: "Lethal Company",
            img: "lethalCompany",
            platforms: ["PC", "PS", "Xbox"],
            steamLink: "https://lethalcompany.com/",
        },
        {
            title: "Valorant",
            img: "valorant",
            platforms: ["PC"],
            steamLink: "https://playvalorant.com/",
        },
    ],
};
const followers = [
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: false,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
];
const following = [
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
        isfollowing: true,
    },
];
const calendarData = {
    Monday: [
        {
            id: 1,
            dayOfTheWeek: "Monday",
            time: "Morning",
            status: true,
            notes: "Cool note",
        },
        {
            id: 2,
            dayOfTheWeek: "Monday",
            time: "Afternoon",
            status: false,
            notes: "",
        },
        {
            id: 3,
            dayOfTheWeek: "Monday",
            time: "Evening",
            status: false,
            notes: "",
        },
    ],
    Tuesday: [
        {
            id: 4,
            dayOfTheWeek: "Tuesday",
            time: "Morning",
            status: false,
            notes: "",
        },
        {
            id: 5,
            dayOfTheWeek: "Tuesday",
            time: "Afternoon",
            status: false,
            notes: "",
        },
        {
            id: 6,
            dayOfTheWeek: "Tuesday",
            time: "Evening",
            status: false,
            notes: "",
        },
    ],
    Wednesday: [
        {
            id: 7,
            dayOfTheWeek: "Wednesday",
            time: "Morning",
            status: true,
            notes: "Cool note",
        },
        {
            id: 8,
            dayOfTheWeek: "Wednesday",
            time: "Afternoon",
            status: false,
            notes: "",
        },
        {
            id: 9,
            dayOfTheWeek: "Wednesday",
            time: "Evening",
            status: true,
            notes: "Cool note",
        },
    ],
    Thursday: [
        {
            id: 10,
            dayOfTheWeek: "Thursday",
            time: "Morning",
            status: false,
            notes: "",
        },
        {
            id: 11,
            dayOfTheWeek: "Thursday",
            time: "Afternoon",
            status: false,
            notes: "",
        },
        {
            id: 12,
            dayOfTheWeek: "Thursday",
            time: "Evening",
            status: false,
            notes: "",
        },
    ],
    Friday: [
        {
            id: 13,
            dayOfTheWeek: "Friday",
            time: "Morning",
            status: true,
            notes: "Cool note",
        },
        {
            id: 14,
            dayOfTheWeek: "Friday",
            time: "Afternoon",
            status: true,
            notes: "Cool note",
        },
        {
            id: 15,
            dayOfTheWeek: "Friday",
            time: "Evening",
            status: false,
            notes: "",
        },
    ],
    Saturday: [
        {
            id: 16,
            dayOfTheWeek: "Saturday",
            time: "Morning",
            status: true,
            notes: "Cool note",
        },
        {
            id: 17,
            dayOfTheWeek: "Saturday",
            time: "Afternoon",
            status: false,
            notes: "",
        },
        {
            id: 18,
            dayOfTheWeek: "Saturday",
            time: "Evening",
            status: true,
            notes: "Cool note",
        },
    ],
    Sunday: [
        {
            id: 19,
            dayOfTheWeek: "Sunday",
            time: "Morning",
            status: false,
            notes: "",
        },
        {
            id: 20,
            dayOfTheWeek: "Sunday",
            time: "Afternoon",
            status: false,
            notes: "",
        },
        {
            id: 21,
            dayOfTheWeek: "Sunday",
            time: "Evening",
            status: true,
            notes: "Cool note",
        },
    ],
};

function Profile() {
    const isCurrentUser = true;

    const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false);
    const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
    const { username } = data;

    return (
        <>
            <Toaster />
            <FollowModal
                isOpen={isFollowersModalOpen}
                onClose={() => setIsFollowersModalOpen(false)}
                title="Followers"
                follows={followers}
            />
            <FollowModal
                isOpen={isFollowingModalOpen}
                onClose={() => setIsFollowingModalOpen(false)}
                title="Following"
                follows={following}
            />

            <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
                <div className="w-full max-w-[1080px] lg:mx-auto">
                    <div className="flex h-full w-full border-white px-5 pt-5 md:border-b md:pb-5 lg:px-0">
                        <div className="flex w-fit px-2 md:hidden">
                            <Avatar img={person} type="lg" />
                        </div>
                        <div className="hidden w-fit pe-5 md:flex">
                            <Avatar img={person} type="lgx" />
                        </div>
                        <div className="flex w-full max-w-[calc(100%-140px)] flex-col gap-4 text-sm md:max-w-[calc(100%-200px)] lg:md:max-w-[calc(100%-180px)]">
                            <div className="flex w-full flex-wrap items-center justify-between gap-5">
                                <h2 className="text-xl">{data.username}</h2>
                                <InteractButtons
                                    isCurrentUser={isCurrentUser}
                                />
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="hidden max-w-md flex-col gap-4 md:flex">
                                    <UserData
                                        firstName={data.firstName}
                                        description={data.description}
                                        region={data.region}
                                        languages={data.languages}
                                        platforms={data.platforms}
                                    >
                                        <UserStatistics
                                            gamesQuantity={data.gamesQuantity}
                                            followers={data.followers}
                                            following={data.following}
                                            setIsFollowersModalOpen={
                                                setIsFollowersModalOpen
                                            }
                                            setIsFollowingModalOpen={
                                                setIsFollowingModalOpen
                                            }
                                        />
                                    </UserData>
                                </div>
                                <div className="hidden pt-2 md:flex md:flex-col lg:pt-0">
                                    <GamingCalendar
                                        isCurrentUser={isCurrentUser}
                                        data={calendarData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-b border-white p-5 md:hidden">
                        <UserData
                            gamesQuantity={data.gamesQuantity}
                            followers={data.followers}
                            following={data.following}
                            firstName={data.firstName}
                            description={data.description}
                            region={data.region}
                            languages={data.languages}
                            platforms={data.platforms}
                        >
                            <UserStatistics
                                gamesQuantity={data.gamesQuantity}
                                followers={data.followers}
                                following={data.following}
                                setIsFollowersModalOpen={
                                    setIsFollowersModalOpen
                                }
                                setIsFollowingModalOpen={
                                    setIsFollowingModalOpen
                                }
                            />
                        </UserData>
                        <GamingCalendar
                            isCurrentUser={isCurrentUser}
                            data={calendarData}
                        />
                    </div>
                    <>
                        <Menu>
                            <MenuNavLink
                                link={`/${username}`}
                                end={true}
                                title="Games"
                            />
                            <MenuNavLink
                                link={`/${username}/threads`}
                                end={false}
                                title="Threads"
                            />
                            {isCurrentUser && (
                                <MenuNavLink
                                    link={`/${username}/saved`}
                                    end={false}
                                    title="Saved"
                                />
                            )}
                        </Menu>
                        <Outlet />
                    </>
                </div>
            </div>
        </>
    );
}

export default Profile;
