import ThreadsList from "../features/Threads/components/ThreadsList";

import person from "../assets/img/person.jpg";

import satisfactory from "../assets/img/satisfactory.png";
import arcadeGamingRoom from "../assets/img/arcadeGamingRoom.png";
import lethalCompany from "../assets/img/lethalCompany.png";
import cs2 from "../assets/img/cs2.png";

const threads = [
    {
        id: 1,
        avatar: person,
        username: "ManOfPoco",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
        images: [satisfactory, person, arcadeGamingRoom, lethalCompany, cs2],
        postedAgo: "17h",
        comments: 500,
        sharedTimes: 22313,
        likes: 4214,
        isLiked: false,
        viewedTimes: 213103232,
    },
    {
        id: 2,
        avatar: person,
        username: "ManOfPoco",
        message: `The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\nThe longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is me as silicosis.`,
        images: [arcadeGamingRoom, satisfactory, person, lethalCompany],
        postedAgo: "17h",
        comments: 500,
        sharedTimes: 213,
        likes: 414,
        isLiked: true,
        viewedTimes: 23232,
    },
    {
        id: 3,
        avatar: person,
        username: "ManOfPoco",
        message: `Lorem ipsum dolor \nsit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
        images: [
            lethalCompany,
            satisfactory,
            arcadeGamingRoom,
            lethalCompany,
            cs2,
            arcadeGamingRoom,
        ],
        postedAgo: "17h",
        comments: 20,
        sharedTimes: 213,
        likes: 4,
        isLiked: true,
        viewedTimes: 232,
    },
];

function UserSavedThreads() {
    return (
        <div className="mx-auto w-full max-w-screen-sm pb-2">
            <ThreadsList threads={threads} />;
        </div>
    );
}

export default UserSavedThreads;
