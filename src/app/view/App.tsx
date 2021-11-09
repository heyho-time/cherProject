import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import View_Add_product from "./page/add_product/View_Add_product";

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={View_Add_product} />

            </Switch>
        </Router>
    );
};

export default App;
