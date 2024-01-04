function BiographyInput({
    biographyInput,
    handleBiographyField,
    biographyLength,
}) {
    return (
        <div className="flex flex-col flex-wrap items-start gap-1.5">
            <textarea
                placeholder="Tell us about yourself"
                className="h-[96px] max-h-52 w-[280px] rounded-md border-0 bg-gray-charcoal px-2 py-2 font-roboto text-sm outline-none md:h-[76px] md:w-[410px]"
                value={biographyInput}
                onChange={(e) => handleBiographyField(e)}
            />
            <p className="text-xs">{biographyLength} / 150</p>
        </div>
    );
}

export default BiographyInput;
