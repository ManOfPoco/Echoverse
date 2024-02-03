import ThreadInteractButton from "./ThreadInteractButton";

import chatBubblesGray from "../../../assets/svg/chatBubblesGray.svg";
import repostRound from "../../../assets/svg/repostRound.svg";
import viewTimes from "../../../assets/svg/viewTimes.svg";

import Heart from "../../../svg/Heart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Bookmark from "../../../svg/Bookmark";

function ThreadInstanceInteractButtons({
    thread,
    pointerEventsClass = "pointer-events-auto",
}) {
    const navigate = useNavigate();

    const { comments, sharedTimes, likes, isLiked, viewedTimes, isSaved } =
        thread;
    const [isThreadLiked, setIsThreadLiked] = useState(isLiked);
    const [isThreadSaved, setIsThreadSaved] = useState(isSaved);

    function handleThreadLike() {
        setIsThreadLiked((isLiked) => !isLiked);
    }

    function handleSaveThread() {
        setIsThreadSaved((isSaved) => !isSaved);

        if (!isThreadSaved) {
            toast.success(`Threads was saved to your profile`, {
                style: {
                    color: "white",
                    backgroundColor: "#262A2F",
                },
            });
        } else {
            toast.success(`Thread was removed from your profile`, {
                style: {
                    color: "white",
                    backgroundColor: "#262A2F",
                },
            });
        }
    }

    return (
        <div className="flex flex-wrap justify-around gap-5 border-y border-gray-light/30 py-3 text-xsm text-gray-clear">
            <ThreadInteractButton
                img={chatBubblesGray}
                value={comments}
                onClick={() =>
                    navigate(`/${thread.username}/threads/${thread.id}#replies`)
                }
                pointerEventsClass={pointerEventsClass}
            />
            <ThreadInteractButton
                img={repostRound}
                value={sharedTimes}
                pointerEventsClass={pointerEventsClass}
            />
            <ThreadInteractButton
                className={isThreadLiked ? "text-pink-600" : ""}
                imgComponent={
                    isThreadLiked ? (
                        <Heart
                            width={18}
                            height={18}
                            fill="fill-pink-600"
                            stroke="fill-pink-600"
                        />
                    ) : (
                        <Heart width={18} height={18} />
                    )
                }
                value={likes}
                onClick={handleThreadLike}
                pointerEventsClass={pointerEventsClass}
            />
            <ThreadInteractButton
                img={viewTimes}
                value={viewedTimes}
                isButton={false}
                pointerEventsClass={pointerEventsClass}
            />
            <ThreadInteractButton
                imgComponent={
                    isThreadSaved ? (
                        <Bookmark
                            width={18}
                            height={18}
                            fill="fill-platinum"
                            stroke="fill-platinum"
                        />
                    ) : (
                        <Bookmark width={18} height={18} />
                    )
                }
                pointerEventsClass={pointerEventsClass}
                onClick={handleSaveThread}
            />
        </div>
    );
}

export default ThreadInstanceInteractButtons;
