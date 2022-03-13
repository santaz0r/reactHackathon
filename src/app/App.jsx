import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Favorites from "./pages/favorites";
import Main from "./pages/main";
import Member from "./pages/member";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/reactHackathon/" exact component={Main} />
                <Route path="/reactHackathon/favorites" component={Favorites} />
                <Route path="/reactHackathon/member/:id?" component={Member} />
            </Switch>
            <ToastContainer />
        </>
    );
}

export default App;
