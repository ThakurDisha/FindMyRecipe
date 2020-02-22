import React, { Component } from 'react';
// Assets
import worldFoodMenu from '../../Assets/DummyData/worldFoodMenu';
// Component
import Header from '../../Components/header/Header';
// Style
import './worldFoodMenu.css';

export default class Menu extends Component {
    state = {
        worldMenu: worldFoodMenu
    }

    menuCard(menuImageUrl, menuName) {
        return (
            <div className='recipeMenuCards'>
                <img src={menuImageUrl} alt='mexican card' />
                <p className='mediumText'>{menuName}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Header headerText='World Cuisine' />

                <div className='menuContainer'>
                    <p className='largeText pageTagline'>Choose the type of recipe you want to find...</p>

                    <div className='menuCardsContainer'>

                        {this.state.worldMenu.map(worldFoodMenu => {
                            return (
                                this.menuCard(worldFoodMenu.image_url, worldFoodMenu.country_name))
                        })}
                    </div>
                </div>

            </div>
        )
    }
}
