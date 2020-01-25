import React, { Component } from 'react';
import MaterialIcon from "material-icons-react";
// Styles
import './navigation.css';

export default class Navigation extends Component {

    navigationCategory(navText, toggleFunctionName) {
        return (
            <div className='navCategoryContainer'>
                <p className='mediumText'>{navText}</p>
                <MaterialIcon icon='keyboard_arrow_down' size='36px' onClick={toggleFunctionName} />
            </div>
        )
    }

    recipeByFlavour() {
        return (
            <div>
                <p>Sweet</p>
                <p>Spicy</p>
            </div>
        )
    }

    recipeByMealTime() {
        return (
            <div>
                <p>Breakfast</p>
                <p>Lunch</p>
                <p>Tea Time</p>
                <p>Dinner</p>
            </div>
        )
    }

    render() {
        return (
            <div className='navigationContainer'>
                {this.navigationCategory('World Food')}
                {this.navigationCategory('Top Favorite Recipes')}
                {this.navigationCategory('Recipe by Ingredients')}
                {this.navigationCategory('Recipe by Meal')}
                {this.navigationCategory('Recipe by flavour')}
            </div>
        )
    }
}
