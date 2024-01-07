import GameCardPlatform from "../../UserGames/components/GameCardPlatform";

function PersonGameCard({ game }) {
    return (
        <div className="flex gap-2.5 rounded-xls bg-gray-dark px-2.5 py-1">
            <h5>{game.title}</h5>
            <div className="flex items-center gap-1 text-xs font-semibold">
                {game.platforms.map((platform) => (
                    <GameCardPlatform
                        selectedPlatform={platform}
                        key={platform}
                    />
                ))}
            </div>
        </div>
    );
}

export default PersonGameCard;
