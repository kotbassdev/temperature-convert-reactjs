import React from 'react'

export default function InputCelsius({ onChange,value }) {
    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input type="number" value={value} onChange={onChange} />
        </fieldset>
    );
}