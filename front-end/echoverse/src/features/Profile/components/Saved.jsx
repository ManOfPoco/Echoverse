import { useOutletContext } from "react-router-dom";

import Menu from './Menu'

function Saved({ action }) {
    const [username] = useOutletContext();

    return (
        <>
            <Menu action={action} username={username} />
        </>
    );
}

export default Saved;
