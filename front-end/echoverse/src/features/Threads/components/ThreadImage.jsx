import crossWhite from "../../../assets/svg/crossWhite.svg";

function ThreadImage({
    newThreadImg,
    isFullStretch = false,
    deleteBtn = false,
    index,
    threadImages,
    dispatch,
}) {
    function handleRemoveImage(removeIndex) {
        dispatch({ type: "removeNewThreadImage", removeIndex: removeIndex });
    }

    return (
        <div
            className={`relative rounded-lg border border-gray-light/50 ${
                threadImages.length === 1
                    ? `${
                          isFullStretch
                              ? "max-h-96 sm:max-h-[430px]"
                              : "max-h-80 sm:max-h-96"
                      } min-w-[min(min-w-fit,_max-w-full)]`
                    : `${
                          isFullStretch
                              ? "max-h-64 sm:max-h-80"
                              : "max-h-60 sm:max-h-64"
                      } min-w-fit`
            }`}
        >
            {deleteBtn && (
                <div className="absolute flex w-full justify-end p-2">
                    <span
                        className="min-w-fit cursor-pointer rounded-full bg-black-dark p-1 transition-colors hover:bg-black-night"
                        onClick={() => handleRemoveImage(index)}
                    >
                        <img
                            src={crossWhite}
                            className="h-5 w-5"
                            alt="remove"
                        />
                    </span>
                </div>
            )}

            <img
                src={newThreadImg}
                className={`rounded-lg pb-0.5 ${
                    threadImages.length === 1
                        ? `${
                              isFullStretch
                                  ? "max-h-96 sm:max-h-[430px]"
                                  : "max-h-80 sm:max-h-96"
                          } min-w-[min(min-w-fit,_max-w-full)]`
                        : `${
                              isFullStretch
                                  ? "max-h-64 sm:max-h-80"
                                  : "max-h-60 sm:max-h-64"
                          } min-h-full min-w-full`
                }`}
            />
        </div>
    );
}

export default ThreadImage;
