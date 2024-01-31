function ContextMenuElement({
    img,
    imgComponent,
    classname,
    hover = "hover:bg-majorelle-blue/80",
    onClick,
    children,
}) {
    return (
        <div
            className={`${classname} ${hover} group flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm font-normal text-platinum`}
            onClick={onClick}
        >
            <span>{children}</span>
            {img && <img src={img} className="h-4 w-4" />}
            {imgComponent && imgComponent}
        </div>
    );
}

export default ContextMenuElement;
