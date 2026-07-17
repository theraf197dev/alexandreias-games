import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router";
import routes from "../routes";

const App = ({

}) => {
    const router = createBrowserRouter(routes as unknown as RouteObject[]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
