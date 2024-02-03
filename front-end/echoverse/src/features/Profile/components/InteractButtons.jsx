import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../../components/Button";

import MoreButtonDropdown from "./MoreButtonDropdown";

function InteractButtons({ isCurrentUser, data }) {
    const navigate = useNavigate();

    const { username } = data;
    const [isFollowing, setIsFollowing] = useState(false);

    function followUser() {
        setIsFollowing(true);
        toast.success(`You're now following ${username}`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    function unfollowUser() {
        setIsFollowing(false);
        toast.success(`You're no longer following ${username}`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <>
            <div className="flex items-center flex-wrap gap-4">
                {isCurrentUser ? (
                    <div className="flex items-center gap-3">
                        <Button
                            btnClass="secondary"
                            roundness="rounded-lg"
                            action={() => navigate("/account/edit")}
                        >
                            Edit Profile
                        </Button>
                    </div>
                ) : (
                    <>
                        {isFollowing ? (
                            <Button
                                btnClass="blue"
                                roundness="rounded-lg"
                                action={unfollowUser}
                            >
                                Follow
                            </Button>
                        ) : (
                            <Button
                                btnClass="secondary"
                                roundness="rounded-lg"
                                action={followUser}
                            >
                                Unfollow
                            </Button>
                        )}
                        <Button
                            btnClass="secondary"
                            roundness="rounded-lg"
                            action={() => navigate("message")}
                        >
                            Message
                        </Button>
                    </>
                )}
                <MoreButtonDropdown data={data} />
            </div>
        </>
    );
}

export default InteractButtons;
