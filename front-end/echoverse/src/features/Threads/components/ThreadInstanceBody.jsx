import ThreadImages from "./ThreadImages";

function ThreadInstanceBody({ thread }) {
    const { images, message } = thread;
    return (
        <>
            <div
                className={`whitespace-pre-wrap break-words font-roboto text-sm ${
                    images.length > 0 && "pb-2"
                }`}
            >
                {message}
            </div>

            <ThreadImages threadImages={images} />
        </>
    );
}

export default ThreadInstanceBody;
