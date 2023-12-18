
function SeatSelected({ seatSelect, setSeatSelect, maxSeat, }) {


    const handelSeatSelected = (k) => {
        if (k.isPremium) { }
        if (k.isBooked) {
            return;
        }
        const seletedSeatsCount = seatSelect.filter((k) => k.isChecked && !k.isBooked).length;
        if (seletedSeatsCount === maxSeat) {
            return;
        }

        k.isChecked = !k.isChecked;
        setSeatSelect([...seatSelect])

    }
    function getSeatColor(k) {
        if (k.isChecked && k.isBooked) {
            return 'booking-color';
        }
        if (k.isChecked) {
            return 'seat-selected';
        }
        return '';
    }
    return (
        <div className="seatContainer">
            {seatSelect.map((k, index) => <div key={index} className={`seats ${getSeatColor(k)}`} onClick={() => handelSeatSelected(k)}> </div>)}
        </div>
    )
}
export default SeatSelected;







