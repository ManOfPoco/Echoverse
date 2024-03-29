import DataList from "./DataList";

import globe from "../../../assets/svg/globe.svg";
import languageTranslator from "../../../assets/svg/languageTranslator.svg";
import gamingCenter from "../../../assets/svg/gamingCenter.svg";

function UserData({ data, children }) {
    const { firstName, description, region, languages, platforms } = data;
    return (
        <>
            {children}
            <h3 className="font-medium">{firstName}</h3>
            <p>{description}</p>
            {region && (
                <div className="flex">
                    <p>Region</p>
                    <img draggable={false} src={globe} />
                    &nbsp; - &nbsp;{region}
                </div>
            )}
            {languages && (
                <DataList
                    title="Languages"
                    data={languages}
                    img={languageTranslator}
                    alt="languages"
                    key="languages"
                />
            )}
            {platforms && (
                <DataList
                    title="Platforms"
                    data={platforms}
                    img={gamingCenter}
                    alt="platforms"
                    key="platforms"
                />
            )}
        </>
    );
}

export default UserData;
