import { useState } from "react";
import "./Selector.css"

function SelectItem(props) {
    const datum = props.data.map((k) => {
        return {
            isSelected: false,
            text: k
        }
    });
    const [selectedData, setselectedData] = useState([])
    const [data, setData] = useState(datum);

    const handleClick = (k) => {
        k.isSelected = !k.isSelected;
        setData([...data])
    }

    const handleDataTransfer = () => {
        const filteredData = data.filter((l) => l.isSelected);
        const checkedData = filteredData.map((m) => {
            return { ...m, isSelected: false }
        });
        setselectedData([...selectedData, ...checkedData]);
        const restData = data.filter((n) => n.isSelected === false);
        setData(restData)
    }
    const handleLeftTransfer = () => {
        const filteredData = selectedData.filter((l) => l.isSelected);
        const checkedData = filteredData.map((m) => {
            return { ...m, isSelected: false }
        });
        setData([...data, ...checkedData])
        const restData = selectedData.filter((n) => n.isSelected === false);
        setselectedData(restData)
    }
    const handleAllRightToleft = () => {
        setselectedData([...selectedData, ...data])
        setData([])
    }
    const handleAllLeftToRight = () => {
        setData([...data, ...selectedData])
        setselectedData([])
    }




    return (
        <>
            <h3>Select your Items</h3>
            <div className="selectcontainer">
                <div className="containerOne" >
                    {data.map((k) => <div onClick={() => { handleClick(k); }} className={k.isSelected === true ? 'selectData' : ''}>{k.text}</div>)}
                </div>
                <div className="containerTwo">
                    <button onClick={handleAllRightToleft}>{'>>'}</button>
                    <button onClick={handleDataTransfer}>{'>'}</button>
                    <button onClick={handleLeftTransfer} >{'<'}</button>
                    <button onClick={handleAllLeftToRight}>{'<<'}</button>
                </div>
                <div className="containerThree">
                    {selectedData.map((k) => <div onClick={() => { handleClick(k); }} className={k.isSelected === true ? 'selectData' : ''}>{k.text}</div>)}

                </div>
            </div>
        </>
    )
}
export default SelectItem;








