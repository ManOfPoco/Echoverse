import TextareaInput from "../../../components/TextareaInput";

function BiographyInput({
    biographyInput,
    handleBiographyField,
    biographyLength,
}) {
    return (
        <div className="flex flex-col flex-wrap items-start gap-1.5">
            <TextareaInput
                placeholder="Tell us about yourself"
                size="h-[96px] max-h-36 w-[280px] md:h-[76px] md:w-[410px]"
                roundness="rounded-md"
                value={biographyInput}
                onChange={(e) => handleBiographyField(e)}
            />
            <p className="text-xs">{biographyLength} / 150</p>
        </div>
    );
}

export default BiographyInput;
