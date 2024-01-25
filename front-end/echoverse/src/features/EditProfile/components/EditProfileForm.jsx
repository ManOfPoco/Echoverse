import { useState } from "react";
import { useForm } from "react-hook-form";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import SelectField from "../../../components/SelectField";

import DateInputField from "./DateInputField";

import cs2 from "../../../assets/img/cs2.png";
import LabelInputField from "../../Settings/components/LabelInputField";
import BiographyInput from "./BiographyInput";
import AvatarChangeInput from "./AvatarChangeInput";

const data = {
    username: "ManOfPoco",
    displayName: 'ManOfPoco',
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

const regionsList = [
    { id: 1, name: "Africa" },
    { id: 2, name: "Asia" },
    { id: 3, name: "Central America" },
    { id: 4, name: "Europe" },
    { id: 5, name: "Middle East" },
    { id: 6, name: "North America" },
    { id: 7, name: "Pacific" },
    { id: 8, name: "South America" },
];

const languagesList = [
    { code: "aa", name: "Afar" },
    { code: "ab", name: "Abkhazian" },
    { code: "ae", name: "Avestan" },
    { code: "af", name: "Afrikaans" },
    { code: "ak", name: "Akan" },
    { code: "am", name: "Amharic" },
    { code: "an", name: "Aragonese" },
    { code: "ar", name: "Arabic" },
    { code: "as", name: "Assamese" },
    { code: "av", name: "Avaric" },
    { code: "ay", name: "Aymara" },
    { code: "az", name: "Azerbaijani" },
    { code: "ba", name: "Bashkir" },
    { code: "be", name: "Belarusian" },
    { code: "bg", name: "Bulgarian" },
    { code: "bh", name: "Bihari languages" },
    { code: "bi", name: "Bislama" },
    { code: "bm", name: "Bambara" },
    { code: "bn", name: "Bengali" },
    { code: "bo", name: "Tibetan" },
    { code: "br", name: "Breton" },
    { code: "bs", name: "Bosnian" },
    { code: "ca", name: "Catalan; Valencian" },
    { code: "ce", name: "Chechen" },
    { code: "ch", name: "Chamorro" },
    { code: "co", name: "Corsican" },
    { code: "cr", name: "Cree" },
    { code: "cs", name: "Czech" },
    {
        code: "cu",
        name: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
    },
    { code: "cv", name: "Chuvash" },
    { code: "cy", name: "Welsh" },
    { code: "da", name: "Danish" },
    { code: "de", name: "German" },
    { code: "dv", name: "Divehi; Dhivehi; Maldivian" },
    { code: "dz", name: "Dzongkha" },
    { code: "ee", name: "Ewe" },
    { code: "el", name: "Greek, Modern (1453-)" },
    { code: "en", name: "English" },
    { code: "eo", name: "Esperanto" },
    { code: "es", name: "Spanish; Castilian" },
    { code: "et", name: "Estonian" },
    { code: "eu", name: "Basque" },
    { code: "fa", name: "Persian" },
    { code: "ff", name: "Fulah" },
    { code: "fi", name: "Finnish" },
    { code: "fj", name: "Fijian" },
    { code: "fo", name: "Faroese" },
    { code: "fr", name: "French" },
    { code: "fy", name: "Western Frisian" },
    { code: "ga", name: "Irish" },
    { code: "gd", name: "Gaelic; Scomttish Gaelic" },
    { code: "gl", name: "Galician" },
    { code: "gn", name: "Guarani" },
    { code: "gu", name: "Gujarati" },
    { code: "gv", name: "Manx" },
    { code: "ha", name: "Hausa" },
    { code: "he", name: "Hebrew" },
    { code: "hi", name: "Hindi" },
    { code: "ho", name: "Hiri Motu" },
    { code: "hr", name: "Croatian" },
    { code: "ht", name: "Haitian; Haitian Creole" },
    { code: "hu", name: "Hungarian" },
    { code: "hy", name: "Armenian" },
    { code: "hz", name: "Herero" },
    {
        code: "ia",
        name: "Interlingua (International Auxiliary Language Association)",
    },
    { code: "id", name: "Indonesian" },
    { code: "ie", name: "Interlingue; Occidental" },
    { code: "ig", name: "Igbo" },
    { code: "ii", name: "Sichuan Yi; Nuosu" },
    { code: "ik", name: "Inupiaq" },
    { code: "io", name: "Ido" },
    { code: "is", name: "Icelandic" },
    { code: "it", name: "Italian" },
    { code: "iu", name: "Inuktitut" },
    { code: "ja", name: "Japanese" },
    { code: "jv", name: "Javanese" },
    { code: "ka", name: "Georgian" },
    { code: "kg", name: "Kongo" },
    { code: "ki", name: "Kikuyu; Gikuyu" },
    { code: "kj", name: "Kuanyama; Kwanyama" },
    { code: "kk", name: "Kazakh" },
    { code: "kl", name: "Kalaallisut; Greenlandic" },
    { code: "km", name: "Central Khmer" },
    { code: "kn", name: "Kannada" },
    { code: "ko", name: "Korean" },
    { code: "kr", name: "Kanuri" },
    { code: "ks", name: "Kashmiri" },
    { code: "ku", name: "Kurdish" },
    { code: "kv", name: "Komi" },
    { code: "kw", name: "Cornish" },
    { code: "ky", name: "Kirghiz; Kyrgyz" },
    { code: "la", name: "Latin" },
    { code: "lb", name: "Luxembourgish; Letzeburgesch" },
    { code: "lg", name: "Ganda" },
    { code: "li", name: "Limburgan; Limburger; Limburgish" },
    { code: "ln", name: "Lingala" },
    { code: "lo", name: "Lao" },
    { code: "lt", name: "Lithuanian" },
    { code: "lu", name: "Luba-Katanga" },
    { code: "lv", name: "Latvian" },
    { code: "mg", name: "Malagasy" },
    { code: "mh", name: "Marshallese" },
    { code: "mi", name: "Maori" },
    { code: "mk", name: "Macedonian" },
    { code: "ml", name: "Malayalam" },
    { code: "mn", name: "Mongolian" },
    { code: "mr", name: "Marathi" },
    { code: "ms", name: "Malay" },
    { code: "mt", name: "Maltese" },
    { code: "my", name: "Burmese" },
    { code: "na", name: "Nauru" },
    {
        code: "nb",
        name: "Bokmål, Norwegian; Norwegian Bokmål",
    },
    { code: "nd", name: "Ndebele, North; North Ndebele" },
    { code: "ne", name: "Nepali" },
    { code: "ng", name: "Ndonga" },
    { code: "nl", name: "Dutch; Flemish" },
    { code: "nn", name: "Norwegian Nynorsk; Nynorsk, Norwegian" },
    { code: "no", name: "Norwegian" },
    { code: "nr", name: "Ndebele, South; South Ndebele" },
    { code: "nv", name: "Navajo; Navaho" },
    { code: "ny", name: "Chichewa; Chewa; Nyanja" },
    { code: "oc", name: "Occitan (post 1500)" },
    { code: "oj", name: "Ojibwa" },
    { code: "om", name: "Oromo" },
    { code: "or", name: "Oriya" },
    { code: "os", name: "Ossetian; Ossetic" },
    { code: "pa", name: "Panjabi; Punjabi" },
    { code: "pi", name: "Pali" },
    { code: "pl", name: "Polish" },
    { code: "ps", name: "Pushto; Pashto" },
    { code: "pt", name: "Portuguese" },
    { code: "qu", name: "Quechua" },
    { code: "rm", name: "Romansh" },
    { code: "rn", name: "Rundi" },
    { code: "ro", name: "Romanian; Moldavian; Moldovan" },
    { code: "ru", name: "Russian" },
    { code: "rw", name: "Kinyarwanda" },
    { code: "sa", name: "Sanskrit" },
    { code: "sc", name: "Sardinian" },
    { code: "sd", name: "Sindhi" },
    { code: "se", name: "Northern Sami" },
    { code: "sg", name: "Sango" },
    { code: "si", name: "Sinhala; Sinhalese" },
    { code: "sk", name: "Slovak" },
    { code: "sl", name: "Slovenian" },
    { code: "sm", name: "Samoan" },
    { code: "sn", name: "Shona" },
    { code: "so", name: "Somali" },
    { code: "sq", name: "Albanian" },
    { code: "sr", name: "Serbian" },
    { code: "ss", name: "Swati" },
    { code: "st", name: "Sotho, Southern" },
    { code: "su", name: "Sundanese" },
    { code: "sv", name: "Swedish" },
    { code: "sw", name: "Swahili" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "tg", name: "Tajik" },
    { code: "th", name: "Thai" },
    { code: "ti", name: "Tigrinya" },
    { code: "tk", name: "Turkmen" },
    { code: "tl", name: "Tagalog" },
    { code: "tn", name: "Tswana" },
    { code: "to", name: "Tonga (Tonga Islands)" },
    { code: "tr", name: "Turkish" },
    { code: "ts", name: "Tsonga" },
    { code: "tt", name: "Tatar" },
    { code: "tw", name: "Twi" },
    { code: "ty", name: "Tahitian" },
    { code: "ug", name: "Uighur; Uyghur" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "uz", name: "Uzbek" },
    { code: "ve", name: "Venda" },
    { code: "vi", name: "Vietnamese" },
    { code: "vo", name: "Volapük" },
    { code: "wa", name: "Walloon" },
    { code: "wo", name: "Wolof" },
    { code: "xh", name: "Xhosa" },
    { code: "yi", name: "Yiddish" },
    { code: "yo", name: "Yoruba" },
    { code: "za", name: "Zhuang; Chuang" },
    { code: "zh", name: "Chinese" },
    { code: "zu", name: "Zulu" },
];

const platformsList = [
    { id: 0, name: "Select Platform" },
    { id: 1, name: "PC" },
    { id: 2, name: "PS" },
    { id: 3, name: "Xbox" },
    { id: 4, name: "Switch" },
    { id: 5, name: "Steam Deck" },
    { id: 6, name: "iOS" },
    { id: 7, name: "Android" },
    { id: 8, name: "MacOS" },
];

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
                action={(e) => e.preventDefault()}
            >
                Save
            </Button>
        </form>
    );
}

export default EditProfileForm;
