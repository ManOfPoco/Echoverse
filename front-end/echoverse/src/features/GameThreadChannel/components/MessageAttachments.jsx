import { Fragment } from "react";

import MessageImageAttachment from "./MessageImageAttachment";
import MessageVideoAttachment from "./MessageVideoAttachment";

import person2 from "../../../assets/img/person2.jpg";
import photo from "../../../assets/img/photo.jpg";
import photo2 from "../../../assets/img/photo2.jpg";
import photo3 from "../../../assets/img/photo3.jpg";
import shorts from "../../../assets/img/shorts.mp4";
import video1 from "../../../assets/img/video1.mp4";
import video2 from "../../../assets/img/video2.mp4";

import { getFileExtention } from "../utils/getFileExtention";
import {
    ACCEPTABLE_IMAGE_EXTENTIONS,
    ACCEPTABLE_VIDEO_EXTENTIONS,
} from "../../../../constants";

const fileMapping = {
    photo: photo,
    photo2: photo2,
    photo3: photo3,
    video: shorts,
    video1: video1,
    video2: video2,
    person2: person2,
};

function MessageAttachments({ messageFiles, senderId }) {
    return (
        <div className="flex w-full max-w-screen-sm flex-wrap gap-1 overflow-x-auto pt-1">
            {messageFiles.map((file) => (
                <Fragment key={file.id}>
                    {ACCEPTABLE_VIDEO_EXTENTIONS.includes(
                        getFileExtention(fileMapping[file.file])
                    ) && (
                        <MessageVideoAttachment
                            filesQuantity={messageFiles.length}
                            video={fileMapping[file.file]}
                            senderId={senderId}
                        />
                    )}

                    {ACCEPTABLE_IMAGE_EXTENTIONS.includes(
                        getFileExtention(fileMapping[file.file])
                    ) && (
                        <MessageImageAttachment
                            filesQuantity={messageFiles.length}
                            image={fileMapping[file.file]}
                            senderId={senderId}
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default MessageAttachments;
