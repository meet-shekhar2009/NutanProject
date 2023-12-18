import { useState } from "react";
const Colours = () => {
    const [color, setColor] = useState('')
    const handleChange = (event) => {
        setColor(event.target.value);
    }
    return (
        <div>
            <div onChange={handleChange}>
                <select>
                    <option className="default">default</option>
                    <option className="Red">Red</option>
                    <option className="green">Green</option>
                    <option className="Yellow">Yellow</option>

                </select>
            </div>

            <div className="color">
                Hello I am {color}
            </div>
        </div>

    )
};
export default Colours;