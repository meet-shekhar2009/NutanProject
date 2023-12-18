function DetailedMeal({ detailedData, setDetailedData }) {
    let Ingredients = new Array(20).fill(null).map((k, i) => {
        return detailedData.length > 0 ? detailedData[0]['strIngredient' + (i + 1)] : null;
    }).filter(k => k);

    return (
        <div>
            {detailedData.map((k) => <div>
                <div>{k.strMeal}</div>
                <div> <img className='image-dim' src={k.strMealThumb} /> </div>
                <div>{k.strCategory} </div>
                <div>{k.strArea}</div>
                <div>{k.strInstructions}</div>
            </div>)}

        </div>
    )
}
export default DetailedMeal;
