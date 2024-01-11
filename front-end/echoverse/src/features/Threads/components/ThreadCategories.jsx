import ThreadCategory from "./ThreadCategory";

export function ThreadCategories({ categories }) {
    return (
        <div className="flex gap-3 truncate border-b border-gray-light px-2.5 py-2.5 text-xs text-gray-light">
            {categories.map((category, i) => (
                <ThreadCategory
                    category={category}
                    isNextCategory={i + 1 !== categories.length}
                    key={category}
                />
            ))}
        </div>
    );
}

export default ThreadCategories;
