import { useRef } from "react";

import Button from "../../../components/Button";

import person from "../../../assets/img/person.jpg";

function AvatarChangeInput({ username }) {
    const fileUploadRef = useRef(null);
    const avatarRef = useRef(null);

    function handleFileUpload(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function () {
                const readImg = reader.result;

                if (avatarRef.current) avatarRef.current.src = readImg;
            };
        }
    }

    function handleTriggerFileUpload() {
        if (fileUploadRef.current) {
            fileUploadRef.current.click();
        }
    }

    return (
        <div className="flex md:ps-14">
            <img
                draggable={false}
                src={person}
                ref={avatarRef}
                alt="avatar"
                className={`aspect-square h-10 w-10 rounded-full object-cover`}
            />
            <div className="flex flex-col justify-between ps-5">
                <span className="h-4">{username}</span>
                <input
                    accept="image/jpeg, image/png"
                    className="hidden"
                    multiple=""
                    type="file"
                    ref={fileUploadRef}
                    onChange={(e) => handleFileUpload(e)}
                />
                <Button
                    customClasses="text-blue-light text-xs hover:text-blue-500 h-3.5"
                    action={handleTriggerFileUpload}
                >
                    Change profile photo
                </Button>
            </div>
        </div>
    );
}

export default AvatarChangeInput;
