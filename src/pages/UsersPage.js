import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UsersPage = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Smith", role: "Admin", status: "Active" },
        { id: 2, name: "Sarah Connor", role: "Viewer", status: "Active" },
        { id: 3, name: "Mark Lee", role: "Editor", status: "Inactive" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSave = () => {
        setUsers([...users, { id: users.length + 1, ...newUser }]);
        setNewUser({ name: "", role: "", status: "Active" });
        setShowModal(false);
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <h2>Manage Users</h2>
            <button className="btn btn-primary mb-3" onClick={handleShow}>
                Add User
            </button>

            <table className="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                    <button className="btn btn-warning btn-sm mx-2">Edit</button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Group controlId="formUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formUserRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                        as="select"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    >
                        <option value="">Select role</option>
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Viewer">Viewer</option>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId="formUserStatus" className="mt-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                    value={newUser.status}
                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                >
                    <option>Active</option>
                    <option>Inactive</option>
                </Form.Select>
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
            Save Changes
        </Button>
    </Modal.Footer>
</Modal>
        </div>
    );
};

export default UsersPage;
