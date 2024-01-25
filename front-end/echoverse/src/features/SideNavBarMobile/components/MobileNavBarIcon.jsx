import menuLines from "../../../assets/svg/menuLines.svg";

function MobileNavBarIcon({ setIsSideNavBarActive }) {
    return (
        <div
            className="flex cursor-pointer items-center bg-black-night px-2 py-2 md:px-3 md:py-3"
            onClick={() =>
                setIsSideNavBarActive(
                    (isSideNavBarActive) => !isSideNavBarActive
                )
            }
        >
            <img src={menuLines} className="min-h-7 min-w-7" />
        </div>
    );
}

export default MobileNavBarIcon;
