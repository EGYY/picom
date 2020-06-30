import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {connect} from 'react-redux';

import {deleteCity} from "../redux/actions/action";

import './table.css';



const TableWeather = ({data, deleteCity}) => {

    const [filter, setFilter] = useState(true);


    const deleteElem = (e,id) => {
        e.preventDefault();
        deleteCity(data, id);
    }


    const sortByCity = () => {
        if(filter){
            data.sort((a, b) => (a.city > b.city) ? 1 : -1);
        }else{
            data.sort((a, b) => (a.city > b.city) ? -1 : 1);
        }

        setFilter(!filter);
    }

    return (
        <TableContainer component={Paper} className='container'>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={() => sortByCity()}>Город {filter ? (<ArrowDropUpIcon/>) : (<ArrowDropDownIcon/>)}</TableCell>
                        <TableCell align="left">Температура</TableCell>
                        <TableCell align="left">Атмосферное давление</TableCell>
                        <TableCell align="left"></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    { data.length > 0 ? data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.city}
                            </TableCell>
                            <TableCell align="left">{row.temp} °C</TableCell>
                            <TableCell align="left">{row.pressure} hPa</TableCell>
                            <TableCell align="left">
                                <a href="#" className='remove-btn' onClick={(e) => deleteElem(e, row.id)}>Удалить</a>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell>
                                Нет данных
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.appReducer.data
    }
}

export default connect(mapStateToProps, {deleteCity})(TableWeather);