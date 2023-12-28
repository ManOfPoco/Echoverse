import { Switch as UiSwitch } from "@headlessui/react";

function Switch({ state, onChange }) {
    return (
        <UiSwitch
            checked={state}
            onChange={onChange}
            className={`${
                state ? "bg-blue-light" : "bg-majorelle-blue"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                    state ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </UiSwitch>
    );
}

export default Switch;
