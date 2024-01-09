import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

import SimilarStatistics from "../../PeopleForYou/components/SimilarStatistics";
import List from "../../Profile/components/List";

import personBlackWhite from "../../../assets/svg/personBlackWhite.svg";

function HistoryUser({ user }) {
    const navigate = useNavigate();
    const { personImg, commonTime, similarGames, username, platforms } = user;

    return (
        <div className="flex flex-col items-center rounded-lg bg-black-night px-10 py-4">
            <Avatar img={personImg} type="xl" />
            <SimilarStatistics
                commonTime={commonTime}
                similarGames={similarGames}
            />
            <h4 className="my-2 text-center text-xl">{username}</h4>
            <List data={platforms} key="platforms" />
            <Button
                btnClass="secondary"
                roundness="rounded-xls"
                size="w-[229px]"
                customClasses="mt-5 py-3 text-sm"
                action={() => navigate(`/${username}`)}
            >
                <div className="flex justify-center gap-1.5">
                    <img src={personBlackWhite} className="h-4 w-4" />
                    <span>Check Full Profile</span>
                </div>
            </Button>
        </div>
    );
}

export default HistoryUser;
