import React from 'react'
import {Form,Card,Button} from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Signup() {
    return (
        <>
            <Card>
            <Card.Body className="mb-4">
            <h1 className="text-center">SIGN UP </h1>
            <Form>
            <Form.Group id="email" required>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
            </Form.Group >
             
            <Form.Group id="password" >
            <Form.Label className="mt-2">Password</Form.Label>
                        <Form.Control type="password" required />

            </Form.Group >
             
            <Form.Group id="confirm_password" >
            <Form.Label className="mt-2">Confirm Password</Form.Label>
                        <Form.Control type="password" required />

            </Form.Group >
            <Button className="w-100 mt-4" type="submit" >Submit</Button>
            </Form>
            </Card.Body>
            </Card>
        </>
    )
}

export default Signup
