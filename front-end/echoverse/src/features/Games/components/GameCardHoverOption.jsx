import Button from "../../../components/Button";

function GameCardHoverOption({ img, alt, title, onClick, isDeletion = false }) {
    return (
        <>
            <Button customClasses="group/option" action={onClick}>
                <div className="flex max-w-[80px] flex-col items-center justify-center group-hover/option:text-blue-light">
                    <div
                        className={`max-w-[64px] rounded-xl bg-gray-charcoal p-3 ${
                            isDeletion
                                ? "group-hover/option:bg-red-fire-engine"
                                : "group-hover/option:bg-pumpkin"
                        }`}
                    >
                        <img
                            draggable={false}
                            src={img}
                            alt={alt}
                            className="h-10 w-10"
                        />
                    </div>
                    <h5 className="pt-1 text-center text-sm md:font-semibold md:tracking-wide">
                        {title}
                    </h5>
                </div>
            </Button>
        </>
    );
}

export default GameCardHoverOption;
