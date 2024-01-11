import ThreadCategories from "./ThreadCategories";
import ThreadBody from "./ThreadBody";


function Thread({ savedThread, view }) {
    const {
        title,
        description,
        username,
        lastMessage,
        lastMessageUsername,
        categories,
        postedAgo,
        messagesQuantity,
    } = savedThread;

    return (
        <div
            className={`flex w-full cursor-pointer flex-col rounded-xl bg-gray-charcoal`}
            onClick={() => console.log(`message by ${username}`)}
        >
            <ThreadCategories categories={categories} />
            <ThreadBody
                username={username}
                postedAgo={postedAgo}
                title={title}
                description={description}
                messagesQuantity={messagesQuantity}
                lastMessageUsername={lastMessageUsername}
                lastMessage={lastMessage}
                view={view}
            />
        </div>
    );
}

export default Thread;
