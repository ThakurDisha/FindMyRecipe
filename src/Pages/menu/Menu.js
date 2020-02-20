import React, { Component } from 'react';
// Assets
import worldFoodMenu from '../../Assets/DummyData/worldFoodMenu';
// Component
import Header from '../../Components/header/Header';
// Style
import './menus.css';

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
                <Header headerText='World Food' />
                <p className='largeText'>Choose the type of recipe you want to find...</p>
                <div className='menuCardsContainer'>
                    {/* Indian */}

                    {this.state.worldMenu.map(worldFoodMenu => {
                        return (
                            this.menuCard(worldFoodMenu.image_url, worldFoodMenu.country_name))
                    })}
                </div>
            </div>
        )
    }
}
