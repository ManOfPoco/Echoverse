import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

import settingsCog from "../../../assets/svg/settingsCog.svg";

function InteractButtons({ isCurrentUser }) {
    const navigate = useNavigate();

    return (
        <div className="flex gap-4">
            {isCurrentUser ? (
                <>
                    <Button
                        btnClass="secondary"
                        roundness="rounded-lg"
                        action={() => navigate("edit")}
                    >
                        Edit Profile
                    </Button>
                    <Button>
                        <img
                            src={settingsCog}
                            alt="settings"
                            className="h-8 w-8"
                        />
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        btnClass="secondary"
                        roundness="rounded-lg"
                        action={() => console.log("follow")}
                    >
                        Follow
                    </Button>
                    <Button
                        btnClass="secondary"
                        roundness="rounded-lg"
                        action={() => navigate("message")}
                    >
                        Message
                    </Button>
                </>
            )}
        </div>
    );
}

export default InteractButtons;
