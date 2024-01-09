import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SetNewPassword from "./pages/SetNewPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import UserGames from "./pages/UserGames";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import EditServerProfile from "./pages/EditServerProfile";
import Security from "./pages/Security";
import Privacy from "./pages/Privacy";
import BlockedAccounts from "./pages/BlockedAccounts";
import Games from "./pages/Games";
import People from "./pages/People";
import PeopleForYou from "./pages/PeopleForYou";
import PeopleHistory from "./pages/PeopleHistory";

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
                        element: <UserGames />,
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
                        path: "",
                        element: <Navigate replace to="edit" />,
                    },
                    {
                        index: true,
                        path: "edit",
                        element: <EditProfile />,
                    },
                    {
                        path: "server_profile",
                        element: <EditServerProfile />,
                    },
                    {
                        path: "privacy",
                        element: <Privacy />,
                    },
                    {
                        path: "security",
                        element: <Security />,
                    },
                    {
                        path: "blocked_accounts",
                        element: <BlockedAccounts />,
                    },
                ],
            },
            {
                path: "/games",
                element: <Games />,
            },
            {
                path: "/explore/people",
                element: <People />,
                children: [
                    {
                        path: "",
                        element: <Navigate replace to="for-you" />,
                    },
                    {
                        index: true,
                        path: "for-you",
                        element: <PeopleForYou />,
                    },
                    {
                        path: "history",
                        element: <PeopleHistory />,
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
