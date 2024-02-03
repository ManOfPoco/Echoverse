import InputField from "../../../components/InputField";

function LabelInputField({
    label,
    register,
    isDisabled,
    defaultValue,
    children,
}) {
    return (
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
            <h5 className="basis-24 md:text-end">{label}</h5>
            {children ? (
                children
            ) : (
                <InputField
                    size="w-[270px]"
                    roundness="rounded-md"
                    classes="text-sm"
                    register={
                        register
                            ? register(label, {
                                  required: true,
                                  value: defaultValue,
                              })
                            : null
                    }
                    isDisabled={isDisabled}
                />
            )}
        </div>
    );
}

export default LabelInputField;
