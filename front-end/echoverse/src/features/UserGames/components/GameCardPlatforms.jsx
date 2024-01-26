import GameCardPlatform from "./GameCardPlatform";

function GameCardPlatforms({ selectedPlatforms }) {
    return (
        <div className="absolute flex w-72 justify-end rounded-xl sm:w-80">
            <div className="flex items-center gap-1 p-1 text-xs font-semibold">
                {selectedPlatforms.map((selectedPlatform) => (
                    <GameCardPlatform
                        selectedPlatform={selectedPlatform}
                        key={selectedPlatform.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default GameCardPlatforms;
