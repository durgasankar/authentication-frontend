
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { UserInfoPage } from "../pages/UserInfoPage";
import { PrivateRoute } from "./PrivateRoute";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/'
                    element={
                        <PrivateRoute>
                            <UserInfoPage />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={ <Login /> } />
                <Route path="/sign-up" element={ <Signup /> } />
            </Routes>
        </Router>
    );
}
