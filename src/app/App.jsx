import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import TempCard from "./components/ui/tempCard";
import Favorites from "./pages/favorites";
import Main from "./pages/main";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/member/:id?" component={TempCard}/>
            </Switch>
        </>
    );
}

export default App;
