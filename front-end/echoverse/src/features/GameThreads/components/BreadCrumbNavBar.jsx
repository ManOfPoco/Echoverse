import { Fragment } from "react";
import BreadCrumbDivider from "./BreadCrumbDivider";

function BreadCrumbNavBar({ img, children }) {
    return (
        <div className="flex items-center gap-2 border-b border-black-dark px-2 py-2 shadow-lg md:px-3 md:py-3">
            <img src={img} className="h-7 w-7" />
            <div className="flex items-center truncate text-lg">
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
