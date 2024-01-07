import PeopleSwiperCards from "../features/People/components/PeopleSwiperCards";

import person from "../assets/img/person.jpg";

const data = {
    id: 0,
    personImg: person,
    commonTime: 50,
    similarGames: 15,
    username: "ManOfPoco",
    languages: ["France", "English", "German", "Chinese"],
    region: "Europe",
    platforms: ["PC", "Xbox", "PS"],
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    games: [
        {
            title: "Counter Strike 2",
            platforms: ["PC", "Xbox", "Switch"],
        },
        {
            title: "Detroit: Become Human",
            platforms: ["PC", "PS", "Xbox"],
        },
        {
            title: "Satisfactory",
            platforms: ["PC"],
        },
        {
            title: "Lethal Company",
            platforms: ["PC", "PS", "Xbox"],
        },
        {
            title: "Valorant",
            platforms: ["PC"],
        },
        {
            title: "Gas Station Simulator",
            platforms: ["PC"],
        },
    ],
};

function People() {
    const people = [
        data,
        { ...data, id: 1, username: "ManOfPoco1" },
        { ...data, id: 2 },
        { ...data, id: 3 },
        { ...data, id: 4 },
    ];

    return (
        <div className="my-5 flex h-full min-h-[calc(100dvh-112px)] w-full items-center justify-center lg:min-h-[calc(100dvh-120px)] xl:min-h-[calc(100dvh-166px)]">
            <div className="w-[600px]">
                <PeopleSwiperCards people={people} />
            </div>
        </div>
    );
}

export default People;
