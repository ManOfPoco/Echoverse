import ThreadsList from "../features/Threads/components/ThreadsList";

import { threads } from "../features/Threads/data/threads";

function UserThreads() {
    return (
        <div className="mx-auto w-full max-w-screen-sm pb-2">
            <ThreadsList threads={threads} />
        </div>
    );
}

export default UserThreads;
