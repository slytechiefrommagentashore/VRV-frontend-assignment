import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [users, setUsers] = useState(3);
    const [roles, setRoles] = useState(3);
    const [permissions, setPermissions] = useState(2);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./mockup api/db.json");
                const data = await response.json();
                setUsers(data.users.length);
                setRoles(data.roles.length);
                setPermissions(data.permissions.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            {/* Summary Cards */}
            <section className="row mb-4">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2>{users}</h2>
                            <p>Total Users</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2>{roles}</h2>
                            <p>Total Roles</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2>{permissions}</h2>
                            <p>Total Permissions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section>
                <h2>Quick Actions</h2>
                <button className="btn btn-primary mx-2" onClick={() => handleNavigation("/users")}>Manage Users</button>
                <button className="btn btn-secondary mx-2" onClick={() => handleNavigation("/roles")}>Manage Roles</button>
                <button className="btn btn-success mx-2" onClick={() => handleNavigation("/permissions")}>Manage Permissions</button>
            </section>
        </div>
    );
};

export default Dashboard;
