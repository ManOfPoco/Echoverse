import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../components/Button";
import SelectField from "../../../components/SelectField";
import LabelInputField from "../../Settings/components/LabelInputField";

import BiographyInput from "./BiographyInput";
import AvatarChangeInput from "./AvatarChangeInput";
import DateInputField from "./DateInputField";

import cs2 from "../../../assets/img/cs2.png";

import regionsList from "../../../assets/data/regionsList.json";
import languagesList from "../../../assets/data/languagesList.json";
import platformsList from "../../../assets/data/platformsList.json";
import toast from "react-hot-toast";

const data = {
    username: "ManOfPoco",
    displayName: "ManOfPoco",
    gamesQuantity: 522,
    followers: 155,
    following: 13,
    firstName: "John",
    lastName: "Peterson",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    region: { id: 4, name: "Europe" },
    languages: [{ code: "en", name: "English" }],
    platforms: [
        { id: 1, name: "PC" },
        { id: 3, name: "Xbox" },
    ],
    games: [
        {
            title: "Counter Strike 2",
            img: cs2,
            platforms: ["PC", "Xbox", "Switch"],
            steamLink:
                "https://store.steampowered.com/app/730/CounterStrike_2/",
        },
        {
            title: "Detroit: Become Human",
            img: "detroitBecomeHuman",
            platforms: ["PC", "PS", "Xbox"],
            steamLink:
                "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
        },
        {
            title: "Satisfactory",
            img: "satisfactory",
            platforms: ["PC"],
            steamLink:
                "https://store.steampowered.com/app/526870/Satisfactory/",
        },
        {
            title: "Lethal Company",
            img: "lethalCompany",
            platforms: ["PC", "PS", "Xbox"],
            steamLink: "https://lethalcompany.com/",
        },
        {
            title: "Valorant",
            img: "valorant",
            platforms: ["PC"],
            steamLink: "https://playvalorant.com/",
        },
    ],
};

function EditProfileForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [biographyInput, setBiographyInput] = useState(data.description);
    const biographyLength = biographyInput.length;

    const [region, setRegion] = useState(data.region);
    const [languages, setLanguages] = useState(data.languages);
    const [platforms, setPlatforms] = useState(data.platforms);

    function handleBiographyField(e) {
        if (e.target.value.length <= 150) setBiographyInput(e.target.value);
    }

    function handleSaveProfileSettings(e) {
        e.preventDefault()
        toast.success(`Your settings were successfully saved`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <form>
            <div className="flex flex-col gap-5">
                <AvatarChangeInput username={data.username} />

                <LabelInputField
                    label="Display name"
                    register={register}
                    defaultValue={data.displayName}
                />
                <LabelInputField
                    label="First name"
                    register={register}
                    defaultValue={data.firstName}
                />
                <LabelInputField
                    label="Last name"
                    register={register}
                    defaultValue={data.lastName}
                />
                <LabelInputField label="Birthday">
                    <DateInputField />
                </LabelInputField>

                <LabelInputField label="Biography">
                    <BiographyInput
                        biographyInput={biographyInput}
                        handleBiographyField={handleBiographyField}
                        biographyLength={biographyLength}
                    />
                </LabelInputField>

                <LabelInputField label="Region">
                    <SelectField
                        choices={regionsList}
                        selectedField={region}
                        setSelectedField={setRegion}
                    />
                </LabelInputField>

                <LabelInputField label="Languages">
                    <SelectField
                        choices={languagesList}
                        selectedField={languages}
                        setSelectedField={setLanguages}
                        defaultValue="Select languages"
                        isMultiple={true}
                        showDirection="up"
                    />
                </LabelInputField>

                <LabelInputField label="Platforms">
                    <SelectField
                        choices={platformsList}
                        selectedField={platforms}
                        setSelectedField={setPlatforms}
                        defaultValue="Select platforms"
                        isMultiple={true}
                        showDirection="up"
                    />
                </LabelInputField>
            </div>
            <Button
                type="submit"
                customClasses="mt-8"
                btnClass="primary"
                roundness="rounded-xls"
                action={(e) => handleSaveProfileSettings(e)}
            >
                Save
            </Button>
        </form>
    );
}

export default EditProfileForm;
