import { useState } from "react"
const TextList = ({ title, data }) => {

    return (<div>
        <h5 className="text-heading underline" >{title}</h5>
        <ul>
            {data.slice(0, 3).map((l) => <li>{l.name}</li>)}

        </ul>

    </div>)
}
export default TextList;