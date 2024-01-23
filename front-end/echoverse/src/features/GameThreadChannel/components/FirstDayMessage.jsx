import { isFirstDayMessage } from "../utils/dateFormatters";

function FirstDayMessage({ time, previousMessageObj }) {
    return (
        <>
            {isFirstDayMessage(time, previousMessageObj?.time) && (
                <div className="relative">
                    <div className="mt-4 flex w-full justify-center pe-4 ps-4 after:absolute after:left-0 after:top-1/2 after:z-10 after:w-full after:border-b after:border-gray-light/30 md:pe-8">
                        <div className="z-20 inline-block bg-gray-chat px-2 text-xs text-gray-clear">
                            {`${new Date(time).toLocaleDateString([], {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                            })}`}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FirstDayMessage;
