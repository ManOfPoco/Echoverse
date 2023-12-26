import { useForm } from "react-hook-form";
import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField";

import clock from "../../../assets/svg/clock.svg";
import Button from "../../../components/Button";
import toast from "react-hot-toast";

function SetGamingNotesModal({ isGamingNotesModalOpen, day, time, dispatch }) {
    const {
        register: passwordResetRegister,
        handleSubmit: handlePasswordReset,
        formState: { passwordResetErrors },
    } = useForm();

    function handleSetGamingNotes() {
        toast.success(`Notes for ${day} ${time} saved`);
        dispatch({ type: "setGamingNotes" });
    }

    return (
        <Modal
            isOpen={isGamingNotesModalOpen}
            onClose={() => dispatch({ type: "closeSetGamingNotesModal" })}
            img={clock}
            alt="notes"
            title="Set Gaming Notes"
            description="Enter your notes for the selected time below"
        >
            <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
            >
                <InputField
                    img={clock}
                    type="text"
                    placeholder="Enter notes here"
                    register={passwordResetRegister("Email", {
                        required: true,
                    })}
                />
                <Button
                    type="button"
                    btnClass="primary"
                    action={handleSetGamingNotes}
                >
                    Save
                </Button>
            </form>
        </Modal>
    );
}

export default SetGamingNotesModal;
