import { useState } from "react";
import Switch from "../components/Switch";
import PrivacySetting from "../features/Privacy/components/PrivacySetting";

function Privacy() {
    const [showOnlineStatus, setShowOnlineStatus] = useState(false);
    const [isPrivateAccount, setIsPrivateAccount] = useState(false);
    const [showAge, setShowAge] = useState(false);

    return (
        <>
            <h4 className="mb-5 px-4 text-xl font-semibold lg:font-bold">
                Privacy
            </h4>
            <div className="flex flex-col gap-4">
                <PrivacySetting
                    title="Show online status"
                    state={showOnlineStatus}
                    onChange={() => setShowOnlineStatus(!showOnlineStatus)}
                />

                <PrivacySetting
                    title="Private account"
                    state={isPrivateAccount}
                    onChange={() => setIsPrivateAccount(!isPrivateAccount)}
                >
                    When your account is public, your profile and games can be
                    seen by anyone.
                    <br />
                    When your account is private, only the followers you approve
                    can see your profile.
                </PrivacySetting>
            </div>
        </>
    );
}

export default Privacy;
