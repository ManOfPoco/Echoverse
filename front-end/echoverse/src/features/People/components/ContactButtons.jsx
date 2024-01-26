import { useNavigate } from "react-router-dom";
import { useSwiper } from "swiper/react";
import Button from "../../../components/Button";

import personBlackWhite from "../../../assets/svg/personBlackWhite.svg";
import message from "../../../assets/svg/message.svg";
import chevronLeft from "../../../assets/svg/chevronLeft.svg";
import chevronRight from "../../../assets/svg/chevronRight.svg";

function ContactButtons({ username }) {
    const navigate = useNavigate();
    const swiper = useSwiper();

    return (
        <div className="mt-7 flex w-full items-center justify-between">
            <Button action={() => swiper.slidePrev()}>
                <img
                    draggable={false}
                    src={chevronLeft}
                    className="h-12 w-12"
                />
            </Button>
            <div className="flex flex-col items-center gap-3.5">
                <Button
                    btnClass="secondary"
                    roundness="rounded-xls"
                    size="w-[229px]"
                    customClasses="py-3 text-sm"
                    action={() => navigate(`/${username}`)}
                >
                    <div className="flex justify-center gap-1.5">
                        <img
                            draggable={false}
                            src={personBlackWhite}
                            className="h-4 w-4"
                        />
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
                        <img
                            draggable={false}
                            src={message}
                            className="h-4 w-4"
                        />
                        <span>Message</span>
                    </div>
                </Button>
            </div>
            <Button action={() => swiper.slideNext()}>
                <img
                    draggable={false}
                    src={chevronRight}
                    className="h-12 w-12"
                />
            </Button>
        </div>
    );
}

export default ContactButtons;
