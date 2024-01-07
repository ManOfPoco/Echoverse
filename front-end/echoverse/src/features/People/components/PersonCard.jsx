import PersonCardBody from "./PersonCardBody";
import ContactButtons from "./ContactButtons";

function PersonCard({ person }) {
    const { username } = person;
    return (
        <div className="flex w-[600px] flex-col items-center rounded-lg bg-black-night py-10">
            <PersonCardBody person={person} />
            <ContactButtons username={username} />
        </div>
    );
}

export default PersonCard;
