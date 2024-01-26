import Button from "../../../components/Button";

function UserStatistics({
    data,
    setIsFollowersModalOpen,
    setIsFollowingModalOpen,
}) {
    const { gamesQuantity, followers, following } = data;
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
