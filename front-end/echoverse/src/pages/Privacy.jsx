import Switch from "../components/Switch";

function Privacy() {
    return (
        <>
            <h4 className="mb-5 px-4 text-xl font-semibold lg:font-bold">
                Privacy
            </h4>
            <div className="flex flex-col gap-4">
                <div className="flex gap-5">
                    <h5 className="basis-48">Show online status</h5>
                    <Switch />
                </div>
                <div className="flex flex-col gap-2.5">
                    <div className="flex gap-5">
                        <h5 className="basis-48">Private account</h5>
                        <Switch />
                    </div>
                    <p className="text-xs text-gray-light">
                        When your account is public, your profile and games can
                        be seen by anyone.
                        <br />
                        When your account is private, only the followers you
                        approve can see your profile.
                    </p>
                </div>
                <div className="flex gap-5">
                    <h5 className="basis-48">Show age to other users</h5>
                    <Switch />
                </div>
            </div>
        </>
    );
}

export default Privacy;
