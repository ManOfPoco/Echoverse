import arcadeGamingRoom from "../../../assets/img/arcadeGamingRoom.png";

function WelcomeGamesMessage() {
    return (
        <>
            <div className="absolute flex h-60 w-full max-w-[1080px] items-center bg-black-dark/50 backdrop-blur-sm md:h-[448px] md:bg-black-dark/50 md:backdrop-blur">
                <h3 className="mx-auto text-center font-monoton text-3xl leading-10 tracking-wide text-turquoise md:max-w-[70%] md:text-5xl md:leading-[64px]">
                    Evolve your gaming experience with the right people
                </h3>
            </div>
            <img
                draggable={false}
                src={arcadeGamingRoom}
                alt="arcadeGamingRoom"
                className="h-60 w-full md:h-[448px]"
            />
        </>
    );
}

export default WelcomeGamesMessage;
