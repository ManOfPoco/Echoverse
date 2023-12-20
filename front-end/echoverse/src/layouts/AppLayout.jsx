import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function AppLayout() {
    const [isNavOnTop, setIsNavOnTop] = useState(true);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 64) {
                console.log(window.scrollY);
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
