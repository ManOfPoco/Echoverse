import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

function AppLayout() {
    const [isNavOnTop, setIsNavOnTop] = useState(true);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 64) {
                setIsNavOnTop(false);
            } else setIsNavOnTop(true);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, [isNavOnTop]);

    return (
        <>
            <NavBar isNavOnTop={isNavOnTop} />
            <Outlet />
        </>
    );
}

export default AppLayout;
