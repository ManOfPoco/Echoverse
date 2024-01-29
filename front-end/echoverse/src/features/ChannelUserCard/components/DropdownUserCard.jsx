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
            className={`min-w-fit overflow-y-auto overflow-x-hidden rounded-lg font-roboto sm:w-96 ${
                showAdditionalOptions ? "w-[320px]" : "w-[312px]"
            }`}
            placement={placement}
            modifiers={modifiers}
        >
            <UserCard showAdditionalOptions={showAdditionalOptions} />
        </Dropdown>
    );
}

export default DropdownUserCard;
