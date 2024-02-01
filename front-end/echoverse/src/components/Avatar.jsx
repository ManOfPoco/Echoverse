const types = {
    xs: 'h-4 w-4',
    xsm: "h-8 w-8",
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-20 w-20",
    lgx: "h-40 w-40",
    xl: "h-44 w-44",
    xls: "w-64 h-64",
};

function Avatar({ img, type = 'md' }) {
    const typeClasses = types[type] || "";

    return (
        <img
            draggable={false}
            src={img}
            alt="avatar"
            className={`aspect-square rounded-full object-cover ${typeClasses}`}
        />
    );
}

export default Avatar;
