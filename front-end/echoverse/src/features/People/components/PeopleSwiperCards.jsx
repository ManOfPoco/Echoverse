import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/bundle";

import PersonCard from "./PersonCard";

function PeopleSwiperSlideCards({ people }) {
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {people.map((person) => (
                <SwiperSlide key={person.id}>
                    <PersonCard person={person} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PeopleSwiperSlideCards;
