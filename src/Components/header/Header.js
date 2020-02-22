import React, { Component } from 'react';
import MaterialIcon from "material-icons-react";
// Component
import Navigation from '../navigation/Navigation';
// Styles
import './header.css';

export default class Header extends Component {
    state = {
        isNavigationOpen: false
    }

    toggleNavigation() {
        this.setState({
            isNavigationOpen: !this.state.isNavigationOpen
        })
    }

    render() {
        return (
            <div>
                <div className='headerContainer'>
                    <MaterialIcon icon='menu' size='48px' onClick={() => this.toggleNavigation()} />
                    {/* <p className='largeText'>{this.props.headerText}</p> */}
                    <div>
                        <input type='text' placeholder='Find my recipe' />
                        <MaterialIcon icon='search' />
                    </div>

                </div>

                {this.state.isNavigationOpen && <Navigation />}

            </div>
        )
    }
}
