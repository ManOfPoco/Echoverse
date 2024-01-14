import ThreadInstance from "./ThreadInstance";

function ThreadsList({ threads }) {
    return (
        <div className="flex w-full flex-col divide-y divide-gray-light/30">
            {threads.map((thread) => (
                <ThreadInstance thread={thread} key={thread.id} />
            ))}
        </div>
    );
}

export default ThreadsList;
