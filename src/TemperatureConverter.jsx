import { useState } from "react";
import "./style.css";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [originalType, setOriginalType] = useState("");
  const [convertTo, setConvertTo] = useState("");
  const [convertedTemp, setConvertedTemp] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const convertedValue = convertTemperature(
      parseFloat(temperature),
      originalType,
      convertTo
    );
    setConvertedTemp(convertedValue);
  };

  const convertTemperature = (temperature, originalType, convertTo) => {
    let result = temperature;

    if (originalType === "og_celsius" && convertTo === "Farhenheit") {
      result = (temperature * 9) / 5 + 32;
    } else if (originalType === "og_farhenheit" && convertTo === "Celsius") {
      result = ((temperature - 32) * 5) / 9;
    } else if (originalType === "og_celsius" && convertTo === "Kelvin") {
      result = temperature + 273.15;
    } else if (originalType === "og_kelvin" && convertTo === "Celsius") {
      result = temperature - 273.15;
    } else if (originalType === "og_kelvin" && convertTo === "Farhenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
    } else if (originalType === "og_farhenheit" && convertTo === "Kelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
    }

    return result;
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <form onSubmit={handleSubmit}>
        <div className="from">
          <input
            type="number"
            placeholder="Enter Temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            name="temperature"
          />
          <select
            value={originalType}
            onChange={(e) => setOriginalType(e.target.value)}
            name="select_type"
          >
            <option value="" disabled>
              Select a type
            </option>
            <option value="og_celsius">Celsius</option>
            <option value="og_farhenheit">Farhenheit</option>
            <option value="og_kelvin">Kelvin</option>
          </select>
        </div>
        <div className="to">
          <p>Convert to</p>
          <select
            value={convertTo}
            onChange={(e) => setConvertTo(e.target.value)}
            name="convert_to"
          >
            <option value="" disabled>
              Select a type
            </option>
            <option value="Celsius">Celsius</option>
            <option value="Farhenheit">Farhenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {convertedTemp !== null && (
        <div className="output">
          <p>
            Converted Temperature: {convertedTemp} ° {convertTo}
          </p>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
