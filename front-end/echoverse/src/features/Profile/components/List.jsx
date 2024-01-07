function List({ data }) {
    return (
        <>
            {data.map(
                (platform, i) =>
                    `${platform}${data.length !== i + 1 ? `, ` : " "}`
            )}
        </>
    );
}

export default List;
