import { Link } from "react-router-dom";

function DropdownItem({ option, link }) {
    return <Link to={link}>{option}</Link>;
}

export default DropdownItem;
