import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router";
import routes from "../routes";
import { useEffect } from "react";

const App = ({
    fetchTranslations,
    isDesktop,
    translations,
    updateDeviceResolution,
}) => {
    const router = createBrowserRouter(routes as unknown as RouteObject[]);

    useEffect(() => {
        updateDeviceResolution();
        window.addEventListener('resize', updateDeviceResolution);

        return () => window.removeEventListener('resize', updateDeviceResolution);
    }, [updateDeviceResolution]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
