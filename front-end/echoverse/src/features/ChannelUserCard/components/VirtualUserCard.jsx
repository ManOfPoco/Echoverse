import { Fragment, useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import UserCard from "../../ChannelUserCard/components/UserCard";

import { usePopper } from "react-popper";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import useCloseDropdown from "../../../hooks/useCloseDropdown";
import { Transition } from "@headlessui/react";

function generateGetBoundingClientRect(top, left, width) {
    return {
        getBoundingClientRect() {
            return {
                top: top,
                left: left,
                bottom: 0,
                right: 0,
                width: width,
                height: 0,
            };
        },
    };
}

function VirtualUserCard({
    referenceElement,
    member,
    setReferenceElement,
    setSelectedUser,
}) {
    const [virtualReference, setVirtualReference] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(virtualReference, popperElement, {
        placement: "left-start",
        modifiers: [
            {
                name: "flip",
                options: {
                    fallbackPlacements: ["left"],
                },
                enabled: true,
            },
            {
                name: "offset",
                options: {
                    offset: [0, 12],
                },
            },
            {
                name: "preventOverflow",
                options: {
                    altAxis: true,
                },
                enabled: true,
            },
        ],
    });

    const { width } = useWindowDimensions();

    const currentUserId = 1;
    const showAdditionalOptions = member.id === currentUserId;

    useEffect(() => {
        if (referenceElement) {
            setVirtualReference(
                generateGetBoundingClientRect(
                    referenceElement.top,
                    referenceElement.left,
                    width <= 576 ? 320 : 356
                )
            );
        }
    }, [referenceElement, showAdditionalOptions, width]);

    useEffect(() => {
        function closeDropdown(e) {
            if (
                virtualReference &&
                popperElement &&
                !referenceElement.target.contains(e.target) &&
                !popperElement.contains(e.target)
            ) {
                setReferenceElement(null);
                setSelectedUser(null);
            }
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [
        referenceElement,
        popperElement,
        setReferenceElement,
        setSelectedUser,
        virtualReference,
    ]);

    return (
        <Transition
            as={Fragment}
            show={virtualReference !== null}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
        >
            <div
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className={`z-50 w-[320px] overflow-y-auto overflow-x-hidden rounded-lg font-roboto sm:w-[356px]`}
            >
                <UserCard showAdditionalOptions={showAdditionalOptions} user={member} />
            </div>
        </Transition>
    );
}

export default VirtualUserCard;
