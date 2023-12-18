import { useState } from "react";

export default function Booking({ seatSelect, setSeatSelect, selectedMovie, setselectedMovie }) {
    let bookedSeat = seatSelect.filter((k) => (k.isChecked === true && k.isBooked === false))
    const handleMovieBooked = () => {
        bookedSeat.forEach((m) => {
            m.isBooked = true;
        })
        setSeatSelect([...seatSelect]);

    }
    return (<div className="booking-container">
        <div className="booking-container-first-child">
            <h3 style={{ margin: 0 }}>{selectedMovie.name}</h3>
            {new Date().toLocaleDateString()}
            <div>
                Selected Seats:{bookedSeat.length}

            </div>
        </div>
        <div className="booking-container-last-child">
            <span>{bookedSeat.length}x{selectedMovie.price} = </span> <h2 style={{ display: 'inline' }}>₹{bookedSeat.length * selectedMovie.price} /-</h2>
            <div>
                <button onClick={handleMovieBooked}>Book</button>
            </div>
        </div>

    </div>
    )
}




