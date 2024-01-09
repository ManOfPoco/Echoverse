import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css/bundle";

import PersonCard from "../features/PeopleForYou/components/PersonCard";

import person from "../assets/img/person.jpg";

const person1 = {
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
        {
            title: "Lego Fortnite",
            platforms: ["PC"],
        },
    ],
};
const person2 = {
    id: 1,
    personImg: person,
    commonTime: 50,
    similarGames: 15,
    username: "ManOfPoco1",
    languages: [
        "France",
        "English",
        "German",
        "Chinese",
        "France",
        "English",
        "German",
        "Chinese",
    ],
    region: "Europe",
    platforms: ["PC", "Xbox", "PS"],
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
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
const initialPeople = [
    person1,
    { ...person2, id: 1, username: "ManOfPoco1" },
    { ...person1, id: 2, username: "ManOfPoco2" },
    { ...person2, id: 3, username: "ManOfPoco3" },
    { ...person1, id: 4, username: "ManOfPoco4" },
];

function PeopleForYou() {
    const [people, setPeople] = useState(initialPeople);

    function handleAddNewSlides(index) {
        const totalSlides = people.length;
        if ((index / totalSlides) * 100 >= 80) {
            const newPeople = [
                {
                    ...person1,
                    id: totalSlides,
                    username: `ManOfPoco${totalSlides}`,
                },
                {
                    ...person2,
                    id: totalSlides + 1,
                    username: `ManOfPoco${totalSlides + 1}`,
                },
                {
                    ...person1,
                    id: totalSlides + 2,
                    username: `ManOfPoco${totalSlides + 2}`,
                },
                {
                    ...person2,
                    id: totalSlides + 3,
                    username: `ManOfPoco${totalSlides + 3}`,
                },
                {
                    ...person1,
                    id: totalSlides + 4,
                    username: `ManOfPoco${totalSlides + 4}`,
                },
            ];
            setPeople((currentPeople) => currentPeople.concat([...newPeople]));
        }
    }

    return (
        <div className="min-w-[320px] max-w-[600px]">
            <Swiper
                modules={[EffectCube]}
                effect="cube"
                cubeEffect={{
                    shadowOffset: 0,
                    shadow: false,
                }}
                grabCursor={true}
                onRealIndexChange={(swiper) =>
                    handleAddNewSlides(swiper.realIndex)
                }
            >
                {people.map((person) => (
                    <SwiperSlide key={person.id}>
                        <PersonCard person={person} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PeopleForYou;
