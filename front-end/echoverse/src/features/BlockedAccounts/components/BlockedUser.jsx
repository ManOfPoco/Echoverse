import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

function BlockedUser({ blockedUser }) {
    const navigate = useNavigate();

    return (
        <div className="flex gap-4" key={blockedUser}>
            <div
                className="cursor-pointer"
                onClick={() => navigate(`/${blockedUser.username}`)}
            >
                <Avatar img={blockedUser.avatar} type="sm" />
            </div>
            <div className="flex w-[calc(100%-56px)] items-center justify-between">
                <div
                    className="flex h-10 cursor-pointer flex-col justify-between text-sm"
                    onClick={() => navigate(`/${blockedUser.username}`)}
                >
                    <h4 className="h-4 font-semibold">
                        {blockedUser.username}
                    </h4>
                    <span className="h-4 text-gray-light">
                        {blockedUser.name}
                    </span>
                </div>
                <Button
                    roundness="rounded-lg"
                    size="sm:w-[120px] w-24 h-9"
                    btnClass="secondary"
                >
                    Unblock
                </Button>
            </div>
        </div>
    );
}

export default BlockedUser;
