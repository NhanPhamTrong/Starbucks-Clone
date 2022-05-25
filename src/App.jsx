import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./pages";

const App = () => {

    return (
        <>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { path, element } = route;
                    return <Route key={index} path={path} element={element} />
                })}
            </Routes>
        </>
    )
}

export default App;