import { useOutletContext } from "react-router-dom";

import cs2 from "../../../../assets/img/cs2.png";
import satisfactory from "../../../../assets/img/satisfactory.png";
import lethalCompany from "../../../../assets/img/lethalCompany.png";
import detroitBecomeHuman from "../../../../assets/img/detroitBecomeHuman.png";
import gasStationSimulator from "../../../../assets/img/gasStationSimulator.png";

import Menu from "../../components/Menu";
import GameCard from "./GameCard";

function Games({ action }) {
    const [username] = useOutletContext();
    const games = [
        {
            title: "Counter Strike 2",
            img: cs2,
            platforms: ["PC", "Xbox", "Switch"],
            steamLink:
                "https://store.steampowered.com/app/730/CounterStrike_2/",
            presentInProfile: false,
        },
        {
            title: "Detroit: Become Human",
            img: detroitBecomeHuman,
            platforms: ["PC", "PS", "Xbox"],
            steamLink:
                "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
            presentInProfile: true,
        },
        {
            title: "Satisfactory",
            img: satisfactory,
            platforms: ["PC"],
            steamLink:
                "https://store.steampowered.com/app/526870/Satisfactory/",
            presentInProfile: false,
        },
        {
            title: "Lethal Company",
            img: lethalCompany,
            platforms: ["PC", "PS", "Xbox"],
            steamLink: "https://lethalcompany.com/",
            presentInProfile: true,
        },
        {
            title: "Valorant",
            img: "valorant",
            platforms: ["PC"],
            steamLink: "https://playvalorant.com/",
            presentInProfile: false,
        },
        {
            title: "Gas Station Simulator",
            img: gasStationSimulator,
            platforms: ["PC"],
            steamLink:
                "https://store.steampowered.com/app/1149620/Gas_Station_Simulator/",
            presentInProfile: false,
        },
    ];

    return (
        <>
            <Menu action={action} username={username} />
            <div className="grid grid-cols-1 gap-5 px-3 pb-10 md:grid-cols-2 md:px-0 lg:grid-cols-3">
                {games.map((game) => (
                    <GameCard
                        title={game.title}
                        img={game.img}
                        platforms={game.platforms}
                        presentInProfile={game.presentInProfile}
                        steamLink={game.steamLink}
                        key={game.title}
                    />
                ))}
            </div>
        </>
    );
}

export default Games;
