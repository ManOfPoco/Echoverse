function SettingsSection({ title, children }) {
    return (
        <div className="pb-1 pt-4">
            <h4 className="px-4 py-1 text-xs font-bold text-gray-light">
                {title}
            </h4>
            <div className="flex flex-col gap-0.5">{children}</div>
        </div>
    );
}

export default SettingsSection;
