import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import Follower from "./Follower";

function Followers({ follows }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 mt-7 h-[330px] overflow-auto">
            {follows.map((follower) => (
                <div className="flex gap-4" key={follower}>
                    <div
                        className="cursor-pointer"
                        onClick={() => navigate(`/${follower.username}`)}
                    >
                        <Avatar img={follower.avatar} type="sm" />
                    </div>
                    <div className="flex w-[calc(100%-56px)] items-center justify-between">
                        <Follower follower={follower} />
                        <Button
                            roundness='rounded-lg'
                            size='sm:w-[120px] w-24 h-9'
                            btnClass={`${
                                follower.isfollowing
                                    ? "secondary"
                                    : "blue"
                            }`}
                        >
                            {follower.isfollowing ? "Unfollow" : "Follow"}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Followers;
