import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Register from "../views/Register";
import Login from "../views/Login"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
