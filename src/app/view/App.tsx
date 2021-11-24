import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import Nav from "./page/common/Nav";
import View_Add_product from "../../app/view/page/add_product/view_Add_Product/View_Add_product";
import view_Add_newProduct from "./page/add_product/view_Add_newProduct/view_Add_newProduct";
import UserView from "./page/sign-in/UserView";
import CheckoutView from "./page/checkout/CheckoutView/CheckoutView";
import ProductOptionView from "./page/checkout/ProductOptionView/ProductOptionView";
import EditOptionView from "./page/checkout/EditOptionView/EditOptionView";
import CategoryListView from "./page/add_category/CategoryListView/CategoryListView";
import AddCategoryView from "./page/add_category/AddCategoryView/AddCategoryView";
import EditCategoryView from './page/add_category/EditCategoryView/EditCategoryView';
import Toast from "./page/common/Toast";

const App: React.FC = () => {
    const [ toastStatus, setToastStatus ] = useState<boolean>(false);

    const getToastStatus = (status: boolean) => {
        setToastStatus(status);

        setTimeout(() => {
            setToastStatus(false);
        }, 2000);
    }

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/signinview" component={UserView} />
                <Route exact path="/edit_option/:id" component={EditOptionView} />
                <Route exact path="/edit_category/:id" component={EditCategoryView} />
                <Route exact path="/add_new_product" component={view_Add_newProduct} />
                <Route exact path="/add_category">
                    <AddCategoryView getToastStatus={getToastStatus} />
                </Route>
                <>
                    <Nav />
                    <Route exact path="/add_product" component={View_Add_product} />
                    <Route exact path="/checkout" component={CheckoutView} />
                    <Route exact path="/category_list" component={CategoryListView} />
                    <Route exact path="/product_option/:id" component={ProductOptionView} />
                </>
            </Switch>
            {toastStatus && <Toast getToastStatus={getToastStatus} />}
        </Router>
    );
};

export default App;
