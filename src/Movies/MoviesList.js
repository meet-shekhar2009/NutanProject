import Loader from "./Loader";

const MoviesLsit = ({ list, isLoading, handleClick }) => {
    if (isLoading) {
        return <Loader />
    }

    return (
        <div>

            {list.length <= 0 ? <div className="nodata">
                no movies found
            </div>
                :
                <div>
                    {list.map((k) => {
                        return <div className="movie-items" onClick={() => { handleClick(k.id, 'US') }}>
                            <div>
                                <img height={100} width={100} src={k?.i?.imageUrl} />
                            </div>
                            <div className="movie-info">
                                <div className="movie-title">{k.l} ({k.y})</div>
                                <div>star cast:{k.s}</div>
                            </div>

                        </div>

                    })}
                </div>}
        </div>
    )
};
export default MoviesLsit;