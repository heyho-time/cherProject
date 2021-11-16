import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import ListProductView from "./page/addProduct/listProduct/ListProductView";
import AddProductView from "./page/addProduct/addProduct/AddProductView";
import EditProductView from "./page/addProduct/EditProduct/EditProductView";
import Nav from "./page/common/Nav";
const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
            <Route exact path="/addproduct" component={AddProductView} />
            <Route exact path="/editproduct" component={EditProductView} />
            <Route
            exact
            path="*"
            component={() => (
              <>
                <Nav />
                <Route exact path="/" component={ListProductView} />
              </>
            )}
            />
            </Switch>
        </Router>
    );
};

export default App;
