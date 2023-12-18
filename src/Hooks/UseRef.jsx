import { useState, useRef } from "react";

const UseRefExamples = () => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);


    const [user, setUser] = useState({ name: '', age: 0 });
    console.log('render');

    function handleSubmit() {
        setUser({ name: nameRef.current.value, age: ageRef.current.value });
    }
    return <>
        <input type="text" ref={nameRef} placeholder="enter name" />
        <input type="number" ref={ageRef} placeholder="enter age" />
        <button onClick={handleSubmit}>submit</button>

        <div>
            <div>
                Name:{user.name}
            </div>
            <div>
                Age:{user.age}
            </div>
        </div>
    </>
}
export default UseRefExamples;