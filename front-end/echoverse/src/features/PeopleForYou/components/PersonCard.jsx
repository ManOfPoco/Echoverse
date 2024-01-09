import PersonCardBody from "./PersonCardBody";

function PersonCard({ person }) {
    return (
        <div className="flex h-full max-h-[calc(100dvh-124px)] max-w-[600px] flex-col items-center rounded-lg bg-black-night py-5 lg:max-h-[calc(100dvh-152px)] xl:max-h-[calc(100dvh-168px)]">
            <PersonCardBody person={person} />
        </div>
    );
}

export default PersonCard;
