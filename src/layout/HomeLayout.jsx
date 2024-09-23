import Home from "../views/Home";
import Dashboard from "../views/Dashboard";

export default function HomeLayout() {

  let IsAuth = JSON.parse(localStorage.getItem('Registered_email'));

  return (
    IsAuth ? <Dashboard/> : <Home/>
  )
}
