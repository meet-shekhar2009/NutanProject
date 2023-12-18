import React, { ReactDOM, useState } from "react";
import UserItem from './UserItem';
function UserDetail({ fixedData, datakey }) {
    const [control, setControl] = useState({
        firstName: '',
        lastName: ''
    });


    const [item, setItem] = useState('');

    const [list, setList] = useState(fixedData);

    const handleControlChange = (event) => {
        setControl({ ...control, [event.target.name]: event.target.value });

    }

    const handleChange = (event) => {
        setItem(event.target.value)
    }
    const SearchData = (evt) => {
        const filteredData = list.filter((l) => {
            return l.firstName.toLowerCase().startsWith(item.toLowerCase())
        })
        setList(filteredData)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list, {
            ...control,
            id: Math.random()
        }]);

    }
    const removeData = (id) => {
        const updatedData = list.filter((l) => {
            return l.id !== id;
        });

        setList(updatedData);

    };
    return (
        <div>
            <input value={item} placeholder='search here' onChange={handleChange}></input>
            <button onClick={SearchData}>SEARCH</button>
            <ul>
                {list.map((k) => <UserItem item={k} removeData={removeData} />)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input value={control.firstName} name="firstName" placeholder="first name" onChange={handleControlChange} />
                <input value={control.lastName} name="lastName" placeholder="last name" onChange={handleControlChange} />

                <button type="submit" >Add</button>
            </form>
        </div >
    )

}
export default UserDetail;







