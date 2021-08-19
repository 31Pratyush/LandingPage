import React from 'react';
import { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
function FormLanding() {
    const [name, setName] = useState(" ");
    const [number, setNumber] = useState();
    function HandleSubmit(e) {
        e.preventDefault()
        if (name === " " || number === " ") {
            toast.warn("Fill the form properly!")
        }
        else {
            toast.success(`Form Submitted for ${name}, Have a great day!`)
            setName("");
            setNumber(" ")
        }
    }
    return (
        <Form className="my-5" id="form">
            <h4>Register Here</h4>
            <br />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => { setName(e.target.value) }}  required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} required />
            </Form.Group>
            <Form.Label>Student's Grade</Form.Label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Select Grade</option>
                <option value="1">5th</option>
                <option value="2">6th</option>
                <option value="3">7th</option>
                <option value="4">8th</option>
                <option value="5">9th</option>
                <option value="6">10th</option>
                <option value="7">11th</option>
                <option value="8">12th</option>
                <option value="9">12+</option>

            </select>
            <Form.Label>Choose Your Batch</Form.Label><br/>
            <input type="radio" className="btn-check" name="options-outlined" id="primary-outlined" defaultChecked />
            <label className="btn btn-outline-primary" id="date" >13th Aug - 15th Aug</label>
            <input type="radio" className="btn-check" name="options-outlined" id="primary-outlined" />
            <label className="btn btn-outline-primary">20th Aug - 22nd Aug</label>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Get reminder on whatsapp" />
            </Form.Group>
            <Button onClick={HandleSubmit} variant="outline-primary" size="lg">
                Book a Workshop
            </Button>
        </Form>
    );
}
export default FormLanding;