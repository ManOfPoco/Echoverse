import { useNavigate } from "react-router-dom";

import SpecificThreadBody from "../features/SpecificThread/components/SpecificThreadBody";
import ThreadInstanceInteractButtons from "../features/Threads/components/ThreadInstanceInteractButtons";
import ThreadInputField from "../features/Threads/components/ThreadInput";
import ThreadInstance from "../features/Threads/components/ThreadInstance";

import chevronLeft from "../assets/svg/chevronLeft.svg";

import { thread } from "../features/Threads/data/threads";

function SpecificThread() {
    const { replies } = thread;
    const navigate = useNavigate();

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
                    <div className="flex flex-col gap-2">
                        <SpecificThreadBody thread={thread} />

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

export default SpecificThread;
