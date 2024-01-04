import Switch from "../../../components/Switch";

function PrivacySetting({ title, children, state, onChange }) {
    return (
        <>
            <div className="flex gap-5">
                <h5 className="basis-48">{title}</h5>
                <Switch state={state} onChange={onChange} />
            </div>
            {children ? (
                <p className="text-xs text-gray-light">{children}</p>
            ) : null}
        </>
    );
}

export default PrivacySetting;
