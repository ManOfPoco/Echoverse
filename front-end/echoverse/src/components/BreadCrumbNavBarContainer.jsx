function BreadCrumbNavBarContainer({ children }) {
    return (
        <div className="flex items-center truncate gap-3 border-b border-black-dark shadow-lg">
            {children}
        </div>
    );
}

export default BreadCrumbNavBarContainer;
