import { HashRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/home.js";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
//Hello {subject}!