import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from "../Movies/Loader";

function FormView() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setloading] = useState(false);

    const handleclick = (event) => {
        settitle(event.target.value)
    }
    const handleChange = (event) => {
        setDescription(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('https://playground-service.onrender.com/api/add', { title, description }).then((response) => {
            navigate('/notes');
        });
    };
    const editApidata = async () => {
        setloading(true)
        const response = await axios.get('https://playground-service.onrender.com/api/' + id, {
            headers:
            {
                'dbName': 'noteit',
            },
        });
        setloading(false)
        return response.data;
    }



    useEffect(() => {
        if (id) {
            (async () => {
                const finalData = await editApidata();
                settitle(finalData.title)
                setDescription(finalData.description)
            })();
        }
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input placeholder="title" value={title} onChange={handleclick} />
                <input placeholder="description" value={description} onChange={handleChange} />
                <button type="submit">save</button>
            </form>

        </div>
    )
};
export default FormView;



