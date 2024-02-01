import Dropdown from "../../../components/Dropdown";
import UserCard from "../../ChannelUserCard/components/UserCard";

const data = {
    id: 1,
    username: "ManOfPoco",
    displayName: "ManOfPoco",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    joinDate: "1706798630.002737",
    customStatus: "I've completely burned out",
    status: "online",
};

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
            <UserCard
                showAdditionalOptions={showAdditionalOptions}
                user={data}
            />
        </Dropdown>
    );
}

export default DropdownUserCard;
