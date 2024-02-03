import { useLocation, useNavigate } from "react-router-dom";

import SpecificThreadBody from "../features/SpecificThread/components/SpecificThreadBody";
import ThreadInstanceInteractButtons from "../features/Threads/components/ThreadInstanceInteractButtons";
import ThreadInputField from "../features/Threads/components/ThreadInput";
import ThreadInstance from "../features/Threads/components/ThreadInstance";

import { thread } from "../features/Threads/data/threads";
import { useEffect, useRef, useState } from "react";
import HiddenThread from "../features/Threads/components/HiddenThread";
import MutedThread from "../features/Threads/components/MutedThread";
import ChevronLeft from "../svg/ChevronLeft";
import useWindowDimensions from "../hooks/useWindowDimensions";

function SpecificThread() {
    const navigate = useNavigate();
    const { hash } = useLocation();
    const { width } = useWindowDimensions();

    const { username, replies, isBlocked: isUserBlocked } = thread;

    const [isMuted, setIsMuted] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isBlocked, setIsBlocked] = useState(isUserBlocked);

    const repliesRef = useRef(null);

    useEffect(() => {
        if (hash) {
            const offset = width >= 1024 ? 132 : 124;
            window.scrollTo({
                behavior: "smooth",
                top:
                    repliesRef.current.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    offset,
            });
        }
    }, [hash, width]);

    return (
        <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night px-2 sm:px-0 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <div className="mx-auto w-full max-w-screen-sm">
                <div className="sticky top-[72px] z-40 flex items-center gap-2 bg-black-night py-3 lg:top-[80px] xl:top-[96px]">
                    <ChevronLeft
                        width={24}
                        height={24}
                        onClick={() => navigate(-1)}
                        stroke={"#645BF0"}
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

                    <div
                        className="flex w-full flex-col divide-y divide-gray-light/30 border-t border-gray-light/30"
                        ref={repliesRef}
                    >
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
