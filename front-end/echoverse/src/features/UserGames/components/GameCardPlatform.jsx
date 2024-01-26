function GameCardPlatform({ selectedPlatform }) {

    return (
        <h5 className="rounded-xl bg-blue-light p-0.5 text-black-dark">
            {selectedPlatform.name}
        </h5>
    );
}

export default GameCardPlatform;
