import ThreadFiles from "./ThreadFiles";

function ThreadInstanceBody({ thread }) {
    const { files, message } = thread;
    return (
        <>
            <div
                className={`whitespace-pre-wrap break-words font-roboto text-sm ${
                    files.length > 0 && "pb-2"
                }`}
            >
                {message}
            </div>

            <ThreadFiles stretchType='reduced' threadFiles={files} />
        </>
    );
}

export default ThreadInstanceBody;
