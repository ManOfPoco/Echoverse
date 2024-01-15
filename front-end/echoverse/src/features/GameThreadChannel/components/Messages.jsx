import Message from "./Message";

function Messages({ messages }) {
    return (
        <div className="flex flex-col">
            {messages.map((message, index) => (
                <Message messageObj={message} previousMessageObj={messages[index - 1]} key={message.id} />
            ))}
        </div>
    );
}

export default Messages;
