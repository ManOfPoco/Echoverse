import { useState } from "react";

import SavedPostCategories from "./SavedPostCategories";

import SavedPostBody from "./SavedPostBody";

function SavedPost({ savedPost, view }) {
    const {
        title,
        description,
        username,
        lastMessage,
        lastMessageUsername,
        categories,
        postedAgo,
        messagesQuantity,
    } = savedPost;

    return (
        <div
            className={`flex w-full cursor-pointer flex-col rounded-xl bg-gray-charcoal`}
            onClick={() => console.log(`message by ${username}`)}
        >
            <SavedPostCategories categories={categories} />
            <SavedPostBody
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

export default SavedPost;
