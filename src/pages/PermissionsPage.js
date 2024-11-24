import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PermissionsPage = () => {
    const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);
    const [newPermission, setNewPermission] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSave = () => {
        if (newPermission && !permissions.includes(newPermission)) {
            setPermissions([...permissions, newPermission]);
        }
        setNewPermission("");
        setShowModal(false);
    };

    const handleDeletePermission = (permissionToDelete) => {
        setPermissions(permissions.filter(permission => permission !== permissionToDelete));
    };

    return (
        <div>
            <h2>Manage Permissions</h2>
            <button className="btn btn-primary mb-3" onClick={handleShow}>
                Add Permission
            </button>

            <ul className="list-group">
                {permissions.map((permission, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {permission}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeletePermission(permission)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* Add Permission Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Permission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formPermissionName">
                            <Form.Label>Permission Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter permission name"
                                value={newPermission}
                                onChange={(e) => setNewPermission(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Permission
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PermissionsPage;
