import { useNavigate } from "react-router-dom";

import Avatar from "../../../components/Avatar";

function Thread({ thread }) {
    const navigate = useNavigate();
    const { username, avatar } = thread;

    return (
        <div className="flex w-full gap-3 py-4">
            <div
                className="min-w-fit cursor-pointer"
                onClick={() => navigate(`/${username}`)}
            >
                <Avatar img={avatar} type="sm" />
            </div>
            <div className="flex w-full max-w-[calc(100%-52px)] flex-col justify-between sm:max-w-[524px]">
                <h4
                    className="text-md cursor-pointer font-semibold"
                    onClick={() => navigate(`/${username}`)}
                >
                    {thread.username}
                </h4>
                <div
                    className="w-full break-words"
                    dangerouslySetInnerHTML={{
                        __html: thread.threadMessage,
                    }}
                />
            </div>
        </div>
    );
}

export default Thread;
