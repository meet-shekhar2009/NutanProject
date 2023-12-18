import { useState } from "react";
import MoviesLsit from "../MoviesList";
import Loader from "../Loader";
import TextList from "../TextList";
const MovieDetails = ({ data, isDataLoading }) => {
    if (!data) return <>no data found!</>
    if (isDataLoading)
        return <Loader />

    return (
        <div className="discription">
            <div className="details-container">
                <div>
                    <h3 className="text-heading">
                        {data?.overviewResponse?.title?.title}
                        ({data?.overviewResponse?.title?.year})</h3>

                    <img className="movie-poster" src={data?.overviewResponse?.title?.image?.url} />
                </div>
                <div className="movie-cast">
                    <div className="rating">
                        IMDB RATINGS
                        <div> ★ {data?.overviewResponse?.ratings?.rating}/10</div>
                        Rated by  {data?.overviewResponse?.ratings?.ratingCount} users
                    </div>
                    <TextList title={'Star Cast'} data={data.creditsResponse.cast} />
                    <TextList title={'Director'} data={data.creditsResponse.crew.director} />
                    <TextList title={'Producer'} data={data.creditsResponse.crew.producer} />
                </div>
            </div>
            <div>
                <h3 className="text-heading">Summary</h3>
                <p>

                    {data.overviewResponse.plotSummary.text}
                </p>
            </div>
        </div>
    )
}
export default MovieDetails;