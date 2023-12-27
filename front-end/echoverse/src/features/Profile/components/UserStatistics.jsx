import Button from "../../../components/Button";

function UserStatistics({
    gamesQuantity,
    followers,
    following,
    setIsFollowersModalOpen,
    setIsFollowingModalOpen,
}) {
    return (
        <div className="flex justify-between">
            <span>{gamesQuantity} games</span>
            <Button action={() => setIsFollowersModalOpen(true)}>
                {followers} followers
            </Button>
            <Button action={() => setIsFollowingModalOpen(true)}>
                {following} following
            </Button>
        </div>
    );
}

export default UserStatistics;
