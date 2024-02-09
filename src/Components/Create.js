import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://65c50db5dae2304e92e3e1cb.mockapi.io/crud/crud',
            {
                name: name, contact: contact
            },
            header
        ).then(() => {
            navigate('/read');
        })
    }

    return (
        <>
            <h2>Create</h2>
            <div className='col-6'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameLabel" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameLabel" aria-describedby="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactLabel" className="form-label">Contact</label>
                        <input type="text" className="form-control" id="contactLabel" onChange={(e) => setContact(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Create