import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

import PersonCard from "./PersonCard";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

function PeopleSwiperSlideCards({ people }) {
    const { width } = useWindowDimensions();
    const navigation = width > 768 ? { enabled: true } : false;

    return (
        <Swiper
            modules={[EffectCube, Pagination, Navigation]}
            effect="cube"
            grabCursor={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
            }}
            navigation={navigation}
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
