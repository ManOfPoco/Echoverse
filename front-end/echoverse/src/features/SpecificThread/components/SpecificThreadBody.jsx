import { Link } from "react-router-dom";

import Avatar from "../../../components/Avatar";
import ThreadFiles from "../../Threads/components/ThreadFiles";

import ThreadMore from "../../Threads/components/ThreadMore";

function SpecificThreadBody({
    thread,
    isBlocked,
    setIsBlocked,
    setIsMuted,
    setIsHidden,
}) {
    const { avatar, username, message, files, postedAgo } = thread;
    return (
        <div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <Link
                        to={`/${username}`}
                        className="flex items-center gap-3"
                    >
                        <div className="min-w-fit cursor-pointer">
                            <Avatar img={avatar} type="sm" />
                        </div>
                        <h4 className="cursor-pointer text-base font-semibold hover:underline">
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

                <div
                    className={`whitespace-pre-wrap break-words font-roboto text-sm ${
                        files.length > 0 && "pb-2"
                    }`}
                >
                    {message}
                </div>
            </div>

            <ThreadFiles stretchType="stretch" threadFiles={files} />
        </div>
    );
}

export default SpecificThreadBody;
