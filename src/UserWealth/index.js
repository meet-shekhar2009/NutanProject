import axios from "axios";
import UserCriteria from "./userCriteria";
import { useEffect, useState } from "react";
import './UserWealth.css'
function UserDetails() {

    const [users, setUsers] = useState([])
    const apiData = async () => {
        const response = await axios.get('https://randomuser.me/api');
        console.log(response.data)
        return response.data.results[0]
    }

    async function Adduser() {
        const finalData = await apiData();
        const name = finalData.name.title + ' ' + finalData.name.first + ' ' + finalData.name.last;
        const wealth = Math.floor(Math.random() * 100000);
        setUsers([...users, { name, wealth }]);
    }
    return (
        <div>
            <div className="heading">
                <h3>User Wealth Data</h3>
            </div>
            <div className="main-container">
                <div className="index-container">
                    <UserCriteria users={users} Adduser={Adduser} setUsers={setUsers} />
                </div>
                <div className="api-data-container">
                    <div className="class-heading">
                        <div className="username"><h4>User Name  </h4></div>
                        <div className="userwealth"><h4> User Wealth</h4></div>
                    </div>

                    {users.map((k) => <div className="data-container">
                        <div className="name-container">{k.name}</div>
                        <div className="wealth-container">{k.wealth}</div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default UserDetails;



















