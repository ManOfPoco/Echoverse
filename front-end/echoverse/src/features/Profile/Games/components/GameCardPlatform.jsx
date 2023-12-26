function GameCardPlatform({ platform }) {
    return (
        <h5
            className="rounded-xl bg-blue-light p-0.5 text-black-dark"
            key={platform}
        >
            {platform}
        </h5>
    );
}

export default GameCardPlatform;
