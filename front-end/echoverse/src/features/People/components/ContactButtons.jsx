import Button from "../../../components/Button";

import personBlackWhite from "../../../assets/svg/personBlackWhite.svg";
import message from "../../../assets/svg/message.svg";
import { useNavigate } from "react-router-dom";

function ContactButtons({ username }) {
    const navigate = useNavigate();

    return (
        <div className="mt-7 flex flex-col items-center gap-3.5">
            <Button
                btnClass="secondary"
                roundness="rounded-xls"
                size="w-[229px]"
                customClasses="py-3 text-sm"
                action={() => navigate(`/${username}`)}
            >
                <div className="flex justify-center gap-1.5">
                    <img src={personBlackWhite} className="h-4 w-4" />
                    <span>Check Full Profile</span>
                </div>
            </Button>
            <Button
                btnClass="secondary"
                roundness="rounded-xls"
                size="w-[179px]"
                customClasses="py-3 text-sm"
                action={() => navigate(`/${username}/message`)}
            >
                <div className="flex justify-center gap-1.5">
                    <img src={message} className="h-4 w-4" />
                    <span>Message</span>
                </div>
            </Button>
        </div>
    );
}

export default ContactButtons;
