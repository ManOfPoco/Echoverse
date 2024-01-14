import ThreadInteractButton from "./ThreadInteractButton";

import chatBubblesGray from "../../../assets/svg/chatBubblesGray.svg";
import repostRound from "../../../assets/svg/repostRound.svg";
import heart from "../../../assets/svg/heart.svg";
import heartFilled from "../../../assets/svg/heartFilled.svg";
import viewTimes from "../../../assets/svg/viewTimes.svg";
import bookmark from "../../../assets/svg/bookmark.svg";

function ThreadInstanceInteractButtons({ thread }) {
    const { comments, sharedTimes, likes, isLiked, viewedTimes } = thread;

    return (
        <div className="flex flex-wrap justify-around gap-5 border-y border-gray-light/30 py-3 text-xsm text-gray-clear">
            <ThreadInteractButton img={chatBubblesGray} value={comments} />
            <ThreadInteractButton img={repostRound} value={sharedTimes} />
            <ThreadInteractButton
                className={isLiked ? "text-pink-600" : ""}
                img={isLiked ? heartFilled : heart}
                value={likes}
            />
            <ThreadInteractButton img={viewTimes} value={viewedTimes} />
            <ThreadInteractButton img={bookmark} />
        </div>
    );
}

export default ThreadInstanceInteractButtons;
