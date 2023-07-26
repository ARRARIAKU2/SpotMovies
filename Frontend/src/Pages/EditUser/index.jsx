import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Label, TextInput } from 'flowbite-react';

function EditUser() {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-[500px] bg-white p-3 rounded">
                <h1>Edit User</h1>
                <form className="">
                    <div>
                        <div className="mb-3 block">
                            <Label
                                htmlFor="email"
                                value="Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="Your email"
                            type="email"
                            className="mb-3"
                        />
                    </div>
                    <div>
                        <div className="mb-3 block">
                            <Label
                                htmlFor="password   "
                                value="Password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            placeholder="Your Password"
                            type="password"
                            className="mb-3"
                        />
                    </div>
                    <div>
                        <div className="mb-3 block">
                            <Label
                                htmlFor="age"
                                value="Age"
                            />
                        </div>
                        <TextInput
                            id="age"
                            placeholder="Your age"
                            type="number"
                            className="mb-3"
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;