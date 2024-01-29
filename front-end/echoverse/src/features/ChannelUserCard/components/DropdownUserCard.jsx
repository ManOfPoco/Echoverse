import Dropdown from "../../../components/Dropdown";
import UserCard from "../../ChannelUserCard/components/UserCard";

function DropdownUserCard({
    referenceElement,
    placement,
    modifiers = [],
    showAdditionalOptions,
}) {
    return (
        <Dropdown
            title={referenceElement}
            titleZIndex="z-40"
            className={`min-w-fit overflow-y-auto overflow-x-hidden rounded-lg font-roboto sm:w-[356px] ${
                showAdditionalOptions ? "w-80" : "w-[312px]"
            }`}
            placement={placement}
            modifiers={modifiers}
        >
            <UserCard showAdditionalOptions={showAdditionalOptions} />
        </Dropdown>
    );
}

export default DropdownUserCard;
