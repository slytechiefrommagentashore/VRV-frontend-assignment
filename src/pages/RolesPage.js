import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RolesPage = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
        { id: 2, name: "Editor", permissions: ["Read", "Write"] },
        { id: 3, name: "Viewer", permissions: ["Read"] },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newRole, setNewRole] = useState({ name: "", permissions: [] });
    const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSave = () => {
        setRoles([...roles, { id: roles.length + 1, ...newRole }]);
        setNewRole({ name: "", permissions: [] });
        setShowModal(false);
    };

    const togglePermission = (permission) => {
        setNewRole((prevRole) => {
            const updatedPermissions = prevRole.permissions.includes(permission)
                ? prevRole.permissions.filter((perm) => perm !== permission)
                : [...prevRole.permissions, permission];
            return { ...prevRole, permissions: updatedPermissions };
        });
    };

    return (
        <div>
            <h2>Manage Roles</h2>
            <button className="btn btn-primary mb-3" onClick={handleShow}>
                Add Role
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Permissions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(", ")}</td>
                            <td>
                                <button className="btn btn-warning btn-sm mx-2">Edit</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Role Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formRoleName">
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter role name"
                                value={newRole.name}
                                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formRolePermissions" className="mt-3">
                            <Form.Label>Permissions</Form.Label>
                            <div>
                                {permissions.map((perm) => (
                                    <Form.Check
                                        key={perm}
                                        type="checkbox"
                                        label={perm}
                                        checked={newRole.permissions.includes(perm)}
                                        onChange={() => togglePermission(perm)}
                                    />
                                ))}
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Role
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RolesPage;
