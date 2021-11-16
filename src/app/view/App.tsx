import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import Nav from "./page/common/Nav";
import View_Add_product from "../../app/view/page/add_product/view_Add_Product/View_Add_product";
import View_Add_newProduct from "../../app/view/page/add_product/view_Add_newProduct/view_Add_newProduct";
import UserView from "./page/sign-in/UserView";
import CheckoutView from "./page/checkout/CheckoutView/CheckoutView";
import ProductOptionView from "./page/checkout/ProductOptionView/ProductOptionView";

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path="/" component={View_Add_product} />
                <Route exact path="/add_new_product" component={View_Add_newProduct} />
                <Route exact path="/signinview" component={UserView} />
                <Route exact path="/checkout" component={CheckoutView} />
                <Route exact path="/product_option/:id" component={ProductOptionView} />
            </Switch>
        </Router>
    );
};

export default App;
