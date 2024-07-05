<<<<<<< HEAD
import React from "react";

const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
=======
import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
    c: "섭씨",
    f: "화씨"
};

function TemperatureInput(props) {
    // const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };
    return (
        <fieldset>
            <legend>온도를 입력하세요(단위 : {scaleNames[props.scale]}):</legend>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}
<<<<<<< HEAD

=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default TemperatureInput;