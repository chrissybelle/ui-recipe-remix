import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YourRecipes from "./pages/YourRecipes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import EdamamSearch from "./pages/Edamam";
import NavBar from "./components/Nav";
import AppProvider from "./components/AppProvider"



const App = () =>
<AppProvider>
    <React.Fragment>
    <Router>
      <div>
      <NavBar />
        {/* <Jumbotron /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* Can we certain paths only show if person is logged in? */}
          <Route exact path="/your-recipes" component={YourRecipes} />
          <Route exact path="/recipes/:id" component={Detail} />
          <Route exact path="/edamam" component={EdamamSearch} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </React.Fragment>
    </AppProvider>


export default App;


