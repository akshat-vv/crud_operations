import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();

    const getDataFromLocal = () => {
        const id = localStorage.getItem('id');
        const name = localStorage.getItem('name');
        const contact = localStorage.getItem('contact');
        setContact(contact);
        setName(name);
        setId(id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(id);
    }

    const updateData = (id) => {
        axios.put(`https://65c50db5dae2304e92e3e1cb.mockapi.io/crud/crud/${id}`, {
            name: name,
            contact: contact
        }).then(
            navigate('/read')
        )
    }

    useEffect(() => {
        getDataFromLocal();
    }, [])


    return (
        <>
            <h2>Update</h2>
            <div className='col-6'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameLabel" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameLabel" aria-describedby="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactLabel" className="form-label">Contact</label>
                        <input type="text" className="form-control" id="contactLabel" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </>

    )
}

export default Update