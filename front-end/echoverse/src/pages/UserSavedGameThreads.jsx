import GameThreadFilters from "../features/GameThreads/components/GameThreadFilters";
import GameThreadsList from "../features/GameThreads/components/GameThreadsList";
import useGameThreads from "../features/GameThreads/hooks/useGameThreads";

import tags from "../assets/data/tags.json";
import gameThreads from "../assets/data/gameThreads.json";

const game = "Counter Strike 2";

function UserSavedGameThreads() {
    const [state, dispatch] = useGameThreads(tags);
    const { view } = state;

    return (
        <>
            <GameThreadFilters state={state} dispatch={dispatch} />
            <GameThreadsList
                gameThreads={gameThreads}
                game={game}
                view={view}
            />
        </>
    );
}

export default UserSavedGameThreads;
