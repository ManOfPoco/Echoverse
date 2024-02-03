import { Fragment, forwardRef } from "react";

import MessageInputImageFile from "./MessageInputImageFile";
import MessageInputVideoFile from "./MessageInputVideoFile";

import {
    ACCEPTABLE_IMAGE_EXTENTIONS,
    ACCEPTABLE_VIDEO_EXTENTIONS,
} from "../../../../constants";

const MessageInputFiles = forwardRef(function MessageInputFiles({
    messageFiles,
    dispatch,
}, ref) {
    return (
        <div className="flex w-full gap-1 overflow-x-auto px-2.5 py-3" ref={ref}>
            {messageFiles.map((file, index) => (
                <Fragment key={index}>
                    {ACCEPTABLE_IMAGE_EXTENTIONS.includes(file.fileType) && (
                        <MessageInputImageFile
                            image={file.messageFile}
                            index={index}
                            dispatch={dispatch}
                        />
                    )}
                    {ACCEPTABLE_VIDEO_EXTENTIONS.includes(file.fileType) && (
                        <MessageInputVideoFile
                            video={file.messageFile}
                            index={index}
                            dispatch={dispatch}
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
});

export default MessageInputFiles;
