
import { useEffect, useState } from "react";
function Header(props) {
    const [totalAmnt, settotalAmnt] = useState(10000);
    const [expenses, setExpenses] = useState()

    const handleclick = (event) => {
        settotalAmnt(event.target.value)
        handlesubmit();
    }
    const handlesubmit = () => {

        const expensesAmt = ((props.loadData).filter((l) => !l.isChecked).reduce((a, v) => {

            return parseInt(a) + parseInt(v.description);
        }, 0))

        setExpenses(expensesAmt)
    }

    useEffect(() => {
        handlesubmit();
    }, [props.loadData])

    return (


        <div className="noteitmenu">

            <div>
                <div className="circle"> <i className="fa-solid fa-building-columns"></i></div>
                <h4>Balance</h4>
                <input value={totalAmnt} onChange={handleclick} /></div>
            <div>
                <div className="circle"><i className="fa-solid fa-money-bill"></i></div>
                <h4>TotalBalance</h4>
                <input value={expenses} readOnly />
            </div>
            <div>
                <div className="circle"><i className="fa-solid fa-arrow-down-wide-short"></i></div>
                <h4>expenses</h4>
                <input value={totalAmnt - expenses} readOnly />
            </div>
        </div >

    )
}
export default Header;













