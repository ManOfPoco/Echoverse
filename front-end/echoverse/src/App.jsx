import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./layouts/AppLayout";
import UserThreadsLayout from "./layouts/UserThreadsLayout";
import UserSavedThreadsLayout from "./layouts/UserSavedThreadsLayout";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SetNewPassword from "./pages/SetNewPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Profile from "./pages/Profile";
import UserGames from "./pages/UserGames";
import UserThreads from "./pages/UserThreads";
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
import Threads from "./pages/Threads";
import GameThreads from "./pages/GameThreads";
import SpecificThread from "./pages/SpecificThread";
import UserGameThreads from "./pages/UserGameThreads";
import UserSavedThreads from "./pages/UserSavedThreads";
import UserSavedGameThreads from "./pages/UserSavedGameThreads";
import GameThreadsChannel from "./pages/GameThreadsChannel";
import DirectPage from "./pages/DirectPage";
import Direct from "./pages/Direct";

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
                        path: "threads",
                        element: <UserThreadsLayout />,
                        children: [
                            {
                                index: true,
                                element: <UserThreads />,
                            },
                            {
                                path: "game-threads",
                                element: <UserGameThreads />,
                            },
                        ],
                    },
                    {
                        path: "saved",
                        element: <UserSavedThreadsLayout />,
                        children: [
                            {
                                index: true,
                                element: <UserSavedThreads />,
                            },
                            {
                                path: "game-threads",
                                element: <UserSavedGameThreads />,
                            },
                        ],
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
            {
                path: "/explore/threads",
                element: <Threads />,
            },
            {
                path: "/:username/threads/:id",
                element: <SpecificThread />,
            },
            {
                path: "/games/game-threads",
                element: <Navigate replace to="/games" />,
            },
            {
                path: "/games/game-threads/:game",
                element: <GameThreads />,
            },
            {
                path: "/games/game-threads/:game/:threadId",
                element: <GameThreadsChannel />,
            },
            {
                path: "/direct",
                element: <DirectPage />,
                children: [
                    {
                        path: ":chatId",
                        element: <Direct />,
                    },
                ],
            },
        ],
    },
]);

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </>
    );
}

export default App;
