import Login from "../features/Authentication/components/Login";
import SignUp from "../features/Authentication/components/SignUp";

function Authentication({ action }) {
    return (
        <>
            <div className="mx-auto max-w-[1440px]">
                <div className="xl:grid-cols-authentication xl:grid">
                    {action === "login" ? (
                        <>
                            <div className="py-5 xl:z-10 xl:col-start-4 xl:col-end-12 xl:row-start-1 xl:row-end-1">
                                <Login action={action} />
                            </div>
                            <div className="hidden py-5 xl:col-start-10 xl:col-end-[18] xl:row-start-1 xl:row-end-1 xl:block">
                                <SignUp action={action} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="hidden py-5 xl:col-start-4 xl:col-end-12 xl:row-start-1 xl:row-end-1 xl:block">
                                <Login action={action} />
                            </div>
                            <div className="py-5 xl:z-10 xl:col-start-10 xl:col-end-[18] xl:row-start-1 xl:row-end-1">
                                <SignUp action={action} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Authentication;
