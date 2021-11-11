import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import View_Add_product from "../../app/view/page/add_product/view_Add_Product/View_Add_product";
import View_Add_newProduct from "../../app/view/page/add_product/view_Add_newProduct/view_Add_newProduct";

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={View_Add_product} />
                <Route exact path="/add_new_product" component={View_Add_newProduct} />
            </Switch>
        </Router>
    );
};

export default App;
