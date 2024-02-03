import Button from "../../../components/Button";
import useConvertSystem from "../../Threads/hooks/useConvertSystem";

function ThreadInteractButton({
    className = "",
    isButton = true,
    img,
    imgComponent,
    value,
    onClick,
    pointerEventsClass,
}) {
    const { convertToViewSystem } = useConvertSystem();

    return (
        <>
            {isButton ? (
                <Button customClasses="relative" disableFocus>
                    <div
                        className={`${pointerEventsClass} flex gap-1.5 ${className}`}
                        onClick={onClick}
                    >
                        {img && (
                            <img
                                draggable={false}
                                src={img}
                                className="h-4.5"
                            />
                        )}
                        {imgComponent && imgComponent}
                        {value && <span>{convertToViewSystem(value)}</span>}
                    </div>
                </Button>
            ) : (
                <div
                    className={`${pointerEventsClass} flex gap-1.5 ${className}`}
                    onClick={onClick}
                >
                    {img && (
                        <img draggable={false} src={img} className="h-4.5" />
                    )}
                    {imgComponent && imgComponent}
                    {value && <span>{convertToViewSystem(value)}</span>}
                </div>
            )}
        </>
    );
}

export default ThreadInteractButton;
