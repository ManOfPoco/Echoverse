import crossWhite from "../assets/svg/crossWhite.svg";

function DeleteFileButton({
    deleteSvg = crossWhite,
    roundness = "rounded-full",
    onClick,
}) {
    return (
        <div className={`absolute z-20 flex w-full justify-end p-2`}>
            <span
                className={`min-w-fit cursor-pointer bg-black-dark p-1 transition-colors hover:bg-black-night ${roundness}`}
                onClick={onClick}
            >
                <img
                    draggable={false}
                    src={deleteSvg}
                    className="h-5 w-5"
                    alt="remove"
                />
            </span>
        </div>
    );
}

export default DeleteFileButton;
