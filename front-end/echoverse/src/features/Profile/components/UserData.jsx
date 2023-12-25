import DataList from "./DataList";
import UserStatistics from "./UserStatistics";

import globe from "../../../assets/svg/globe.svg";
import languageTranslator from "../../../assets/svg/languageTranslator.svg";
import gamingCenter from "../../../assets/svg/gamingCenter.svg";

function UserData({
    gamesQuantity,
    followers,
    following,
    firstName,
    description,
    region,
    languages,
    platforms,
}) {
    return (
        <>
            {
                <UserStatistics
                    gamesQuantity={gamesQuantity}
                    followers={followers}
                    following={following}
                />
            }
            <h3 className="font-medium">{firstName}</h3>
            <p>{description}</p>
            {region && (
                <div className="flex">
                    <p>Region</p>
                    <img src={globe} />&nbsp; - &nbsp;{region}
                </div>
            )}
            {languages && (
                <DataList title="Languages" data={languages} img={languageTranslator} alt='languages' key="languages" />
            )}
            {platforms && (
                <DataList title="Platforms" data={platforms} img={gamingCenter} alt='platforms' key="platforms" />
            )}
        </>
    );
}

export default UserData;
