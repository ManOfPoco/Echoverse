function UserStatistics({ gamesQuantity, followers, following }) {
    return (
        <div className="flex justify-between">
            <span>{gamesQuantity} games</span>
            <span>{followers} followers</span>
            <span>{following} following</span>
        </div>
    );
}

export default UserStatistics;
