import { useEffect, useLayoutEffect, useState } from "react";

import videoSoundOn from "../../../assets/svg/videoSoundOn.svg";
import videoSoundOff from "../../../assets/svg/videoSoundOff.svg";
import { useRef } from "react";

function VideoFile({
    threadFiles,
    threadFile,
    stretch,
    setStretch,
    isFullScreenModalOpen,
    setIsFullScreenModalOpen,
    moveDomElementToStash,
    isDOMElementInStash,
    swapDomElementsWithDomElementsFromStash,
}) {
    const [isMuted, setIsMuted] = useState(true);
    const fileRef = useRef(null);
    const soundRef = useRef(null);

    const videoDefaultClasses = `rounded-lg pb-0.5 ${
        threadFiles.length === 1
            ? `${
                  stretch === "stretch"
                      ? "max-h-96 sm:max-h-[430px]"
                      : "max-h-80 sm:max-h-96"
              } min-w-[min(min-w-fit,_max-w-full)]`
            : `${
                  stretch === "stretch"
                      ? "max-h-64 sm:max-h-80"
                      : "max-h-60 sm:max-h-64"
              } min-w-fit`
    }`;

    function handleSoundToggleSound() {
        setIsMuted((isMuted) => !isMuted);
    }

    function handleSetVolume() {
        if (fileRef.current) {
            fileRef.current.volume = 0.5;
        }
    }

    function handleVideoClick() {
        if (!isFullScreenModalOpen) {
            setIsFullScreenModalOpen(true);
            setStretch("fullScreen");
        } else if (isFullScreenModalOpen) {
            if (fileRef.current.paused) fileRef.current.play();
            else fileRef.current.pause();
        }
    }

    useEffect(() => {
        fileRef.current.muted = isMuted;
    }, [isMuted, fileRef]);

    useLayoutEffect(() => {
        return () => {
            moveDomElementToStash(fileRef.current);
        };
    }, [moveDomElementToStash]);

    useEffect(() => {
        if (isDOMElementInStash()) {
            if (fileRef.current) {
                fileRef.current = swapDomElementsWithDomElementsFromStash(
                    fileRef.current
                );
                if (!fileRef.current.muted) {
                    setIsMuted(false);
                }
                if (isFullScreenModalOpen)
                    fileRef.current.className =
                        "rounded-lg max-h-[80dvh] max-w-[80dvw]";
                else fileRef.current.className = videoDefaultClasses;
            }
        }
    }, [isDOMElementInStash, swapDomElementsWithDomElementsFromStash]);

    return (
        <div>
            <div className="absolute flex h-full w-full items-end p-2">
                <span
                    className="z-50 min-w-fit cursor-pointer rounded-full bg-black-dark p-1.5 transition-colors hover:bg-black-night"
                    onClick={() => handleSoundToggleSound()}
                >
                    <img
                        src={isMuted ? videoSoundOff : videoSoundOn}
                        className="h-4 w-4"
                        alt="remove"
                        ref={soundRef}
                    />
                </span>
            </div>
            <div onClick={() => handleVideoClick()}>
                <video
                    className={`rounded-lg pb-0.5 ${videoDefaultClasses}`}
                    autoPlay
                    loop
                    muted={isMuted}
                    onLoadStart={(e) => handleSetVolume(e)}
                    ref={fileRef}
                >
                    <source src={threadFile} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default VideoFile;
