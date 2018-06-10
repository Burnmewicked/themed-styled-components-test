import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import BaseButton from '../BaseButton/BaseButton';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const StyledInputPaper = styled(Paper) `
&& {
    background: ${props => props.theme.colors.primary};
    margin: 0 auto;
    padding: 50px;
    max-width: 960px;
}
`;
const StyledInput = styled(Input) `
&& {
    background: #fff;
    padding: 5px 10px;
    margin-right: 20px;
}
`;

// inputChangedHandler = (event) => {
//     e.preventDefault();
//     // proxy url used to hide personal api key for security
//     let location = event.target.value;
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location},+CA&key=AIzaSyBEZ4u_oySAJUu-i0ksTThQ7oVAFcuNbRk`;

//     fetch(proxyurl + url)
//         .then((res) => res.json())
//         .then(function (data) {
//             // change this so it dispatches an action (set state.location) to the reducer - do this from here or weathercontainer?          
//             // convert location input from user into latitude and longitude for the weather api call
//             // getWeather(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);

//         });
// }

const InputBlock = () => {
    return (
        <div>
            <StyledInputPaper>
                <FormControl>
                    <StyledInput 
                    defaultValue="Enter a City"/>
                </FormControl>
                <BaseButton>Show me the weather</BaseButton>
            </StyledInputPaper>
        </div>
    );
};

export default InputBlock;