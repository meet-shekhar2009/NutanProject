import UserDetail from './UserDetail';
import { fixedData1, fixedData2 } from '../constants'
import './style.css';

const User = () => {

    return <>

        <UserDetail fixedData={fixedData1} />
        <UserDetail fixedData={fixedData2} />
    </>
}
export default User;