import { useState } from 'react';
import { fixedData1 } from '../constants'
import UserItem from '../AddUser/UserItem'

const SearchUser = () => {
    const [item, setItem] = useState();
    const [list, setList] = useState(fixedData1)
    const SearchData = (evt) => {
        const filteredData = fixedData1.filter((l) => {
            return l.firstName.toLowerCase().startsWith(item.toLowerCase())
        })
        setList(filteredData)
    }
    const handleChange = (event) => {
        setItem(event.target.value)
    }





    return (
        <div>
            <input value={item} placeholder='search here' onChange={handleChange}></input>
            <button onClick={SearchData}>SEARCH</button>

            {list.map((k) => <UserItem item={k} />)
            }




        </div>
    )
};
export default SearchUser;



