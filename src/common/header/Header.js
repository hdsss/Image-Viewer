import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                {this.props.showSearch === "true" &&
                    <header className="flex-container">
                        <div className="header-logo">Image Viewer</div>
                        <div className="search-box-container">
                            <SearchIcon className="search-icon" />
                            <Input className="search-input" id="search" type="text" placeholder="Search..."></Input>
                        </div>
                    </header>
                }
            </div>
        )
    }
}

export default Header;