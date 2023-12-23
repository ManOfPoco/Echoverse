import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import AppLayout from "./layouts/AppLayout";
import Authentication from "./pages/Authentication";
import SetNewPassword from "./pages/SetNewPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";

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
                element: <Authentication action='signUp' key='signUp' />,
            },
            {
                path: "/login",
                element: <Authentication action='login' key='login' />,
            },
            {
                path: "/set-new-password",
                element: <SetNewPassword />
            },
            {
                path: "/password-reset-success",
                element: <PasswordResetSuccess />
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
