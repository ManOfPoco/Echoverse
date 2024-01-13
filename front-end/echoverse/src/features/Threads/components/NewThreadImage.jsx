import crossWhite from "../../../assets/svg/crossWhite.svg";

function NewThreadImage({ newThreadImg, index, state, dispatch }) {
    const { newThreadImages } = state;
    function handleRemoveImage(removeIndex) {
        dispatch({ type: "removeNewThreadImage", removeIndex: removeIndex });
    }

    return (
        <div
            className={`relative rounded-lg border border-gray-light/50 ${
                newThreadImages?.length === 1
                    ? "max-h-96 min-w-[min(min-w-fit,_max-w-full)]"
                    : "max-h-72 min-w-fit"
            }`}
        >
            <div className="absolute flex w-full justify-end p-2">
                <span
                    className="min-w-fit cursor-pointer rounded-full bg-black-dark p-1 transition-colors hover:bg-black-night"
                    onClick={() => handleRemoveImage(index)}
                >
                    <img src={crossWhite} className="h-5 w-5" alt="remove" />
                </span>
            </div>

            <img
                src={newThreadImg}
                className={`rounded-lg pb-0.5 ${
                    newThreadImages?.length === 1
                        ? "max-h-96 min-w-[min(min-w-fit,_max-w-full)]"
                        : "max-h-72 min-w-full min-h-full"
                }`}
            />
        </div>
    );
}

export default NewThreadImage;
