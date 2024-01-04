import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SetNewPassword from "./pages/SetNewPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import Games from "./pages/Games";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Security from "./pages/Security";



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
                        element: <Games />,
                    },
                    {
                        path: "saved",
                        element: <Saved />,
                    },
                ],
            },
            {
                path: "/account",
                element: <Settings />,
                children: [
                    {
                        path: '',
                        element: <Navigate replace to="edit" />
                    },
                    {
                        index: true,
                        path: 'edit',
                        element: <EditProfile />,
                    },
                    {
                        path: 'security',
                        element: <Security />,
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
