
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";

export default function HomeLayout() {

  let AuthUser = JSON.parse(localStorage.getItem("DoerName"));

  return AuthUser ? <Dashboard/> : <Home/>
}
