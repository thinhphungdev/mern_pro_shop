import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Layouts/Header.js";
import Footer from "./components/Layouts/Footer.js";
import HomeScreen from "./components/pages/Home.js";
import ProductDetail from "./components/pages/ProductDetail.js";
import NotFound from "./components/pages/NotFound.js";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/" exact>
                <HomeScreen />
              </Route>

              <Route path="/product/:id" component={ProductDetail} exact></Route>

              <Route path="*">
                 <NotFound />
              </Route>
            </Switch>
          </Container>
        </main>

        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
