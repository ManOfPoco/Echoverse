import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField";

import clock from "../../../assets/svg/clock.svg";
import { useEffect, useState } from "react";

function SetGamingNotesModal({ isGamingNotesModalOpen, state, dispatch }) {
    const { selectedDay } = state;
    const { day, time, notes: defaultNotes } = selectedDay;

    const [notes, setNotes] = useState();

    useEffect(() => {
        setNotes(defaultNotes);
    }, [defaultNotes]);

    function handleSetGamingNotes() {
        toast.success(`Notes for ${day} ${time} saved`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
        setNotes("");
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
                    defaultValue={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <Button
                    type="button"
                    btnClass="primary"
                    roundness="rounded-xls"
                    action={handleSetGamingNotes}
                >
                    Save
                </Button>
            </form>
        </Modal>
    );
}

export default SetGamingNotesModal;
