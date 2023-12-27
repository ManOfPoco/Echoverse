import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

function Follower({ follows }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 pt-7">
            {follows.map((follow) => (
                <div className="flex gap-4" key={follow}>
                    <div className="cursor-pointer" onClick={() => navigate(`/${follow.username}`)}>
                        <Avatar img={follow.avatar} type="sm" />
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <div
                            className="flex h-10 cursor-pointer flex-col justify-between text-sm"
                            onClick={() => navigate(`/${follow.username}`)}
                        >
                            <h4 className="h-4 font-semibold">
                                {follow.username}
                            </h4>
                            <span className="h-4 text-gray-light">
                                {follow.name}
                            </span>
                        </div>
                        <Button
                            customClasses="w-[120px]"
                            btnClass={`${
                                follow.isfollowing
                                    ? "secondary"
                                    : "secondaryBlue"
                            }`}
                        >
                            {follow.isfollowing ? "Unfollow" : "Follow"}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Follower;
