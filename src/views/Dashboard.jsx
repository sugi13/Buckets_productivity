import "../App.css";
import Sidebar from "../components/Dashboard/Sidebar";
import StatusColumn from "../components/Dashboard/StatusColumn";


export default function Dashboard() {

  return (
    <div className="Dashboard h-screen">
      <div className="Dash-nav flex items-center justify-around p-5">
        <div className="create-bucket-btn bg-orange-500 px-4 py-1 rounded-sm">
          <button className="text-sm font-Inter text-white font-normal">Create bucket</button>
        </div>
        <div className="brand">
          <h1 className="font-Inter font-bold text-orange-500">Buckets</h1>
        </div>
        <div className="user-profile">
          <p>User Name</p>
        </div>
      </div>
      <div className="Dash_components">
        <Sidebar/>
        <StatusColumn/>
      </div>
    </div>
  )
}

