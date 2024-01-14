import useConvertSystem from "../../Threads/hooks/useConvertSystem";

function ThreadInteractButton({ className, img, value, onClick }) {
    const { convertToViewSystem } = useConvertSystem();

    return (
        <div className={`${className} flex gap-1.5`} onClick={onClick}>
            <img src={img} className="h-4.5" />
            {value && <span>{convertToViewSystem(value)}</span>}
        </div>
    );
}

export default ThreadInteractButton;
