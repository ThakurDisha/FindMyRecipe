import React, { Component } from 'react';
// Assets
import navigation from '../../Assets/DummyData/navigation';
// Components
import Header from '../../Components/header/Header';
// Styles
import './navigationPageStyles.css';
import { Link } from 'react-router-dom';

export default class NavigationPage extends Component {
    state = {
        navigation: navigation
    };

    searchCards(searchCardUrl, searchText) {
        return (
            <Link to={searchCardUrl} className='linkStyling'>
                <div className='navigationPage-searchCards-textAndHelpIcon'>
                    <p className='mediumText'>{searchText}</p>
                </div>
            </Link>
        );
    };

    render() {
        return (
            <div>
                <Header headerText='Search Cards' />

                <div className='menuContainer'>
                    <p className='largeText pageTagline'>Search your recipe by...</p>

                    <div className='navigationPage-searchCards'>

                        {this.state.navigation.map(navigation => {
                            return (
                                this.searchCards(navigation.navigation_url, navigation.navigation_text)
                            )
                        })}
                    </div>
                </div>

            </div >
        );
    };
};