import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Create from './Create';

const Read = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://65c50db5dae2304e92e3e1cb.mockapi.io/crud/crud')
            .then((res) => {
                setData(res.data);
            })
    };

    const handleDelete = (id) => {
        axios.delete(`https://65c50db5dae2304e92e3e1cb.mockapi.io/crud/crud/${id}`).then(() => {
            getData();
        })
    }

    const handleEdit = (data) => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('name', data.name);
        localStorage.setItem('contact', data.contact);
    }

    useEffect(() => {
        getData();
    }, []);

    if (data.length < 1) {
        return <h3>Loading</h3>
    }

    return (
        <>
            <div className="d-flex flex-row justify-content-between ">
                <h2>
                    Read
                </h2>
                <Link to="/create">
                    <button className='btn btn-primary'>Create</button>
                </Link>

            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element) => {
                        return (<tr>
                            <th scope="row">{element.id}</th>
                            <td>{element.name}</td>
                            <td>{element.contact}</td>
                            <td>
                                <Link to="/update">
                                    <button className='btn btn-primary' onClick={() => handleEdit(element)}>Edit</button>
                                </Link>
                            </td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(element.id)}>Delete</button></td>
                        </tr>)
                    })
                    }
                </tbody>
            </table >
        </>
    )
}

export default Read