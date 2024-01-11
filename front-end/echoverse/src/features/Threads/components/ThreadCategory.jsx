function ThreadCategory({ category, isNextCategory }) {
    return (
        <>
            <div className="w-max" key={category}>
                {category}
            </div>
            {isNextCategory && <span>•</span>}
        </>
    );
}

export default ThreadCategory;
