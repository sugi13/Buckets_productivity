import "../../App.css";
import {Dashboard, Person, PersonAdd, SettingsHorizontal,Home, SignOut, Thunder} from "akar-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Side_bar w-auto flex flex-col gap-10 font-Inter font-normal text-xs">
      <div className="dash_header">
        <p className = 'flex items-center justify-between'>Buckets <Thunder size = {14}/></p>
      </div>
      <div className="Dash_routes flex flex-col gap-11">
        <p className="flex items-center gap-2"><Dashboard size={14} /><Link to = '/'>Dashboard</Link></p>
        <p className="flex items-center gap-2"><Person size={14}/><Link to = '/yourBaskets'>Your Baskets</Link></p>
        <p className="flex items-center gap-2"><PersonAdd size={14} /><Link to = '/newBasket'>New Basket</Link></p>
        <p className="flex items-center gap-2"><Home size={14} /><Link to = '/profile'>Your Profile</Link></p>
        <p className="flex items-center gap-2"><SettingsHorizontal size={14} /><Link to = '/settings'>Settings</Link></p>
        <p className="flex items-center gap-2 text-blue-500"><SignOut size={14} />Sign out</p>
      </div>
    </div>
  )
}
