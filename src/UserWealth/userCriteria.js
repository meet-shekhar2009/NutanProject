function UserCriteria({ Adduser, users, setUsers }) {
    const handelMoneyMoltiplier = () => {
        const doubleAmount = users.map((k) => {
            return {
                name: k.name,
                wealth: k.wealth * 2
            }
        })
        setUsers(doubleAmount)
    }

    const handelMillioners = () => {
        const millionersData = users.filter((l) => {
            return l.wealth > 100000
        })
        setUsers(millionersData)
    }

    const handelSortedData = () => {
        const sortedData = users.sort((a, b) => {
            return a.wealth - b.wealth;
        })
        setUsers([...sortedData])
    }

    const handelTotalWealth = () => {

        const totalwealth = users.reduce((a, b) => (a + b.wealth), 0);
        console.log(users);
        const totalobj = {
            name: 'Total',
            wealth: totalwealth
        }
        users.push(totalobj);
        setUsers([...users])
    }
    return (
        <div>
            <div onClick={Adduser} >
                <h4>Add User</h4>
            </div>
            <div>
                <h4 onClick={handelMoneyMoltiplier}>Double Money</h4>
            </div>
            <div>
                <h4 onClick={handelMillioners}>Show only Millioners</h4>
            </div>
            <div>
                <h4 onClick={handelSortedData}>Sort by Richest</h4>
            </div>
            <div>
                <h4 onClick={handelTotalWealth}>calculate entire wealth</h4>
            </div>
        </div>
    )
}
export default UserCriteria;







