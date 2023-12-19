function DetailedMeal({ detailedData, setDetailedData }) {
    let Ingredients = new Array(20).fill(null).map((k, i) => {
        return detailedData.length > 0 ? detailedData[0]['strIngredient' + (i + 1)] : null;
    }).filter(k => k);

    return (
        <div>

            {detailedData.map((k) => <div className="Ing-container" >
                <div style={{ width: '40%' }}>
                    <div className="str-mealname">{k.strMeal}</div>
                    <div> <img className='image-dim Ing-image' src={k.strMealThumb} /> </div>
                    <div className="str-areya"> <div >{k.strCategory} </div>
                        <div >{k.strArea}</div></div>
                    <div className="str-instruction">{k.strInstructions}</div>
                    <div>
                        <h3>Ingredients</h3>
                        {Ingredients.map((k) => <span className="ingredientd-items">{k}</span>)}
                    </div>
                </div>
            </div>)}



        </div>
    )
}
export default DetailedMeal;
