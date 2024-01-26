import Button from "../../../components/Button";

function HiddenThread({ isHidden, setIsHidden }) {
    return (
        <>
            {isHidden && (
                <div className="my-2 flex w-full items-center justify-between rounded-lg bg-gray-dark px-4 py-2 text-sm text-gray-light">
                    <h4>This post has been hidden</h4>
                    <Button
                        btnClass="secondary"
                        roundness="rounded-lg"
                        size="h-8 w-[112px]"
                        action={() => setIsHidden(false)}
                    >
                        Undo
                    </Button>
                </div>
            )}
        </>
    );
}

export default HiddenThread;
