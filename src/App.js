import React, {  useState } from 'react';
import InputCelsius from './components/InputCelsius.comp';
import InputFahrenheit from './components/InputFahrenheit.comp';

const App = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function toCelsius(_fahrenheit) {
    return (_fahrenheit - 32) * 5 / 9;
  }

  function toFahrenheit(_celsius) {
    return (_celsius * 9 / 5) + 32;
  }

  function handleCelsiusChange(e) {
    e.preventDefault();
    setCelsius(e.target.value.trim());
    setFahrenheit(toFahrenheit(e.target.value.trim()));
  }
  function handleFahrenheitChange(e) {
    e.preventDefault();
    setFahrenheit(e.target.value.trim());
}
  
  return (
    <React.Fragment>
      <h1>Temperatute Convert:</h1>
      <InputCelsius onChange={handleCelsiusChange} value={celsius} />
      <InputFahrenheit onChange={handleFahrenheitChange} value={fahrenheit}/>
    </React.Fragment>
  );
}

export default App;