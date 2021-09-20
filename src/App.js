import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const Hats = (props) => {
  console.log(props);
  return <div>Hats</div>;
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={Hats} />
      <Route exact path="/men" component={Hats} />
    </Switch>
  );
};

export default App;
