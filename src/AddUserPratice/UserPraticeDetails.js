import { fixedData1 } from '../constants.js'
import { useState } from 'react';
import UserDetails from './UserDetails.js';
import UserForm from './UserForm.js';
let rowToBeEdited = null;
const UserPraticeDetails = () => {

    const [mode, setMode] = useState('Add');
    const [inputs, setInputs] = useState({
        fName: '',
        lName: '',
        contact: '',
    })


    const [list, setList] = useState(fixedData1)

    const removeData = (l) => {
        const filteredData = list.filter((f) => {
            return f.id !== l.id
        })
        setList(filteredData);
    }
    const updatedData = (item) => {
        setInputs({ fName: item.firstName, lName: item.lastName, contact: item.Mobile });

        rowToBeEdited = item;
        setMode('Update');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (mode === 'Add') {
            setList([...list, {
                firstName: inputs.fName,
                lastName: inputs.lName,
                id: Math.random(),
                Mobile: inputs.contact
            }])
        }
        else {
            const dataToBeEdited = list.find((f) => {
                return f.id === rowToBeEdited.id;
            });
            if (dataToBeEdited) {
                dataToBeEdited.firstName = inputs.fName;
                dataToBeEdited.lastName = inputs.lName;
                dataToBeEdited.Mobile = inputs.contact;
            }

        }
        setInputs({ fName: '', lName: '', contact: '' });
        setMode('Add')
    }


    return (
        <div>

            <UserForm
                inputs={inputs}
                setInputs={setInputs}
                mode={mode}
                setMode={setMode}
                handleSubmit={handleSubmit}
            />

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {list.map((l) => <UserDetails removeData={removeData} item={l} updatedData={updatedData} />)}
                </tbody>
            </table>
        </div>



    )
}
export default UserPraticeDetails;