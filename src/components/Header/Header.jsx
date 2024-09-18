import "../../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header flex items-center justify-around m-5 font-Poppins">
      <h1 className="text-2xl font-black">Baskets</h1>
      <Link to= '/' className="Nav-Link">How it work</Link>
    </div>
  )
}
