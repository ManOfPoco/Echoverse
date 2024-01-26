function ThreadMoreOption({ onClick, color, children }) {
    return (
        <div className="hover:bg-gray-clear/30" onClick={onClick}>
            <div className={`px-4 py-3 font-medium ${color}`}>{children}</div>
        </div>
    );
}

export default ThreadMoreOption;
