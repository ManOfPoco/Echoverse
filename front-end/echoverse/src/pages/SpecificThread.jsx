import { useNavigate } from "react-router-dom";

import SpecificThreadBody from "../features/SpecificThread/components/SpecificThreadBody";
import ThreadInstanceInteractButtons from "../features/Threads/components/ThreadInstanceInteractButtons";
import ThreadInputField from "../features/Threads/components/ThreadInput";
import ThreadInstance from "../features/Threads/components/ThreadInstance";

import chevronLeft from "../assets/svg/chevronLeft.svg";

import { thread } from "../features/Threads/data/threads";
import { useState } from "react";
import HiddenThread from "../features/Threads/components/HiddenThread";
import MutedThread from "../features/Threads/components/MutedThread";

function SpecificThread() {
    const { username, replies, isBlocked: isUserBlocked } = thread;
    const navigate = useNavigate();

    const [isMuted, setIsMuted] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBlocked, setIsBlocked] = useState(isUserBlocked);

    return (
        <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night px-2 sm:px-0 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <div className="mx-auto w-full max-w-screen-sm">
                <div className="sticky top-[72px] z-40 flex items-center gap-2 bg-black-night py-3 lg:top-[80px] xl:top-[96px]">
                    <img
                        src={chevronLeft}
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => navigate(-1)}
                    />
                    <span className="text-xl font-semibold">Thread</span>
                </div>
                <div className="flex w-full max-w-screen-sm flex-col justify-between gap-5">
                    {!isMuted && !isHidden && (
                        <>
                            <div className="flex flex-col gap-2">
                                <SpecificThreadBody
                                    thread={thread}
                                    isBlocked={isBlocked}
                                    setIsBlocked={setIsBlocked}
                                    setIsMuted={setIsMuted}
                                    setIsHidden={setIsHidden}
                                />

                                <ThreadInstanceInteractButtons
                                    thread={thread}
                                />
                            </div>
                            <ThreadInputField
                                inputPlaceholder="Share your reply..."
                                btnText="Reply"
                            />
                        </>
                    )}

                    <HiddenThread
                        isHidden={isHidden}
                        setIsHidden={setIsHidden}
                    />
                    <MutedThread
                        username={username}
                        isMuted={isMuted}
                        setIsMuted={setIsMuted}
                    />

                    <div className="flex w-full flex-col divide-y divide-gray-light/30 border-t border-gray-light/30">
                        {replies.map((reply) => (
                            <ThreadInstance thread={reply} key={reply.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificThread;
