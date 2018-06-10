import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

// function getWeather(lat, lng) {

//     // proxy url used to hide personal api key for security
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     let url = `https://api.darksky.net/forecast/af583d1d80449effd4c3d6d6523da4bd/${lat},${lng}?lang=en&units=si`;

//     fetch(proxyurl + url)
//         .then((res) => res.json())
//         .then(function (data) {
//             console.log(data);

//             // retrieve the weather summary for the week and show it on the page
//             let icon = document.getElementById('icon');
//             icon.setAttribute('src', 'icons/use/' + data.daily.icon + '.svg');

//             let summary = document.getElementById('summary');
//             summary.innerHTML = data.daily.summary;

//             // retrieve the weather for each day of the week and show it on page

//             for (let i = 0; i < 7; i++) {


//                 // retrieve correct icon
//                 let currentIcon = document.getElementById(`currentIcon${[i]}`);
//                 currentIcon.setAttribute('src', 'icons/use/' + data.daily.data[i].icon + '.svg');

//                 // retrieve temperature 
//                 let currentTemp = document.getElementById(`currentTemp${[i]}`);
//                 currentTemp.innerHTML = data.daily.data[i].apparentTemperatureHigh + "°";


//                 let currentTime = document.getElementById(`currentTime${[i]}`);

//                 // turn unix timestamp in time format understandable by normal human beings
//                 const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//                 let date = new Date(data.daily.data[i].time * 1000);
//                 // let hours = date.getHours();
//                 // let minutes = "0" + date.getMinutes();
//                 // let time = `${hours}:${minutes}`;
//                 // let day = date.getDay();
//                 // let weekday = weekdays[day];
//                 currentTime.innerHTML = weekdays[date.getDay()];

//                 // retrieve summary for that day
//                 let summaryCurrent = document.getElementById(`summary${[i]}`);
//                 summaryCurrent.innerHTML = data.daily.data[i].summary;

//             }
//         })
// }

class WeatherContainer extends Component {

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loc: state.location,
        wData: state.weatherData
    }
}

export default WeatherContainer;