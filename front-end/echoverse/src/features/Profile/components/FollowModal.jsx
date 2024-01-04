import Followers from "./Followers";
import UsersListModal from "../../../components/UsersListModal";

function FollowModal({ isOpen, onClose, title, follows }) {
    return (
        <UsersListModal isOpen={isOpen} onClose={onClose} title={title}>
            <Followers follows={follows} />
        </UsersListModal>
    );
}

export default FollowModal;
