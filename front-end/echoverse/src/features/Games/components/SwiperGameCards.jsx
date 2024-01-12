import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css/bundle";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import GameCard from "./GameCard";

function SwiperGameCards({ title, games, autoplay }) {
    const { width } = useWindowDimensions();

    const slidesPerView = width < 768 ? 1 : width >= 1024 ? 3 : 2;

    return (
        <div className="mx-5 mt-5 lg:mx-0">
            <h5 className="mb-5 text-xl">{title}</h5>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={5}
                slidesPerView={slidesPerView}
                navigation
                autoplay={autoplay}
                pagination={{ clickable: true }}
            >
                {games.map((game) => (
                    <SwiperSlide key={game.title} className="z-10">
                        <GameCard
                            game={game}
                            showPlatforms={false}
                            key={game.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperGameCards;
