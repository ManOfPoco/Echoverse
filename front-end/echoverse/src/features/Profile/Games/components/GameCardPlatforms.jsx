import GameCardPlatform from "./GameCardPlatform";

function GameCardPlatforms({ platforms }) {
    return (
        <div className="absolute flex w-72 justify-end rounded-xl sm:w-80 ">
            <div className="flex items-center gap-1 p-1 text-xs font-semibold">
                {platforms.map((platform) => (
                    <GameCardPlatform platform={platform} key={platform} />
                ))}
            </div>
        </div>
    );
}

export default GameCardPlatforms;
