import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = (props) => {
    const [meals, setMeals] = useState(()=> {
        
    })

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setMeals(data))
    },[])

    return (
        <div>
            {
                meals.map(meal => <Meal
                    key={meals.idCategory}
                    meal={meal}
                    ></Meal>)
            }
            
            
            
        </div>
    );
};

export default Meals;