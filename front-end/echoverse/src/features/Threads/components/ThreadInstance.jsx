import { Link, useNavigate } from "react-router-dom";

import Avatar from "../../../components/Avatar";

import ThreadInstanceInteractButtons from "./ThreadInstanceInteractButtons";
import ThreadInstanceBody from "./ThreadInstanceBody";

import more from "../../../assets/svg/more.svg";

function ThreadInstance({ thread }) {
    const navigate = useNavigate();
    const { avatar, username, postedAgo } = thread;

    return (
        <div className="flex w-full gap-3 py-4">
            <div className="min-w-fit cursor-pointer">
                <Link to={`/${username}`} key={thread.id}>
                    <Avatar img={avatar} type="sm" />
                </Link>
            </div>

            <div className="flex w-full max-w-[calc(100%-52px)] flex-col justify-between gap-2">
                <div
                    className="cursor-pointer"
                    onClick={() =>
                        navigate(`/${thread.username}/threads/${thread.id}`)
                    }
                >
                    <div className="flex items-center justify-between">
                        <Link to={`/${username}`} key={thread.id}>
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

                    <ThreadInstanceBody thread={thread} />
                </div>

                <ThreadInstanceInteractButtons thread={thread} />
            </div>
        </div>
    );
}

export default ThreadInstance;
