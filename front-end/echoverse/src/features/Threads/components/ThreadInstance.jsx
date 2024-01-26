import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

import ThreadInstanceInteractButtons from "./ThreadInstanceInteractButtons";
import ThreadInstanceBody from "./ThreadInstanceBody";
import ThreadMore from "./ThreadMore";
import MutedThread from "./MutedThread";
import HiddenThread from "./HiddenThread";

function ThreadInstance({ thread }) {
    const { avatar, username, postedAgo, isBlocked: isUserBlocked } = thread;

    const [isMuted, setIsMuted] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBlocked, setIsBlocked] = useState(isUserBlocked);

    return (
        <>
            {!isMuted && !isHidden && (
                <div className="relative w-full gap-3 py-4">
                    <Link
                        to={`/${thread.username}/threads/${thread.id}`}
                        className="absolute inset-0"
                    />
                    <div className="flex gap-3">
                        <div className="pointer-events-none relative min-w-fit">
                            <Link
                                to={`/${username}`}
                                key={thread.id}
                                className="pointer-events-auto"
                            >
                                <Avatar img={avatar} type="sm" />
                            </Link>
                        </div>

                        <div className="flex w-full max-w-[calc(100%-52px)] flex-col justify-between gap-2">
                            <div>
                                <div className="pointer-events-none relative flex items-center justify-between">
                                    <Link
                                        to={`/${username}`}
                                        key={thread.id}
                                        className="pointer-events-auto"
                                    >
                                        <h4 className="text-base font-semibold hover:underline">
                                            {username}
                                        </h4>
                                    </Link>

                                    <div className="pointer-events-none relative flex items-center gap-2">
                                        <span className="text-sm text-gray-clear">
                                            {postedAgo}
                                        </span>
                                        <ThreadMore
                                            username={username}
                                            isBlocked={isBlocked}
                                            setIsBlocked={setIsBlocked}
                                            setIsMuted={setIsMuted}
                                            setIsHidden={setIsHidden}
                                        />
                                    </div>
                                </div>

                                <ThreadInstanceBody thread={thread} />
                            </div>

                            <ThreadInstanceInteractButtons thread={thread} />
                        </div>
                    </div>
                </div>
            )}

            <HiddenThread isHidden={isHidden} setIsHidden={setIsHidden} />

            <MutedThread
                username={username}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
            />
        </>
    );
}

export default ThreadInstance;
