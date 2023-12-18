import { movies, seats } from "./data";
import MovieList from "./MovieList";
import SeatSelected from "./SeatSelected";
import Booking from "./Booking";
import "./styleSeat.css"
import { useState } from "react";


function MoviePicker() {
    const seatData = seats.map((m, i) => {
        return {
            ...m,
            isChecked: false,
            isBooked: false,
            isPremium: i > 60
        }
    });


    const [selectedMovie, setselectedMovie] = useState(movies[0])
    const [seatSelect, setSeatSelect] = useState(seatData)
    const [maxSeat, setmaxSeat] = useState(2)
    return (
        <div className="wrapper">
            <div className="movieHall">
                <h3>BookMyShow</h3>

                <MovieList list={movies}
                    selectedMovie={selectedMovie}
                    setselectedMovie={setselectedMovie}
                    maxSeat={maxSeat} setmaxSeat={setmaxSeat} />

                <div className="screen">SCREEN</div>
                <SeatSelected seatSelect={seatSelect}
                    setSeatSelect={setSeatSelect}
                    maxSeat={maxSeat} setmaxSeat={setmaxSeat}
                />

                <Booking seatSelect={seatSelect}
                    setSeatSelect={setSeatSelect}
                    selectedMovie={selectedMovie}
                    setselectedMovie={setselectedMovie} />
            </div>

        </div>
    )
}
export default MoviePicker;
