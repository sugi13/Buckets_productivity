import Home from "../views/Home";
import Dashboard from "../views/Dashboard";

export default function HomeLayout() {

  let IsAuth = JSON.parse(localStorage.getItem('Registered_email'));
  let IsToken = JSON.parse(localStorage.getItem('access_token'));

  return (
    IsAuth || IsToken ? <Dashboard/> : <Home/>
  )
} 
