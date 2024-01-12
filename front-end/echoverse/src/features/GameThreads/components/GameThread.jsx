import GameThreadCategories from "./GameThreadCategories";
import GameThreadBody from "./GameThreadBody";


function GameThread({ gameThread, view }) {
    const {
        title,
        description,
        username,
        lastMessage,
        lastMessageUsername,
        categories,
        postedAgo,
        messagesQuantity,
    } = gameThread;

    return (
        <div
            className={`flex w-full cursor-pointer flex-col rounded-xl bg-gray-charcoal`}
            onClick={() => console.log(`message by ${username}`)}
        >
            <GameThreadCategories categories={categories} />
            <GameThreadBody
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

export default GameThread;
