import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import Header from "./Header.js"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Noteit.css'

function Notes() {
    const [notesresult, setNotesresult] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const tableApi = async () => {
        const response = await axios.get('https://playground-service.onrender.com/api', {
            headers:
            {
                'dbName': 'noteit',
            },
        });
        return response.data;
    }
    const handelDelete = async (id) => {
        axios.delete('https://playground-service.onrender.com/api/delete/' + id, {
            headers:
            {
                'dbName': 'noteit',
            },
        }).then(() => {

            loadData();
        });

    }

    async function loadData() {
        setLoading(true);
        const result = await tableApi();
        let formattedreult = Object.entries(result).map((item) => {
            const [id, value] = item;
            return { ...value, id, isChecked: false };
        })
        setNotesresult(formattedreult)
        setLoading(false);
    }
    useEffect(() => {
        loadData();
    }, [])






    const handleAddClick = () => {
        navigate('/noteform');
    }
    const handleEditClick = (id) => {
        navigate('/noteform/' + id);
    }

    if (loading) {
        return <h1>loading...</h1>;
    }

    return (
        <div style={{ width: '100%', padding: 0 }}>
            <div className="notedcontainer">
                <Header loadData={notesresult} />
                <button onClick={handleAddClick}>Add</button>
                <table className="noteit-table">
                    <thead>
                        <tr>
                            <th>items</th>
                            <th>title </th>
                            <th>description</th>
                            <th>edit</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {notesresult && notesresult.map((k) => {
                            return (<tr className={k.isChecked === true ? 'rowcolor' : ''} key={k.id} >
                                <td><input type="checkbox" checked={k.isChecked} onChange={
                                    () => {

                                        k.isChecked = !(k.isChecked)
                                        setNotesresult([...notesresult])
                                    }
                                } />
                                </td>
                                <td> {k.title}</td>
                                <td>{k.description}</td>
                                <td><button onClick={() => { handleEditClick(k.id); }}>edit</button></td>
                                <td><button onClick={() => { handelDelete(k.id) }}>delete</button></td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Notes;


























