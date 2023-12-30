import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";

import Avatar from "../components/Avatar";

import useWindowDimensions from "../hooks/useWindowDimensions";

import profile from "../assets/img/profile.jpg";
import arrowRight from "../assets/svg/arrowRight.svg";

import cs2 from "../assets/img/cs2.png";
import Button from "../components/Button";
import InputField from "../components/InputField";
import DateInputField from "../features/EditProfile/components/DateInputField";
import { useState } from "react";
import DatePicker from "react-datepicker";
import SelectField from "../components/SelectField";

const data = {
    username: "ManOfPoco",
    gamesQuantity: 522,
    followers: 155,
    following: 13,
    firstName: "John Peterson",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    region: "Europe",
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

function EditProfile() {
    const [isMenuActive, setIsMenuActive] = useOutletContext();
    const { height, width } = useWindowDimensions();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [biographyInput, setBiographyInput] = useState(data.description);
    const biographyLength = biographyInput.length;

    const [region, setRegion] = useState(regionsList[0]);
    const [languages, setLanguages] = useState(data.languages);
    const [platforms, setPlatforms] = useState(data.platforms);

    function handleHideMenu() {
        if (width < 768 && isMenuActive === true) {
            setIsMenuActive(false);
        }
    }

    function handleBiographyField(e) {
        if (e.target.value.length <= 150) setBiographyInput(e.target.value);
    }

    return (
        <div className="flex h-full min-h-[calc(100dvh-72px)] w-full flex-col pe-5 ps-5 sm:ps-10 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <img
                src={arrowRight}
                className="h-8 w-8 md:hidden"
                onClick={() => setIsMenuActive(true)}
            />
            <div className="py-5 md:py-10" onClick={handleHideMenu}>
                <h4 className="px-4 text-xl font-semibold lg:font-bold">
                    Edit profile
                </h4>
                <form>
                    <div className="mt-5 flex flex-col gap-5">
                        <div className="flex md:ps-14">
                            <Avatar img={profile} type="sm" />
                            <div className="flex flex-col justify-between ps-5">
                                <span className="h-4">{data.username}</span>
                                <Button customClasses="text-blue-light text-xs hover:text-blue-500 h-3.5">
                                    Change profile photo
                                </Button>
                            </div>
                        </div>

                        <div className="flex w-full flex-wrap items-start gap-x-8 gap-y-4">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                First name
                            </h5>
                            <InputField
                                size="w-[270px]"
                                roundness="rounded-md"
                                classes="text-sm"
                                register={register("First name", {
                                    required: true,
                                    value: data.firstName,
                                })}
                            />
                        </div>

                        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                Last name
                            </h5>
                            <InputField
                                size="w-[270px]"
                                roundness="rounded-md"
                                classes="text-sm"
                                register={register("Last name", {
                                    required: true,
                                    value: data.firstName,
                                })}
                            />
                        </div>

                        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                Birthday
                            </h5>
                            <DateInputField />
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                Biography
                            </h5>
                            <div className="flex flex-col flex-wrap items-start gap-1.5">
                                <textarea
                                    placeholder="Tell us about yourself"
                                    className="h-[90px] max-h-52 w-[280px] rounded-md border-0 bg-gray-charcoal px-2 py-2 font-roboto text-sm outline-none md:h-[70px] md:w-[410px]"
                                    value={biographyInput}
                                    onChange={(e) => handleBiographyField(e)}
                                />
                                <p className="text-xs">
                                    {biographyLength} / 150
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                Region
                            </h5>
                            <SelectField
                                choices={regionsList}
                                selectedField={region}
                                setSelectedField={setRegion}
                            />
                        </div>

                        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                Languages
                            </h5>
                            <SelectField
                                choices={languagesList}
                                selectedField={languages}
                                setSelectedField={setLanguages}
                                defaultValue="Select languages"
                                isMultiple={true}
                            />
                        </div>

                        <div className="flex flex-wrap items-start gap-8">
                            <h5 className="basis-20 md:basis-24 md:text-end">
                                Platforms
                            </h5>
                            <SelectField
                                choices={platformsList}
                                selectedField={platforms}
                                setSelectedField={setPlatforms}
                                defaultValue="Select platforms"
                                isMultiple={true}
                            />
                        </div>
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
            </div>
        </div>
    );
}

export default EditProfile;
