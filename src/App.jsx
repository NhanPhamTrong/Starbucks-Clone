import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppRoutes } from "./pages";

const App = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <main>
                <Routes location={location} key={location.pathname}>
                    {AppRoutes.map((route, index) => {
                        const { path, element } = route;
                        return <Route path={path} element={element} />;
                    })}
                </Routes>
            </main>
        </>
    )
}

export default App;