import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Wrapper from "../../assets/wrapper/flightBookingInput";
// import { data } from "../../data";

const cityData = [
  { city: "Delhi", cityCode: "DEL" },
  { city: "Washington, D.C.", cityCode: "WDC" },
  { city: "London", cityCode: "LON" },
  { city: "Ottawa", cityCode: "OTT" },
  { city: "Canberra", cityCode: "CBR" },
  { city: "Berlin", cityCode: "BER" },
  { city: "Paris", cityCode: "PAR" },
  { city: "Beijing", cityCode: "BJS" },
  { city: "Tokyo", cityCode: "TYO" },
  { city: "Brasília", cityCode: "BSB" },
  { city: "Moscow", cityCode: "MOW" },
  { city: "Pretoria", cityCode: "PTA" },
  { city: "Seoul", cityCode: "SEL" },
  { city: "Mexico City", cityCode: "MEX" },
  { city: "Buenos Aires", cityCode: "BUE" },
  { city: "Madrid", cityCode: "MAD" },
  { city: "Rome", cityCode: "ROM" },
  { city: "Abuja", cityCode: "ABU" },
  { city: "Cairo", cityCode: "CAI" },
  { city: "Riyadh", cityCode: "RUH" },
  { city: "Ankara", cityCode: "ANK" },
  { city: "Tehran", cityCode: "THR" },
  { city: "Jakarta", cityCode: "JKT" },
  { city: "Islamabad", cityCode: "ISB" },
  { city: "Dhaka", cityCode: "DAC" },
  { city: "Hanoi", cityCode: "HAN" },
  { city: "Manila", cityCode: "MNL" },
  { city: "Bangkok", cityCode: "BKK" },
  { city: "Kuala Lumpur", cityCode: "KUL" },
  { city: "Singapore", cityCode: "SIN" },
  { city: "Athens", cityCode: "ATH" },
  { city: "Oslo", cityCode: "OSL" },
  { city: "Stockholm", cityCode: "STO" },
  { city: "Amsterdam", cityCode: "AMS" },
  { city: "Brussels", cityCode: "BRU" },
  { city: "Lisbon", cityCode: "LIS" },
  { city: "Bern", cityCode: "BRN" },
  { city: "Vienna", cityCode: "VIE" },
  { city: "Copenhagen", cityCode: "CPH" },
  { city: "Helsinki", cityCode: "HEL" },
  { city: "Dublin", cityCode: "DUB" },
  { city: "Warsaw", cityCode: "WAW" },
  { city: "Budapest", cityCode: "BUD" },
  { city: "Prague", cityCode: "PRG" },
  { city: "Bratislava", cityCode: "BTS" },
  { city: "Bucharest", cityCode: "BUH" },
  { city: "Sofia", cityCode: "SOF" },
  { city: "Zagreb", cityCode: "ZAG" },
  { city: "Belgrade", cityCode: "BEG" },
  { city: "Podgorica", cityCode: "POD" },
  { city: "Sarajevo", cityCode: "SJJ" },
  { city: "Skopje", cityCode: "SKP" },
  { city: "Tirana", cityCode: "TIA" },
  { city: "Pristina", cityCode: "PRN" },
  { city: "Chisinau", cityCode: "KIV" },
  { city: "Kyiv", cityCode: "IEV" },
  { city: "Minsk", cityCode: "MSQ" },
  { city: "Tallinn", cityCode: "TLL" },
  { city: "Riga", cityCode: "RIX" },
  { city: "Vilnius", cityCode: "VNO" },
  { city: "Ljubljana", cityCode: "LJU" },
  { city: "Nicosia", cityCode: "NIC" },
  { city: "Valletta", cityCode: "MLA" },
  { city: "Reykjavik", cityCode: "REK" },
  { city: "Nuuk", cityCode: "GOH" },
  { city: "Tórshavn", cityCode: "FAE" },
  { city: "Monaco", cityCode: "MCM" },
  { city: "Kabul", cityCode: "KBL" },
  { city: "Algiers", cityCode: "ALG" },
  { city: "Luanda", cityCode: "LAD" },
  { city: "St. John's", cityCode: "ANU" },
  { city: "Yerevan", cityCode: "EVN" },
  { city: "Baku", cityCode: "BAK" },
  { city: "Nassau", cityCode: "NAS" },
  { city: "Manama", cityCode: "BAH" },
  { city: "Bridgetown", cityCode: "BGI" },
  { city: "Belmopan", cityCode: "BZE" },
  { city: "Porto-Novo", cityCode: "COO" },
  { city: "Thimphu", cityCode: "PBH" },
  { city: "La Paz", cityCode: "LPB" },
  { city: "Gaborone", cityCode: "GBE" },
  { city: "New York", cityCode: "NYC" },
  { city: "Paris", cityCode: "CDG" },
  { city: "Tokyo", cityCode: "HND" },
  { city: "Sydney", cityCode: "SYD" },
  { city: "Cape Town", cityCode: "CPT" },
  { city: "Dubai", cityCode: "DXB" },
  { city: "Mumbai", cityCode: "BOM" },
  { city: "Rio de Janeiro", cityCode: "GIG" },
  { city: "Berlin", cityCode: "TXL" },
  { city: "Stockholm", cityCode: "ARN" },
  { city: "Bangkok", cityCode: "BKK" },
  { city: "Lisbon", cityCode: "LIS" },
  { city: "Cairo", cityCode: "CAI" },
  { city: "Seoul", cityCode: "ICN" },
  { city: "Nairobi", cityCode: "NBO" },
  { city: "Mexico City", cityCode: "MEX" },
  { city: "Moscow", cityCode: "SVO" },
  { city: "Athens", cityCode: "ATH" },
  { city: "Budapest", cityCode: "BUD" },
  { city: "Vienna", cityCode: "VIE" },
  { city: "Prague", cityCode: "PRG" },
  { city: "Warsaw", cityCode: "WAW" },
  { city: "Singapore", cityCode: "SIN" },
  { city: "Dublin", cityCode: "DUB" },
  { city: "Amsterdam", cityCode: "AMS" },
  { city: "Barcelona", cityCode: "BCN" },
  { city: "Beirut", cityCode: "BEY" },
  { city: "Istanbul", cityCode: "IST" },
  { city: "Helsinki", cityCode: "HEL" },
  { city: "Kuala Lumpur", cityCode: "KUL" },
  { city: "Oslo", cityCode: "OSL" },
  { city: "Panama City", cityCode: "PTY" },
  { city: "Reykjavik", cityCode: "KEF" },
  { city: "Rome", cityCode: "FCO" },
  { city: "Shanghai", cityCode: "PVG" },
];

const BookingForm = (props) => {
  const setDepartureValue = props.setFromValue;
  const setDestinationValue = props.setToValue;

  const [departureName, setDepartureName] = useState("");
  const [destinationName, setDestinationName] = useState("");

  const handleDepartureChange = (event, newValue) => {
    setDepartureName(newValue); // Set city name for display
    const cityCode = getCityCodeByName(newValue);
    setDepartureValue(cityCode); // Set city code for API
  };

  const handleDestinationChange = (event, newValue) => {
    setDestinationName(newValue); // Set city name for display
    const cityCode = getCityCodeByName(newValue);
    setDestinationValue(cityCode); // Set city code for API
  };

  const getCityCodeByName = (cityName) => {
    const city = cityData.find((c) => c.city === cityName);
    return city ? city.cityCode : "";
  };

  // Use departureValue and destinationValue for API calls in the parent component

  return (
    <Wrapper>
      <div className="booking-form-container">
        <div className="autocomplete-container">
          <Autocomplete
            value={departureName}
            onChange={handleDepartureChange}
            options={cityData.map((city) => city.city)} // Display city names
            renderInput={(params) => <TextField {...params} label="From" variant="filled" />}
          />
        </div>
        <div className="dash">-</div>
        <div className="autocomplete-container">
          <Autocomplete
            value={destinationName}
            onChange={handleDestinationChange}
            options={cityData.map((city) => city.city)} // Display city names
            renderInput={(params) => <TextField {...params} label="To" variant="filled" />}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default BookingForm;