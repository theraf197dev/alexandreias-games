import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router";
import routes from "../routes";
import { useEffect } from "react";

const App = ({
    getTranslations,
    translations,
}) => {
    const router = createBrowserRouter(routes as unknown as RouteObject[]);

    useEffect(() => {
        getTranslations('en');
    }, []);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
