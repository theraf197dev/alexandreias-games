import HomeConnector from "./home/HomeConnector";
import Error from "./error/Error";

export default [
    {
        path: "/",
        lazy: {
            Component: async () => HomeConnector,
        },
        ErrorBoundary: Error,
        // HydrateFallback: <p>Loading</p>,
    },
];