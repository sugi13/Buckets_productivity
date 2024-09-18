import "../../App.css";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "akar-icons";

export default function HeroSection() {
  return (
    <div className="Hero_section mt-36 flex items-center flex-col justify-center gap-5">
        <h1 className="font-Poppins text-5xl font-bold  animate__animated animate__fadeInDown">Track your Productivity Online.</h1>
        <p className="animate__animated animate__slideInUp text-gray-800 font-normal text-md">Organize your <strong className="text-orange-400">Habits</strong>, <strong className="text-green-400">Todo</strong>    <strong className="text-blue-500">Daily Tasks</strong>, <strong className="text-red-400">Notes</strong>, <strong className="text-purple-400">Travel lists</strong> in one place.</p>
        <Link to= '/register' className="flex items-center gap-2 bg-black px-4 py-2 rounded-md text-white font-light shadow-lg">Start Now <ArrowUpRight size={20}/></Link>
    </div>
  )
}
