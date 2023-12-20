import Main from "../features/Home/components/Main";
import NavBar from "../layouts/NavBar";

function Home() {
    return (
        <>
            <NavBar />
            <div className={`flex h-[calc(100svh-120px)] items-center`}>
                <Main />
            </div>
        </>
    );
}

export default Home;
