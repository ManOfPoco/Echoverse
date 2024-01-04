import { useOutletContext } from "react-router-dom";

import useWindowDimensions from "../hooks/useWindowDimensions";

import arrowRight from "../assets/svg/arrowRight.svg";

import EditProfileForm from "../features/EditProfile/components/EditProfileForm";

function EditProfile() {
    const [isMenuActive, setIsMenuActive] = useOutletContext();
    const { height, width } = useWindowDimensions();

    function handleHideMenu() {
        if (width < 768 && isMenuActive === true) {
            setIsMenuActive(false);
        }
    }

    return (
        <div className="flex h-full min-h-[calc(100dvh-72px)] w-full flex-col pe-5 ps-5 sm:ps-10 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <img
                src={arrowRight}
                className="h-8 w-8 md:hidden"
                onClick={() => setIsMenuActive(true)}
            />
            <div
                className="py-5 md:py-10"
                onClick={handleHideMenu}
            >
                <h4 className="px-4 text-xl font-semibold lg:font-bold">
                    Edit profile
                </h4>
                <EditProfileForm />
            </div>
        </div>
    );
}

export default EditProfile;
