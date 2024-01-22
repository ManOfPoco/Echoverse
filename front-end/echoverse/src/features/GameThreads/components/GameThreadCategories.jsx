import GameThreadCategory from "./GameThreadCategory";
import GameThreadRemainingCategories from "./GameThreadRemainingCategories";

export function GameThreadCategories({ gameThread, view }) {
    const { categories } = gameThread;
    const categoriesQuantity =
        (view === "list" && 3) || (view === "gallery" && 2);

    return (
        <div className="mx-2.5 flex gap-3 truncate border-b border-gray-light/30 py-2.5 text-xs text-gray-light">
            {categories.slice(0, categoriesQuantity).map((category, i) => (
                <GameThreadCategory
                    category={category}
                    isNextCategory={i + 1 !== categories.length}
                    key={category}
                />
            ))}
            {categories.length >= categoriesQuantity + 1 && (
                <GameThreadRemainingCategories
                    remainingCategories={categories.slice(categoriesQuantity)}
                    key={categories}
                />
            )}
        </div>
    );
}

export default GameThreadCategories;
