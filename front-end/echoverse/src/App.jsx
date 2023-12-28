import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SetNewPassword from "./pages/SetNewPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import Games from "./pages/Games";



const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/sign-up",
                element: <Authentication action="signUp" key="signUp" />,
            },
            {
                path: "/login",
                element: <Authentication action="login" key="login" />,
            },
            {
                path: "/set-new-password",
                element: <SetNewPassword />,
            },
            {
                path: "/password-reset-success",
                element: <PasswordResetSuccess />,
            },
            {
                path: "/:username",
                element: <Profile />,
                children: [
                    {
                        index: true,
                        element: <Games action="games" />,
                    },
                    {
                        path: "saved",
                        element: <Saved action="saved" />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
