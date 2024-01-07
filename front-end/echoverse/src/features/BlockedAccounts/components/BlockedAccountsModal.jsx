import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import UsersListModal from "../../../components/UsersListModal";

import person from "../../../assets/img/person.jpg";
import BlockedUser from "./BlockedUser";

const blockedUsers = [
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
    {
        avatar: person,
        username: "ManOfPoco",
        name: "Pete Peterson",
    },
];

function BlockedAccountsModal({
    isBlockedAccountsModalOpen,
    setIsBlockedAccountsModalOpen,
}) {
    return (
        <UsersListModal
            isOpen={isBlockedAccountsModalOpen}
            onClose={() => setIsBlockedAccountsModalOpen(false)}
            title="Blocked accounts"
        >
            <div className="mt-7 flex h-[330px] flex-col gap-4 overflow-auto">
                {blockedUsers.map((blockedUser) => (
                    <BlockedUser blockedUser={blockedUser} key={blockedUser} />
                ))}
            </div>
        </UsersListModal>
    );
}

export default BlockedAccountsModal;
