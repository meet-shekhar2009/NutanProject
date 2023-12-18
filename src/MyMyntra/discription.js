import { useParams } from "react-router-dom";

const Discription = ({ }) => {
    let { id, name } = useParams();
    return (
        <div>
            <h1>discription {id} {name}</h1>
        </div>
    )
}
export default Discription;