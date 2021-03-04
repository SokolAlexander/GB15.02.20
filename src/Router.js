import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chats";
import Profile from "./components/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/profile">profile</Link>
        </li>

        <li>
          <Link to="/chats">chats</Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route
          exact
          path="/chats"
          render={({ match }) => <Chats params={match.params} />}
        />

        <Route
          path="/chats/:chatId"
          render={({ match }) => <Chats params={match.params} />}
        />

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
