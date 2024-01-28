function DropdownTitle({
    title = null,
    svgTitle = null,
    imageTitle = null,
    imageSize = "w-12 h-12",
}) {
    return (
        <>
            {title ? (
                <div className="cursor-pointer flex gap-1 transition-colors duration-500 hover:text-cyan-300">
                    <span>{title}</span>
                    <img
                        draggable="false"
                        className="h-5 w-4"
                        src={svgTitle}
                        alt="arrowDown"
                    />
                </div>
            ) : (
                <img
                    draggable="false"
                    className={`cursor-pointer aspect-square ${imageSize} rounded-full object-cover`}
                    src={imageTitle}
                    alt={imageTitle}
                />
            )}
        </>
    );
}

export default DropdownTitle;
