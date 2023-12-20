import Button from "../../../components/Button";

import homePageChat from "../../../assets/img/homePageChat.png";

function Main() {
    return (
        <>
            <div className="xl:gap-12.5 xl:mx-25 z-10 mx-2 flex flex-col gap-5 font-archivo-black md:mx-10">
                <h1 className="xl:w-[780px] xl:text-5xl md:w-[540px] md:text-2xl lg:w-[660px] lg:text-3xl ">
                    Connect, Create, Make Friends - Echoing Conversations in
                    Your Digital Universe
                </h1>
                <p className="xl:w-[780px] text-sm tracking-wide md:w-[540px] lg:w-[660px]">
                    Echoverse, your digital haven for meaningful connections and
                    endless possibilities. In the vast expanse of Echoverse,
                    voices resonate, friendships flourish, and creativity knows
                    no bounds
                </p>
                <Button type="orange" to="/sign-up">
                    Sign Up For Free
                </Button>
            </div>
            <img
                draggable="false"
                className="l-0 r-0 absolute left-0 right-0 -z-10 mx-5 ms-auto hidden h-[86%] lg:w-[70%] xl:w-[60%] bg-contain lg:block"
                src={homePageChat}
                alt="chatting friends"
            />
        </>
    );
}

export default Main;
