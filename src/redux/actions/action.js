import {ADD_CITY, DELETE_CITY} from "../types";

const getData = (name) => {
    return async dispatch => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=c84ce20c5a7a4c311c4926ffabcca017&lang=ru`;
            const response = await fetch(url);
            const data = await response.json();
            const temp = data.main.temp - 273;

            const formattedData = {
                id: +new Date(),
                city: data.name,
                temp: temp.toFixed(1),
                pressure: data.main.pressure
            };
            dispatch({type: ADD_CITY, payload: formattedData});
        } catch (e) {
            console.log(e)
            throw e;
        }

    }
}

const deleteCity = (data, id) => {
    const newData = data.filter(item => item.id != id);
    return ({type: DELETE_CITY, payload: newData});
}

export {
    getData,
    deleteCity
}