function GameThreadRemainingCategory({ category }) {
    return (
        <div
            className="z-40 flex w-fit items-center gap-1.5 rounded-xls bg-gray-charcoal px-2.5 py-1 text-white"
            key={category}
        >
            {category}
        </div>
    );
}

export default GameThreadRemainingCategory;
