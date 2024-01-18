import crossWhite from "../../../assets/svg/crossWhite.svg";

function DeleteFileButton({ deleteBtn, onClick }) {
    return (
        <>
            {deleteBtn && (
                <div className={`absolute z-20 flex w-full justify-end p-2`}>
                    <span
                        className="min-w-fit cursor-pointer rounded-full bg-black-dark p-1 transition-colors hover:bg-black-night"
                        onClick={onClick}
                    >
                        <img
                            src={crossWhite}
                            className="h-5 w-5"
                            alt="remove"
                        />
                    </span>
                </div>
            )}
        </>
    );
}

export default DeleteFileButton;
