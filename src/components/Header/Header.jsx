import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from "react-bootstrap";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.props.onExit();
    }
    render() {
        return (
            <div className={classes.header}>
                <div className={classes.siteName}>
                    <NavLink className={classes.link} to='/'>
                        Название
                    </NavLink>
                </div>
                <div className={classes.userName}>
                    {this.props.isAuthorized && "Пользователь: Инокентий"}
                </div>
                <div className={classes.exitButton} onClick={this.handleClick}>
                    {this.props.isAuthorized && <div className={classes.link} to='/'>
                        Выйти
                    </div>}
                </div>
            </div>
        );
    }
}

export default Header;
