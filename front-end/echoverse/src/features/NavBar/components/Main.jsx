import Button from "../../../components/Button";

import homePageChat from "../../../assets/img/homePageChat.png";

function Main() {
    return (
        <>
            <div className="absolute top-1/2 z-10 translate-y-[-50%]">
                <div className="gap-12.5 mx-25 flex flex-col">
                    <h1 className="font-archivo-black w-[780px] text-5xl ">
                        Connect, Create, Make Friends - Echoing Conversations in
                        Your Digital Universe
                    </h1>
                    <p className="font-archivo-black w-[780px] text-sm tracking-wide">
                        Echoverse, your digital haven for meaningful connections
                        and endless possibilities. In the vast expanse of
                        Echoverse, voices resonate, friendships flourish, and
                        creativity knows no bounds
                    </p>
                    <Button type="orange" to='/sign-up'>Sign Up For Free</Button>
                </div>
            </div>
            <img
                draggable="false"
                className="absolute mx-5 right-0 bottom-0 ms-auto h-4/5 w-3/5"
                src={homePageChat}
                alt="chatting friends"
            />
        </>
    );
}

export default Main;
