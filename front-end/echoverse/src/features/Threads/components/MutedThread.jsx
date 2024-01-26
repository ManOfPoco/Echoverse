import Button from "../../../components/Button";

function MutedThread({ username, isMuted, setIsMuted }) {
    return (
        <>
            {isMuted && (
                <div className="my-2 flex w-full items-center justify-between rounded-lg bg-gray-dark px-4 py-2 text-sm text-gray-light">
                    <h4>This post is from {username}, who is muted.</h4>
                    <Button
                        btnClass="secondary"
                        roundness="rounded-lg"
                        size="h-8 w-[112px]"
                        action={() => setIsMuted(false)}
                    >
                        Undo
                    </Button>
                </div>
            )}
        </>
    );
}

export default MutedThread;
