import Button from "../../../components/Button";

import homePageChat from "../../../assets/img/homePageChat.png";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate()

    return (
        <>
            <div className="z-10 mx-2 flex flex-col gap-5 font-archivo-black md:mx-10 xl:mx-25 xl:gap-12.5">
                <h1 className="md:w-[540px] md:text-2xl lg:w-[660px] lg:text-3xl xl:w-[780px] xl:text-5xl ">
                    Connect, Create, Make Friends - Echoing Conversations in
                    Your Digital Universe
                </h1>
                <p className="text-sm tracking-wide md:w-[540px] lg:w-[660px] xl:w-[780px]">
                    Echoverse, your digital haven for meaningful connections and
                    endless possibilities. In the vast expanse of Echoverse,
                    voices resonate, friendships flourish, and creativity knows
                    no bounds
                </p>
                <Button type='submit' btnClass="orange" action={() => navigate('/sign-up')}>
                    Sign Up For Free
                </Button>
            </div>
            <img
                draggable="false"
                className="l-0 r-0 absolute left-0 right-0 -z-10 mx-5 ms-auto hidden h-[86%] bg-contain lg:block lg:w-[70%] xl:w-[60%]"
                src={homePageChat}
                alt="chatting friends"
            />
        </>
    );
}

export default Main;
