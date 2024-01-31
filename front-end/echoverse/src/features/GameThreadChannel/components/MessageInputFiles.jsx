import { Fragment } from "react";

import MessageInputImageFile from "./MessageInputImageFile";
import MessageInputVideoFile from "./MessageInputVideoFile";

import {
    ACCEPTABLE_IMAGE_EXTENTIONS,
    ACCEPTABLE_VIDEO_EXTENTIONS,
} from "../../../../constants";

function MessageInputFiles({ messageFiles, dispatch }) {
    return (
        <div className="flex w-full gap-1 overflow-x-auto py-1">
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
}

export default MessageInputFiles;
