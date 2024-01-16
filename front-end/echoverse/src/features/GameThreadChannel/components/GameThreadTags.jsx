import GameThreadTag from "./GameThreadTag";

function GameThreadTags({ tags }) {
    return (
        <div className="flex gap-3 text-xs">
            {tags.map((tag) => (
                <GameThreadTag tag={tag} key={tag} />
            ))}
        </div>
    );
}

export default GameThreadTags;
