import { useState } from "react";
import { usePopper } from "react-popper";

import ThreadMoreSvg from "./ThreadMoreSvg";
import ThreadMoreOption from "./ThreadMoreOption";
import toast from "react-hot-toast";

function ThreadMore({
    username,
    isBlocked,
    setIsBlocked,
    setIsMuted,
    setIsHidden,
}) {
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-end",
    });

    function handleThreadMute() {
        setIsMuted(true);
    }

    function handleThreadHide() {
        setIsHidden(true);
    }

    function handleThreadBlock() {
        setIsBlocked(true);
        toast.success(`Threads from ${username} have been blocked`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <div className="pointer-events-auto cursor-pointer">
            <div className="rounded-full px-0.5 py-0.5 hover:bg-gray-dark">
                <ThreadMoreSvg
                    setReferenceElement={setReferenceElement}
                    setIsMoreMenuOpen={setIsMoreMenuOpen}
                />
            </div>

            {isMoreMenuOpen && (
                <div
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    className="z-40 w-40 divide-y divide-gray-light/40 overflow-hidden rounded-lg bg-gray-dark"
                >
                    <ThreadMoreOption onClick={handleThreadMute}>
                        Mute
                    </ThreadMoreOption>
                    <ThreadMoreOption onClick={handleThreadHide}>
                        Hide
                    </ThreadMoreOption>
                    <ThreadMoreOption
                        onClick={handleThreadBlock}
                        color="text-red-fire-engine"
                    >
                        Block
                    </ThreadMoreOption>
                </div>
            )}
        </div>
    );
}

export default ThreadMore;
