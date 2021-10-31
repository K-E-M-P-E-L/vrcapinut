import { Switch, Route } from "react-router-dom"
import { AvatarsList } from "./AvatarsList"
import { CreateAvatar } from "./CreateAvatar"
import { UpdateAvatar } from "./UpdateAvatar"
import { NavBar } from "./shared/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/update-avatar">
          <UpdateAvatar/>
        </Route>
        <Route path="/create-avatar">
          <CreateAvatar/>
        </Route>
        <Route path="/">
          <AvatarsList/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
