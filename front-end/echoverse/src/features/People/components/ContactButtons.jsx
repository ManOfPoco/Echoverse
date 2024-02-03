import { useNavigate } from "react-router-dom";
import { useSwiper } from "swiper/react";

import Button from "../../../components/Button";

import personBlackWhite from "../../../assets/svg/personBlackWhite.svg";
import message from "../../../assets/svg/message.svg";

import ChevronLeft from "../../../svg/ChevronLeft";
import ChevronRight from "../../../svg/ChevronRight";

function ContactButtons({ username }) {
    const navigate = useNavigate();
    const swiper = useSwiper();

    return (
        <div className="mt-7 flex w-full items-center justify-between">
            <Button action={() => swiper.slidePrev()}>
                <ChevronLeft width={48} height={48} stroke="#645BF0" />
            </Button>
            <div className="flex flex-col w-full items-center gap-3.5">
                <Button
                    btnClass="secondary"
                    roundness="rounded-xls"
                    size="max-w-[229px] w-full"
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
                    size="max-w-[179px] w-full"
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
                <ChevronRight width={48} height={48} stroke="#645BF0" />
            </Button>
        </div>
    );
}

export default ContactButtons;
