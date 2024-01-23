import { Fragment } from "react";
import BreadCrumbDivider from "./BreadCrumbDivider";

function BreadCrumbNavBar({ img, children }) {
    return (
        <div className="flex items-center gap-2 py-2 md:py-3 w-dvw">
            <img src={img} className="h-6 w-6" />
            <div className="flex items-center gap-0 truncate text-lg">
                {children.map((element, index) =>
                    index === 0 ? (
                        element
                    ) : (
                        <Fragment key={element.props.title}>
                            <BreadCrumbDivider />
                            {element}
                        </Fragment>
                    )
                )}
            </div>
        </div>
    );
}

export default BreadCrumbNavBar;
