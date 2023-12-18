const UserForm = (props) => {
    const handleNameChange = (event) => {
        props.setInputs({ ...props.inputs, [event.target.name]: event.target.value })
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <input value={props.inputs.fName} name='fName' placeholder='Enter your first name' onChange={handleNameChange} />
            <input value={props.inputs.lName} name='lName' placeholder='Enter your last name' onChange={handleNameChange} />
            <input value={props.inputs.contact} name='contact' placeholder='mobile no.' onChange={handleNameChange} />
            <button>{props.mode}</button>
        </form>
    )
}
export default UserForm;