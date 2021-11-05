import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import UserView from "./page/sign-in/UserView";
import Add_product from "./page/add_product/Add_product";

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/signinview" component={UserView} />
                <Route exact path="/add_product" component={Add_product} />
            </Switch>
        </Router>
    );
};

export default App;
