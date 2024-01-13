import NewThreadImage from "./NewThreadImage";

function NewThreadImagesList({ state, dispatch }) {
    const { newThreadImages } = state;

    return (
        <div
            className={`flex w-full gap-2 overflow-x-auto sm:max-w-[524px] ${
                newThreadImages.length > 0 ? "pb-2" : ""
            }`}
        >
            {newThreadImages.map((newThreadImg, index) => (
                <NewThreadImage
                    newThreadImg={newThreadImg}
                    index={index}
                    state={state}
                    dispatch={dispatch}
                    key={index}
                />
            ))}
        </div>
    );
}

export default NewThreadImagesList;
