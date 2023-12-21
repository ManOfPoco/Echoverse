import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import AppLayout from "./layouts/AppLayout";
import Authentication from "./pages/Authentication";

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
                element: <Authentication action='signUp' />,
            },
            {
                path: "/login",
                element: <Authentication action='login' />,
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
