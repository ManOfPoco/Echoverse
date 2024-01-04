import { useState } from "react";
import Button from "../components/Button";
import BlockedAccountsModal from "../features/BlockedAccounts/components/BlockedAccountsModal";

function BlockedAccounts() {
    const [isBlockedAccountsModalOpen, setIsBlockedAccountsModalOpen] =
        useState(false);

    return (
        <>
            <BlockedAccountsModal
                isBlockedAccountsModalOpen={isBlockedAccountsModalOpen}
                setIsBlockedAccountsModalOpen={setIsBlockedAccountsModalOpen}
            />
            <h4 className="mb-5 px-4 text-xl font-semibold lg:font-bold">
                Blocked accounts
            </h4>

            <Button
                customClasses="text-start text-blue-light"
                action={() => setIsBlockedAccountsModalOpen(true)}
            >
                See and manage accounts whose access to your account you've
                restricted
            </Button>
        </>
    );
}

export default BlockedAccounts;
