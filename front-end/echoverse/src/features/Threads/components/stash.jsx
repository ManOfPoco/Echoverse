import { useEffect, useRef, useState } from "react";

import videoSoundOn from "../../../assets/svg/videoSoundOn.svg";
import videoSoundOff from "../../../assets/svg/videoSoundOff.svg";

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
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const fileRef = useRef(null);
    const videoRef = useRef(null);

    function handleSoundToggleSound() {
        setIsSoundOn((isSoundOn) => !isSoundOn);
    }

    function handleSetVolume() {
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
        }
    }

    function handleVideoClick() {
        if (!isFullScreenModalOpen) {
            setIsFullScreenModalOpen(true);
            setStretch("fullScreen");
            // moveDomElementToStash(fileRef.current);
        } else if (isFullScreenModalOpen) {
            if (videoRef.current.paused) videoRef.current.play();
            else videoRef.current.pause();
        }
    }

    function handleProgressClick(e) {
        const clickPosition = e.nativeEvent.offsetX;
        const percent = clickPosition / e.target.offsetWidth;
        const newTime = percent * duration;
        videoRef.current.currentTime = newTime;
    }

    useEffect(() => {
        function handleTimeUpdate() {
            setCurrentTime(videoRef.current.currentTime);
        }

        function handleDurationChange() {
            setDuration(videoRef.current.duration);
        }

        if (isFullScreenModalOpen) {
            const video = videoRef?.current;
            if (video) {
                video.addEventListener("timeupdate", handleTimeUpdate);
                video.addEventListener("durationchange", handleDurationChange);

                return () => {
                    video.removeEventListener("timeupdate", handleTimeUpdate);
                    video.removeEventListener(
                        "durationchange",
                        handleDurationChange
                    );
                };
            }
        }
    }, [isFullScreenModalOpen]);

    useEffect(() => {
        console.log(isFullScreenModalOpen)
        if (isDOMElementInStash()) {
            if (fileRef.current)
                fileRef.current = swapDomElementsWithDomElementsFromStash(
                    fileRef.current
                );
        }
    }, [isDOMElementInStash, swapDomElementsWithDomElementsFromStash]);

    useEffect(() => {
        const fileRf = fileRef.current;
        return () => {
            console.log("unmount");
            moveDomElementToStash(fileRf);
        };
    }, []);


    return (
        <div ref={fileRef}>
            <div>
                <div className="absolute flex h-full w-full items-end p-2">
                    <div className="absolute z-50 flex w-[calc(100%-16px)] flex-col-reverse items-end gap-2">
                        {isFullScreenModalOpen && (
                            <div
                                className="h-1 w-full cursor-pointer rounded-lg bg-gray-charcoal"
                                onClick={handleProgressClick}
                            >
                                <div
                                    className="h-full w-full rounded-lg bg-gray-300"
                                    style={{
                                        width: `${
                                            (currentTime / duration) * 100
                                        }%`,
                                    }}
                                />
                            </div>
                        )}
                        <span
                            className="z-50 min-w-fit cursor-pointer rounded-full bg-black-dark p-1.5 transition-colors hover:bg-black-night"
                            onClick={() => handleSoundToggleSound()}
                        >
                            <img
                                src={isSoundOn ? videoSoundOff : videoSoundOn}
                                className="h-4 w-4"
                                alt="remove"
                            />
                        </span>
                    </div>
                </div>

                <video
                    className={`rounded-lg pb-0.5 ${
                        stretch === "fullScreen"
                            ? "max-h-[80dvh] max-w-[80dvw]"
                            : ""
                    } ${
                        stretch !== "fullScreen"
                            ? threadFiles.length === 1
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
                            : ""
                    }`}
                    autoPlay
                    loop
                    muted={isSoundOn}
                    onLoadStart={(e) => handleSetVolume(e)}
                    onClick={() => handleVideoClick()}
                    ref={videoRef}
                >
                    <source src={threadFile} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default VideoFile;
