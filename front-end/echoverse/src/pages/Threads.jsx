import { threads } from "../features/Threads/data/threads";

import ThreadInputField from "../features/Threads/components/ThreadInput";
import ThreadsList from "../features/Threads/components/ThreadsList";

function Threads() {
    return (
        <>
            <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night px-2 sm:px-0 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
                <div className="mx-auto w-full max-w-screen-sm pb-2 pt-4">
                    <ThreadInputField
                        inputPlaceholder="Share your thoughts..."
                        btnText="Post"
                    />
                    <ThreadsList threads={threads} />
                </div>
            </div>
        </>
    );
}

export default Threads;
