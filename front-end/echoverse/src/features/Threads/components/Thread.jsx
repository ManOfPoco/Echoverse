import { useNavigate } from "react-router-dom";

import Avatar from "../../../components/Avatar";
import ThreadImages from "./ThreadImages";

import useConvertSystem from "../hooks/useConvertSystem";

import more from "../../../assets/svg/more.svg";
import chatBubblesGray from "../../../assets/svg/chatBubblesGray.svg";
import repostRound from "../../../assets/svg/repostRound.svg";
import heart from "../../../assets/svg/heart.svg";
import heartFilled from "../../../assets/svg/heartFilled.svg";
import viewTimes from "../../../assets/svg/viewTimes.svg";
import bookmark from "../../../assets/svg/bookmark.svg";

function Thread({ thread }) {
    const navigate = useNavigate();
    const { convertToViewSystem } = useConvertSystem();

    const {
        avatar,
        username,
        message,
        images,
        postedAgo,
        comments,
        sharedTimes,
        likes,
        isLiked,
        viewedTimes,
    } = thread;

    return (
        <div className="flex w-full gap-3 py-4">
            <div
                className="min-w-fit cursor-pointer"
                onClick={() => navigate(`/${username}`)}
            >
                <Avatar img={avatar} type="sm" />
            </div>
            <div className="flex w-full max-w-[calc(100%-52px)] flex-col justify-between sm:max-w-[524px]">
                <div className="flex items-center justify-between">
                    <h4
                        className="cursor-pointer text-base font-semibold"
                        onClick={() => navigate(`/${username}`)}
                    >
                        {username}
                    </h4>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-clear text-sm">
                            {postedAgo}
                        </span>
                        <img src={more} className="h-6 w-6" />
                    </div>
                </div>

                <div
                    className={`whitespace-pre-wrap break-words font-roboto text-sm ${
                        images.length > 0 && "pb-2"
                    }`}
                >
                    {message}
                </div>

                <ThreadImages threadImages={images} />

                <div className="text-gray-clear text-xsm flex justify-around pt-3">
                    <div className="flex gap-1.5">
                        <img src={chatBubblesGray} className="h-4.5" />
                        <span>{convertToViewSystem(comments)}</span>
                    </div>
                    <div className="flex gap-1.5">
                        <img src={repostRound} className="h-4.5" />
                        <span>{convertToViewSystem(sharedTimes)}</span>
                    </div>
                    <div
                        className={`flex gap-1.5 ${
                            isLiked ? "text-pink-600" : ""
                        }`}
                    >
                        <img
                            src={isLiked ? heartFilled : heart}
                            className="h-4.5"
                        />
                        <span>{convertToViewSystem(likes)}</span>
                    </div>
                    <div className="flex gap-1.5">
                        <img src={viewTimes} className="h-4.5" />
                        <span>{convertToViewSystem(viewedTimes)}</span>
                    </div>
                    <div className="flex gap-1.5">
                        <img src={bookmark} className="h-4.5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thread;
