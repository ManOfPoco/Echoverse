import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

import profile from "../../../assets/img/profile.jpg";

function AvatarChangeInput({ username }) {
    return (
        <div className="flex md:ps-14">
            <Avatar img={profile} type="sm" />
            <div className="flex flex-col justify-between ps-5">
                <span className="h-4">{username}</span>
                <Button customClasses="text-blue-light text-xs hover:text-blue-500 h-3.5">
                    Change profile photo
                </Button>
            </div>
        </div>
    );
}

export default AvatarChangeInput;
