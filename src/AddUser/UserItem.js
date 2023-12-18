const UserItem = ({ item, removeData }) => {
    return (<li>
        {item.firstName} {item.lastName}
        {removeData && <button className="delete" onClick={(evt) => {
            removeData(item.id);
        }}>delete</button>}
    </li>);
}
export default UserItem;