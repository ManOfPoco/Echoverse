function DataList({ title, data, img, alt }) {
    return (
        <div className="flex">
            <p>{title}</p>
            <img src={img} alt={alt} />
            &nbsp; - &nbsp;
            <p>
                {data.map(
                    (platform, i) =>
                        `${platform}${data.length !== i + 1 ? `, ` : " "}`
                )}
            </p>
        </div>
    );
}

export default DataList;
