import React, { useState } from "react";
import { Table } from 'flowbite-react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Rizky",
            email: "rizky@gmail.com",
            age: 20
        },
        {
            id: 2,
            name: "Rizky",
            email: "rikyzyf@gmail.com",
            age: 20
        }
    ])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white p-3 rounded">
                <Link to="/adduser" className="btn btn-success">Add user</Link>
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Email       
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Age
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Action
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map((user) => (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.email}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.age}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="columns-2">
                                            <Link
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                to="/edituser"
                                            >
                                                <p>
                                                    Edit
                                                </p>
                                            </Link>
                                            <button
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                <p>
                                                    Delete
                                                </p>
                                            </button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default Users;