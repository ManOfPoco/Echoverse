import HistoryUser from "./HistoryUser";

function HistoryUsers({ historyUsers }) {
    return (
        <>
            {historyUsers.map((user) => (
                <HistoryUser user={user} key={user.id} />
            ))}
        </>
    );
}

export default HistoryUsers;
