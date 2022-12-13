import React from 'react';

const Meal = (props) => {
    const {strCategoryThumb, strCategoryDescription, strCategory} = props.meal;
    return (
        <div>
            <img src={strCategoryThumb} alt="" />
        </div>
    );
};

export default Meal;