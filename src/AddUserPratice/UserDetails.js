const UserDetails = ({ removeData, updatedData, item }) => {

    return <tr>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.Mobile}</td>
        <td>{item.Mobile.length === 10 ? 'India' : 'Others'}</td>
        <td>
            <button onClick={() => removeData(item)}>delete</button>
            <button onClick={() => updatedData(item)} >Edit</button>
        </td>
    </tr>
}
export default UserDetails;