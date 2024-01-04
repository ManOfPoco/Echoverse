import { useOutletContext } from "react-router-dom";

import useWindowDimensions from "../hooks/useWindowDimensions";

import EditProfileForm from "../features/EditProfile/components/EditProfileForm";

function EditProfile() {
    const [isMenuActive, setIsMenuActive] = useOutletContext();
    const { height, width } = useWindowDimensions();

    return (
        <>
            <h4 className="px-4 mb-5 text-xl font-semibold lg:font-bold">
                Edit profile
            </h4>
            <EditProfileForm />
        </>
    );
}

export default EditProfile;
