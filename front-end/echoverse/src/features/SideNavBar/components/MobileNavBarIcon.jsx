import menuLines from "../../../assets/svg/menuLines.svg";

function MobileNavBarIcon({ setIsSideNavBarActive }) {
    return (
        <div
            className="flex h-full w-fit cursor-pointer items-center px-2 md:px-3"
            onClick={() =>
                setIsSideNavBarActive(
                    (isSideNavBarActive) => !isSideNavBarActive
                )
            }
        >
            <img
                draggable={false}
                src={menuLines}
                className="min-h-7 min-w-7"
            />
        </div>
    );
}

export default MobileNavBarIcon;
