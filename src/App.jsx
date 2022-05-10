import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./pages";
import { Footer } from "./components/Footer/Footer";

const App = () => {

    return (
        <>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { path, element } = route;
                    return <Route key={index} path={path} element={element} />
                })}
            </Routes>
            <Footer />
        </>
    )
}

export default App;