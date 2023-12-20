import Main from "../features/NavBar/components/Main";
import NavBar from "../layouts/NavBar";

function Home() {
    return (
        <>
            <NavBar />
            <div className={`flex h-[calc(100svh-120px)] overflow-auto items-center`}>
                <Main />
            </div>
        </>
    );
}

export default Home;
