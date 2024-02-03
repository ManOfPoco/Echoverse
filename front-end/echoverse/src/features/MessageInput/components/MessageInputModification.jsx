import reply from "../../../assets/svg/reply.svg";
import editSVG from "../../../assets/svg/editSVG.svg";
import cross from "../../../assets/svg/cross.svg";
import { forwardRef } from "react";

const MessageInputModification = forwardRef(function MessageInputModification(
    { inputMessageType, selectedMessage, dispatch },
    ref
) {
    const {
        selectedMessageId,
        selectedMessageUsername,
        selectedMessageContent,
    } = selectedMessage;

    function handleCancelModification() {
        dispatch({ type: "resetInputMessageType" });
    }

    return (
        <div className="rounded-t-lg bg-gray-dark px-2 py-2 text-sm" ref={ref}>
            <div className="flex justify-between gap-3">
                {inputMessageType === "reply" && (
                    <div className="flex items-center gap-2">
                        <img src={reply} className="h-3.5 w-3.5" />

                        <h5>
                            Replying to{" "}
                            <span className="font-medium">
                                {selectedMessageUsername}
                            </span>
                        </h5>
                    </div>
                )}
                {inputMessageType === "edit" && (
                    <div className="flex gap-3 truncate">
                        <img src={editSVG} className="mt-0.5 h-4 w-4" />

                        <div className="flex flex-col truncate">
                            <h5 className="text-blue-light">Edit message</h5>
                            <p className="truncate text-xsm">
                                {selectedMessageContent}
                            </p>
                        </div>
                    </div>
                )}
                <img
                    src={cross}
                    className="h-5 w-5 cursor-pointer"
                    onClick={handleCancelModification}
                />
            </div>
        </div>
    );
});

export default MessageInputModification;
