import axios from "axios";
export const Movies = async (term) => {
    const response = await axios.get('https://imdb8.p.rapidapi.com/auto-complete', {
        headers: {
            'X-RapidAPI-Key': '08e1547f4bmsh13a520f27d7955dp1a52a0jsn300b747745a0',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        },
        params: { q: term },
    });
    return response.data.d;
};

export const MovieDetails = async (id, country) => {
    const overviewOptions = axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details', {
        headers: {
            'X-RapidAPI-Key': '08e1547f4bmsh13a520f27d7955dp1a52a0jsn300b747745a0',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        },
        params: {
            tconst: id,
            currentCountry: country
        },
    });

    const creditsOptions = axios.get('https://imdb8.p.rapidapi.com/title/get-full-credits', {
        headers: {
            'X-RapidAPI-Key': '08e1547f4bmsh13a520f27d7955dp1a52a0jsn300b747745a0',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        },
        params: {
            tconst: id
        },
    });

    let [overviewResponse, creditsResponse] = await axios.all([overviewOptions, creditsOptions]);
    debugger;
    console.log(overviewResponse.data);
    return {
        overviewResponse: overviewResponse.data,
        creditsResponse: creditsResponse.data
    }
};


