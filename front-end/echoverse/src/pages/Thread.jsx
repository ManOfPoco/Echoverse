import { useNavigate } from "react-router-dom";

import ThreadBody from "../features/Thread/components/ThreadBody";
import ThreadInstanceInteractButtons from "../features/Threads/components/ThreadInstanceInteractButtons";
import ThreadInputField from "../features/Threads/components/ThreadInput";
import ThreadInstance from "../features/Threads/components/ThreadInstance";

import person from "../assets/img/person.jpg";
import satisfactory from "../assets/img/satisfactory.png";
import arcadeGamingRoom from "../assets/img/arcadeGamingRoom.png";
import lethalCompany from "../assets/img/lethalCompany.png";
import cs2 from "../assets/img/cs2.png";
import chevronLeft from "../assets/svg/chevronLeft.svg";

const thread = {
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
    replies: [
        {
            id: 1,
            avatar: person,
            username: "ManOfPoco",
            message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate laborum maiores, expedita ab earum cumque. Consectetur voluptatum deserunt suscipit \nin, nulla, quidem temporibus, enim ex impedit dolor ea pariatur?`,
            images: [
                satisfactory,
                person,
                arcadeGamingRoom,
                lethalCompany,
                cs2,
            ],
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
    ],
};

function Thread() {
    const { replies } = thread;
    const navigate = useNavigate();

    return (
        <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night px-2 sm:px-0 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <div className="mx-auto w-full max-w-screen-sm">
                <div className="sticky top-[72px] z-40 flex items-center gap-2 bg-black-night py-3 lg:top-[80px] xl:top-[126px]">
                    <img
                        src={chevronLeft}
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => navigate(-1)}
                    />
                    <span className="text-xl font-semibold">Thread</span>
                </div>
                <div className="flex w-full max-w-screen-sm flex-col justify-between gap-5">
                    <div className="flex flex-col gap-2">
                        <ThreadBody thread={thread} />

                        <ThreadInstanceInteractButtons thread={thread} />
                    </div>

                    <ThreadInputField
                        inputPlaceholder="Share your reply..."
                        btnText="Reply"
                    />
                    <div className="flex w-full flex-col divide-y divide-gray-light/30">
                        {replies.map((reply) => (
                            <ThreadInstance thread={reply} key={reply.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thread;
