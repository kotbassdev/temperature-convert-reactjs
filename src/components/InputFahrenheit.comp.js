import React from 'react'

export default function InputFahrenheit({ onChange,value }) {

    return (
        <fieldset>
            <legend>Enter temperature in Fahrenheit:</legend>
            <input type="number" value={value} onChange={onChange} />
        </fieldset>
    );
}