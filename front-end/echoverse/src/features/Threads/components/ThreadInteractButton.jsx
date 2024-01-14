import Button from "../../../components/Button";
import useConvertSystem from "../../Threads/hooks/useConvertSystem";

function ThreadInteractButton({ className = "", img, value, onClick }) {
    const { convertToViewSystem } = useConvertSystem();

    return (
        <Button customClasses="pointer-events-none relative">
            <div
                className={`pointer-events-auto flex gap-1.5 ${className}`}
                onClick={onClick}
            >
                <img src={img} className="h-4.5" />
                {value && <span>{convertToViewSystem(value)}</span>}
            </div>
        </Button>
    );
}

export default ThreadInteractButton;
