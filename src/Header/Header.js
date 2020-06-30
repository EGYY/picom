import React from "react";
import {connect} from 'react-redux';
import './Header.css';
import {getData} from "../redux/actions/action";

const Header = ({getData}) => {
    const logSubmitData = (e) => {
        e.preventDefault();
        getData(e.target.city.value);
        e.target.city.value = '';
    }

    return(
        <header className='header'>
            <div className="subheader">
                <div className="container">
                    WeatherMap
                </div>
            </div>
            <div className="container">
                <div className="header__body">
                    <form action="" className='header__form' onSubmit={e => logSubmitData(e)}>
                        <input type="text" name='city' className='header__input' placeholder='Введите название города'/>
                        <input type="submit" className='header_submit-btn' value='Добавить'/>
                    </form>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.appReducer.data
    }
}

export default connect(mapStateToProps, {getData})(Header);