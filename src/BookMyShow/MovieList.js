
function MovieList({ list, setselectedMovie, maxSeat, setmaxSeat }) {


    const handlemovieSelect = (e) => {
        const selectedval = list.find(k => k.id == e.target.value)
        setselectedMovie(selectedval)
    }
    const handelSeatCount = (e) => {

        setmaxSeat(parseInt(e.target.value))
    }
    return (
        <>
            <select onChange={handlemovieSelect}>
                {list.map((k) => <option key={k.id} value={k.id}>{k.name} ({k.price})</option>)}
            </select>
            No of Seat
            <input type="number" value={maxSeat} onChange={handelSeatCount} />

        </>
    )
}
export default MovieList;

