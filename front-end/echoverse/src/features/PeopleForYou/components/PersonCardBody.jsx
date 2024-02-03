import Avatar from "../../../components/Avatar";

import ContactButtons from "../../People/components/ContactButtons";
import List from "../../Profile/components/List";

import PersonGameCards from "./PersonGameCards";
import SimilarStatistics from "./SimilarStatistics";

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
        <div className="flex max-w-[450px] w-full flex-col items-center px-2">
            <Avatar img={personImg} type="xls" />
            <SimilarStatistics
                commonTime={commonTime}
                similarGames={similarGames}
            />
            <h4 className="my-4 text-center text-xl">{username}</h4>
            <div className="text-center">
                <List data={languages} key="languages" />
                {`/ ${region} / `}
                <List data={platforms} key="platforms" />
            </div>
            <p className="my-4 text-sm">{description}</p>
            <PersonGameCards games={games} />
            <ContactButtons username={username} />
        </div>
    );
}

export default PersonCardBody;
