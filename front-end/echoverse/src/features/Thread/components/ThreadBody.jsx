import { Link } from "react-router-dom";

import Avatar from "../../../components/Avatar";
import ThreadImages from "../../Threads/components/ThreadImages";

import more from "../../../assets/svg/more.svg";

function ThreadBody({ thread }) {
    const { avatar, username, message, images, postedAgo } = thread;
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

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-clear">
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
            </div>

            <ThreadImages isFullStretch={true} threadImages={images} />
        </div>
    );
}

export default ThreadBody;
