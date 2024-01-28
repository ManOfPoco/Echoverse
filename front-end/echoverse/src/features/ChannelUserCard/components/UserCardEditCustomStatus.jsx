import ChevronRight from "../../../svg/ChevronRight";

function UserCardEditCustomStatus({
    isCustomStatus,
    setIsSetCustomStatusModalOpen,
}) {
    return (
        <div
            className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 hover:bg-gray-dark/80"
            onClick={() => setIsSetCustomStatusModalOpen(true)}
        >
            <span>
                {isCustomStatus ? "Edit Custom Status" : "Add Custom Status"}
            </span>

            <ChevronRight width={14} height={14} stroke="white" />
        </div>
    );
}

export default UserCardEditCustomStatus;
