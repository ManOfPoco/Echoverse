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
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);

    const videoRef = useRef(null);
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
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
        }
    }

    function handleVideoClick() {
        if (!isFullScreenModalOpen) {
            setIsFullScreenModalOpen(true);
            setStretch("fullScreen");
            moveDomElementToStash(videoRef.current);
        } else if (isFullScreenModalOpen) {
            if (videoRef.current.paused) videoRef.current.play();
            else videoRef.current.pause();
        }
    }

    function handleProgressClick(e) {
        const progressBar = e.currentTarget;
        const clickPosition =
            e.clientX - progressBar.getBoundingClientRect().left;

        const percent = clickPosition / progressBar.offsetWidth;
        const newTime = percent * duration;

        videoRef.current.currentTime = newTime;
    }

    useLayoutEffect(() => {
        if (isFullScreenModalOpen) {
            return () => {
                moveDomElementToStash(videoRef.current);
            };
        }
    }, [moveDomElementToStash, isFullScreenModalOpen]);

    useEffect(() => {
        if (isDOMElementInStash()) {
            if (videoRef.current) {
                videoRef.current = swapDomElementsWithDomElementsFromStash(
                    videoRef.current
                );
                if (!videoRef.current.muted) {
                    setIsMuted(false);
                }
                if (isFullScreenModalOpen) {
                    videoRef.current.className =
                        "rounded-lg max-h-[80dvh] max-w-[80dvw]";
                    setDuration(videoRef.current.duration);
                    setCurrentTime(videoRef.current.currentTime);
                } else videoRef.current.className = videoDefaultClasses;
            }
        }
    }, [
        isDOMElementInStash,
        swapDomElementsWithDomElementsFromStash,
        videoDefaultClasses,
        isFullScreenModalOpen,
    ]);

    useEffect(() => {
        videoRef.current.muted = isMuted;
    }, [isMuted, videoRef]);

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
    });

    useEffect(() => {
        if (!isFullScreenModalOpen) {
            const options = {
                root: null, // use the viewport as the root
                rootMargin: "0px", // no margin
                threshold: 0.5, // at least 50% of the target is visible
            };

            const observer = new IntersectionObserver(([entry]) => {
                setIsInViewport(entry.isIntersecting);

                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else videoRef.current.pause();
                }
            }, options);

            if (videoRef.current) {
                observer.observe(videoRef.current);
            }

            return () => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            };
        }
    }, [isFullScreenModalOpen]);

    return (
        <div>
            <div className="absolute flex h-full w-full items-end justify-end p-2">
                <div className="absolute z-50 flex w-[calc(100%-16px)] flex-col-reverse items-end gap-2">
                    {isFullScreenModalOpen && (
                        <div
                            className="h-1 w-full cursor-pointer rounded-lg bg-gray-charcoal"
                            onClick={(e) => handleProgressClick(e)}
                        >
                            <div
                                className="h-full w-full rounded-lg bg-gray-300"
                                style={{
                                    width: `${(currentTime / duration) * 100}%`,
                                }}
                            />
                        </div>
                    )}
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
            </div>
            <div onClick={() => handleVideoClick()}>
                <video
                    className={`rounded-lg pb-0.5 ${videoDefaultClasses}`}
                    autoPlay
                    loop
                    muted={isMuted}
                    onLoadStart={(e) => handleSetVolume(e)}
                    ref={videoRef}
                >
                    <source src={threadFile} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default VideoFile;
