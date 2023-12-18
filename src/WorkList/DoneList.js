import { useState } from "react";
import "./WorkList.css"
function DoneList(props) {
    const datm = props.task.map((m) => {
        return {
            isChecked: false,
            task: m
        }
    })
    const [list, setList] = useState(datm);
    const [allData, setallDeta] = useState(false)

    const handleChecked = (k) => {
        k.isChecked = !(k.isChecked)
        if (k.isChecked == false) {
            setallDeta(false)
        }

        let hasUncheckedData = list.every(k => k.isChecked);

        setallDeta(hasUncheckedData)
        setList([...list]);
    }
    const handleDelete = (p) => {
        p.isChecked = !(p.isChecked)
        setList([...list]);
    }
    const handleallSelectData = () => {
        setallDeta(!allData)
        const checkedallData = list.map((k) => {
            k.isChecked = !allData
            return { ...k }
        });
        setList(checkedallData)
    }
    return (
        < div className="main-container">
            <div>
                <div className="taskcontainer">
                    <div className="w-containerOne"> Done <input type="checkbox" checked={allData} onChange={handleallSelectData} /></div>
                    <div className="w-containertwo"> Task</div>
                </div>
                {
                    list.map((k, index) => <div className={`taskcontainer ${k.isChecked ? 'c-color' : ''}`}>
                        <div className="w-containerOne"> <input type="checkbox" checked={k.isChecked} onChange={(() => handleChecked(k))} /></div>
                        <div className="w-containertwo"> {k.task}</div>
                    </div>)
                }

            </div>
            <h3>Task Done</h3>
            <div className="chip-container">
                {list.filter(k => k.isChecked).map((p) => <div className="t-container">
                    {p.task}<span className="cross" onClick={(() => handleDelete(p))}>&#10005;</span>
                </div>
                )}</div>
        </div>
    )
}
export default DoneList;















