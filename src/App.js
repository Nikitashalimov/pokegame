import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import cn from "classnames";

import HomePage from "./routes/HomePage/HomePage";
import GamePage from "./routes/GamePage/GamePage";
import AboutPage from "./routes/AboutPage/AboutPage";
import ContactPage from "./routes/ContactPage/ContactPage";
import NotFound from "./routes/NotFound/NotFound";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/Footer";

import s from './App.module.css';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route path="/404" component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  )
}

export default App;