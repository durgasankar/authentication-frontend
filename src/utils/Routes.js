
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { UserInfoPage } from "../pages/UserInfoPage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Auth Routes */ }
                <Route path='/' exert element={ <UserInfoPage /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/sign-up" element={ <Signup /> } />
            </Routes>
        </Router>
    );
}
