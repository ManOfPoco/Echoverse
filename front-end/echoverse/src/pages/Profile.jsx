import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Avatar from "../components/Avatar";

import InteractButtons from "../features/Profile/components/InteractButtons";
import UserData from "../features/Profile/components/UserData";
import GamingCalendar from "../features/Profile/components/GamingCalendar";

import profile from "../assets/img/profile.jpg";
import cs2 from "../assets/img/cs2.png";

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

function Profile({ action }) {
    const navigate = useNavigate();
    const isCurrentUser = true;

    return (
        <>
            <Toaster />

            <div className="h-[calc(100%-72px)] max-w-full bg-black-night lg:h-[calc(100%-80px)] xl:mt-5 xl:h-[calc(100%-146px)]">
                <div className="w-full max-w-[1080px] divide-y divide-white lg:mx-auto">
                    <div>
                        <div className="flex h-fit w-full px-5 pt-5 md:pb-5 lg:px-0">
                            <div className="flex w-fit px-2 md:hidden">
                                <Avatar img={profile} type="lg" />
                            </div>
                            <div className="hidden w-fit pe-5 md:flex">
                                <Avatar img={profile} type="lgx" />
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
                                            data={calendarData}
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
                                data={calendarData}
                            />
                        </div>
                    </div>
                    <div>
                        <Outlet context={[data.username]} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
