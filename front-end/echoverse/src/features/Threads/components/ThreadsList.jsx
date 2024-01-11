import Thread from "./Thread";

function ThreadsList({ view, savedThreads }) {
    return (
        <div
            className={`mt-4 gap-2 pb-10 lg:mx-0 ${
                view === "list"
                    ? "flex flex-col"
                    : view === "gallery"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : ""
            }`}
        >
            {savedThreads.map((savedThread) => (
                <Thread
                    savedThread={savedThread}
                    view={view}
                    key={savedThread.username}
                />
            ))}
        </div>
    );
}

export default ThreadsList;
