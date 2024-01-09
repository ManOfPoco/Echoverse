import { useState } from "react";
import Button from "../../../components/Button";
import PersonGameCard from "./PersonGameCard";

function PersonGameCards({ games }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="flex flex-wrap justify-center gap-2.5">
            {games.slice(0, 6).map((game) => (
                <PersonGameCard game={game} key={game.title} />
            ))}
            {showMore ? (
                <>
                    {games.slice(6).map((game) => (
                        <PersonGameCard game={game} key={game.title} />
                    ))}
                </>
            ) : (
                <>
                    {games.length > 6 && (
                        <Button action={() => setShowMore(true)}>
                            <div className="flex gap-2.5 rounded-xls bg-gray-dark px-2.5 py-1">
                                {`+${games.length - 6} more`}
                            </div>
                        </Button>
                    )}
                </>
            )}
        </div>
    );
}

export default PersonGameCards;
