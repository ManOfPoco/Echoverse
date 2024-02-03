import person from "../../../assets/img/person.jpg";

import satisfactory from "../../../assets/img/satisfactory.png";
import arcadeGamingRoom from "../../../assets/img/arcadeGamingRoom.png";
import lethalCompany from "../../../assets/img/lethalCompany.png";
import cs2 from "../../../assets/img/cs2.png";

import giphy from "../../../assets/img/giphy.gif";
import giphy1 from "../../../assets/img/giphy1.gif";
import shorts from "../../../assets/img/shorts.mp4";

export const threads = [
    {
        id: 1,
        avatar: person,
        username: "ManOfPoco",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
        files: [shorts, person, shorts, lethalCompany, cs2],
        postedAgo: "17h",
        isBlocked: false,
        comments: 500,
        sharedTimes: 22313,
        likes: 4214,
        isLiked: false,
        viewedTimes: 213103232,
        isOwner: false,
        isSaved: false,
    },
    {
        id: 2,
        avatar: person,
        username: "ManOfPoco",
        message: `The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\nThe longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is me as silicosis.`,
        files: [arcadeGamingRoom, giphy1, person, lethalCompany],
        postedAgo: "17h",
        isBlocked: true,
        comments: 500,
        sharedTimes: 213,
        likes: 414,
        isLiked: true,
        viewedTimes: 23232,
        isOwner: true,
        isSaved: true,
    },
    {
        id: 3,
        avatar: person,
        username: "ManOfPoco",
        message: `Lorem ipsum dolor \nsit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
        files: [
            lethalCompany,
            satisfactory,
            arcadeGamingRoom,
            lethalCompany,
            cs2,
            giphy,
        ],
        postedAgo: "17h",
        isBlocked: false,
        comments: 20,
        sharedTimes: 213,
        likes: 4,
        isLiked: true,
        viewedTimes: 232,
        isOwner: false,
        isSaved: true,
    },
];

export const thread = {
    id: 1,
    avatar: person,
    username: "ManOfPoco",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
    files: [satisfactory, shorts, person, giphy, cs2],
    postedAgo: "17h",
    isBlocked: true,
    comments: 500,
    sharedTimes: 22313,
    likes: 4214,
    isLiked: false,
    viewedTimes: 213103232,
    isOwner: false,
    isSaved: true,
    replies: [
        {
            id: 1,
            avatar: person,
            username: "ManOfPoco",
            message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
            files: [satisfactory, person, giphy1, lethalCompany, cs2],
            postedAgo: "17h",
            isBlocked: true,
            comments: 500,
            sharedTimes: 22313,
            likes: 4214,
            isLiked: false,
            viewedTimes: 213103232,
            isOwner: true,
            isSaved: false,
        },
        {
            id: 2,
            avatar: person,
            username: "ManOfPoco",
            message: `The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\nThe longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is me as silicosis.`,
            files: [shorts, satisfactory, person, lethalCompany],
            postedAgo: "17h",
            isBlocked: false,
            comments: 500,
            sharedTimes: 213,
            likes: 414,
            isLiked: true,
            viewedTimes: 23232,
            isOwner: false,
            isSaved: false,
        },
    ],
};
