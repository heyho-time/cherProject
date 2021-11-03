import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import UserView from "./page/sign-in/UserView";

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/signinview" component={UserView} />
            </Switch>
        </Router>
    );
};

export default App;
