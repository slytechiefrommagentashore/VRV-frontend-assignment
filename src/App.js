import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import PermissionsPage from "./pages/PermissionsPage";


const App = () => {
    return (
        <Router>
            <div className="container my-4">
                {/* Header */}
                <header className="d-flex justify-content-between align-items-center mb-4">
                        <nav>
                            <Link to="/" className="mx-2">Dashboard</Link>
                            <Link to="/users" className="mx-2">Users</Link>
                            <Link to="/roles" className="mx-2">Roles</Link>
                            <Link to="/permissions" className="mx-2">Permissions</Link>
                        </nav>
                        <button className="btn btn-danger">Logout</button>
                    </header>
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/roles" element={<RolesPage />} />
                    <Route path="/permissions" element={<PermissionsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
