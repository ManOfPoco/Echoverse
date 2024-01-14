function Menu({ margin = "mb-2", children }) {
    return (
        <div className={`flex justify-center ${margin}`}>
            <div className="z-10 flex w-full items-center justify-stretch sm:w-fit sm:justify-center sm:gap-12">
                {children}
            </div>
        </div>
    );
}

export default Menu;
