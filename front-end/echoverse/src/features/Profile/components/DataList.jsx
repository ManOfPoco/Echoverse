import List from "./List";

function DataList({ title, data, img, alt }) {
    return (
        <div className="flex">
            <p>{title}</p>
            <img draggable={false} src={img} alt={alt} />
            &nbsp; - &nbsp;
            <p>
                <List data={data} />
            </p>
        </div>
    );
}

export default DataList;
