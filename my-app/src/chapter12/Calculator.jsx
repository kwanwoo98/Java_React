import React, { useState } from "react";
<<<<<<< HEAD
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

=======
import BoilingVerdict from "./BoilingVerdict"
import TemperatureInput from "./TemperatureInput";

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

<<<<<<< HEAD
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
=======
function tryConvert(temperature,convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
<<<<<<< HEAD
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

=======
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] =useState("c");

    // const handleChange = (event) => {
    //     setTemperature(event.target.value);
    // }

    const handleCelsiusChange=(temperature)=>{
        setTemperature(temperature);
        setScale("c");
    }
    const handleFahrenheitChange=(temperature)=>{
        setTemperature(temperature);
        setScale("f");
    }
    const celsius = scale === 'f'? tryConvert(temperature,toCelsius):temperature;
    const fahrenheit=scale ==='c'?tryConvert(temperature,toFahrenheit):temperature;
    return (
        // <fieldset>
        //     <legend>섭씨 온도를 입력하세요:</legend>
        //     <input value={temperature} onChange={handleChange} />
        //     <BoilingVerdict celsius={parseFloat(temperature)} />
        // </fieldset>
        <div>
            <TemperatureInput scale="c" temperature={celsius} 
            onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} 
            onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );

}
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default Calculator;