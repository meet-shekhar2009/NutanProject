import './MealFinder.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DetailedMeal from './DetailedMeal';

function SearchMeal() {
    const [mealfinder, setMealFinder] = useState([]);
    const [serachData, setSearchdata] = useState('');
    const [detailedData, setDetailedData] = useState([]);

    const apiData = async () => {
        const response = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/search.php?s=' + serachData
        );
        console.log(response.data.meals);
        setMealFinder(response.data.meals);
    };

    const handelInitalSearch = (e) => {
        setSearchdata(e.target.value);
    };

    const handelSearchMeal = () => {
        if (!serachData.trim()) {
            alert('please enter a search term');
        } else {
            apiData();
        }
    };

    const handeldetailedData = async (id) => {
        const detailedApiData = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
        );
        console.log(detailedApiData);
        setDetailedData(detailedApiData.data.meals);
    };

    return (
        <div>
            <h3 className="header">nutan's Meal Finder</h3>

            <div className="input-header">
                <div>
                    <input
                        className="input-box"
                        type="text"
                        value={serachData}
                        onChange={handelInitalSearch}
                        placeholder="search for the meal or keyWords"
                    />
                </div>
                <div className="search-box" onClick={handelSearchMeal}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="search-box">
                    <i class="fa-solid fa-shuffle"></i>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                {' '}
                Search results for '{serachData}'
            </div>
            <div className="api-data">
                {mealfinder.map((k) => (
                    <div
                        className="menu-cart"
                        onClick={() => {
                            handeldetailedData(k.idMeal);
                        }}
                    >
                        <div>
                            <h4>{k.strMeal}</h4>
                        </div>
                        <div>
                            {' '}
                            <img className="image-dim" src={k.strMealThumb} />{' '}
                        </div>
                    </div>
                ))}
            </div>
            <DetailedMeal
                detailedData={detailedData}
                setDetailedData={setDetailedData}
            />
        </div>
    );
}
export default SearchMeal;
