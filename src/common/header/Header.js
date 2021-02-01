import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <header>
                    <div className="header-logo">Image Viewer</div>
                </header>
            </div>
        )
    }
}

export default Header;