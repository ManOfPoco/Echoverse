import Avatar from "../../../components/Avatar";

import List from "../../Profile/components/List";
import PersonGameCard from "./PersonGameCard";

function PersonCardBody({ person }) {
    const {
        personImg,
        commonTime,
        similarGames,
        username,
        languages,
        region,
        platforms,
        description,
        games,
    } = person;

    return (
        <div className="flex w-[420px] flex-col items-center">
            <Avatar img={personImg} type="xls" />
            <div className="mt-2.5 flex flex-col items-center gap-2.5 text-xs font-semibold text-gray-light">
                <h5>Gaming time in common: {commonTime}%</h5>
                <h5>Similar games: {similarGames} games</h5>
            </div>
            <h4 className="my-4 text-center text-xl">{username}</h4>
            <div className="text-center">
                <List data={languages} key='languages' />
                {`/ ${region} / `}
                <List data={platforms} key='platforms' />
            </div>
            <p className="my-4 text-sm">{description}</p>
            <div className="flex flex-wrap justify-center gap-2.5">
                {games.map((game) => (
                    <PersonGameCard game={game} key={game.title} />
                ))}
            </div>
        </div>
    );
}

export default PersonCardBody;
