import * as React from "react";
import * as Highcharts from "highcharts/highmaps";
// import "./index.css";
import HighchartsReact from "highcharts-react-official";

import mapDataWorld from "@highcharts/map-collection/custom/world.geo.json";
import { Container, Tooltip } from "@mui/material";
import { useEffect } from "react";
import {
  FindHotelByCity,
  fetchAccessToken,
  getAccessToken,
} from "../../api/hotel/HotelInfo";
import { useState } from "react";

const countries = [
  {
    country: "India",
    countryCode: "IN",
    capital: "Delhi",
    capitalCode: "DEL",
  },
  {
    country: "United States",
    countryCode: "US",
    capital: "Washington, D.C.",
    capitalCode: "WDC",
  },
  {
    country: "United Kingdom",
    countryCode: "GB",
    capital: "London",
    capitalCode: "LON",
  },
  {
    country: "Canada",
    countryCode: "CA",
    capital: "Ottawa",
    capitalCode: "OTT",
  },
  {
    country: "Australia",
    countryCode: "AU",
    capital: "Canberra",
    capitalCode: "CBR",
  },
  {
    country: "Germany",
    countryCode: "DE",
    capital: "Berlin",
    capitalCode: "BER",
  },
  {
    country: "France",
    countryCode: "FR",
    capital: "Paris",
    capitalCode: "PAR",
  },
  {
    country: "China",
    countryCode: "CN",
    capital: "Beijing",
    capitalCode: "BJS",
  },
  {
    country: "Japan",
    countryCode: "JP",
    capital: "Tokyo",
    capitalCode: "TYO",
  },
  {
    country: "Brazil",
    countryCode: "BR",
    capital: "Brasília",
    capitalCode: "BSB",
  },
  {
    country: "Russia",
    countryCode: "RU",
    capital: "Moscow",
    capitalCode: "MOW",
  },
  {
    country: "South Africa",
    countryCode: "ZA",
    capital: "Pretoria",
    capitalCode: "PTA",
  },
  {
    country: "South Korea",
    countryCode: "KR",
    capital: "Seoul",
    capitalCode: "SEL",
  },
  {
    country: "Mexico",
    countryCode: "MX",
    capital: "Mexico City",
    capitalCode: "MEX",
  },
  {
    country: "Argentina",
    countryCode: "AR",
    capital: "Buenos Aires",
    capitalCode: "BUE",
  },
  {
    country: "Spain",
    countryCode: "ES",
    capital: "Madrid",
    capitalCode: "MAD",
  },
  {
    country: "Italy",
    countryCode: "IT",
    capital: "Rome",
    capitalCode: "ROM",
  },
  {
    country: "Nigeria",
    countryCode: "NG",
    capital: "Abuja",
    capitalCode: "ABU",
  },
  {
    country: "Egypt",
    countryCode: "EG",
    capital: "Cairo",
    capitalCode: "CAI",
  },
  {
    country: "Saudi Arabia",
    countryCode: "SA",
    capital: "Riyadh",
    capitalCode: "RUH",
  },
  {
    country: "Turkey",
    countryCode: "TR",
    capital: "Ankara",
    capitalCode: "ANK",
  },
  {
    country: "Iran",
    countryCode: "IR",
    capital: "Tehran",
    capitalCode: "THR",
  },
  {
    country: "Indonesia",
    countryCode: "ID",
    capital: "Jakarta",
    capitalCode: "JKT",
  },
  {
    country: "Pakistan",
    countryCode: "PK",
    capital: "Islamabad",
    capitalCode: "ISB",
  },
  {
    country: "Bangladesh",
    countryCode: "BD",
    capital: "Dhaka",
    capitalCode: "DAC",
  },
  {
    country: "Vietnam",
    countryCode: "VN",
    capital: "Hanoi",
    capitalCode: "HAN",
  },
  {
    country: "Philippines",
    countryCode: "PH",
    capital: "Manila",
    capitalCode: "MNL",
  },
  {
    country: "Thailand",
    countryCode: "TH",
    capital: "Bangkok",
    capitalCode: "BKK",
  },
  {
    country: "Malaysia",
    countryCode: "MY",
    capital: "Kuala Lumpur",
    capitalCode: "KUL",
  },
  {
    country: "Singapore",
    countryCode: "SG",
    capital: "Singapore",
    capitalCode: "SIN",
  },
  {
    country: "Greece",
    countryCode: "GR",
    capital: "Athens",
    capitalCode: "ATH",
  },
  {
    country: "Norway",
    countryCode: "NO",
    capital: "Oslo",
    capitalCode: "OSL",
  },
  {
    country: "Sweden",
    countryCode: "SE",
    capital: "Stockholm",
    capitalCode: "STO",
  },
  {
    country: "Netherlands",
    countryCode: "NL",
    capital: "Amsterdam",
    capitalCode: "AMS",
  },
  {
    country: "Belgium",
    countryCode: "BE",
    capital: "Brussels",
    capitalCode: "BRU",
  },
  {
    country: "Portugal",
    countryCode: "PT",
    capital: "Lisbon",
    capitalCode: "LIS",
  },
  {
    country: "Switzerland",
    countryCode: "CH",
    capital: "Bern",
    capitalCode: "BRN",
  },
  {
    country: "Austria",
    countryCode: "AT",
    capital: "Vienna",
    capitalCode: "VIE",
  },
  {
    country: "Denmark",
    countryCode: "DK",
    capital: "Copenhagen",
    capitalCode: "CPH",
  },
  {
    country: "Finland",
    countryCode: "FI",
    capital: "Helsinki",
    capitalCode: "HEL",
  },
  {
    country: "Ireland",
    countryCode: "IE",
    capital: "Dublin",
    capitalCode: "DUB",
  },
  {
    country: "Poland",
    countryCode: "PL",
    capital: "Warsaw",
    capitalCode: "WAW",
  },
  {
    country: "Hungary",
    countryCode: "HU",
    capital: "Budapest",
    capitalCode: "BUD",
  },
  {
    country: "Czech Republic",
    countryCode: "CZ",
    capital: "Prague",
    capitalCode: "PRG",
  },
  {
    country: "Slovakia",
    countryCode: "SK",
    capital: "Bratislava",
    capitalCode: "BTS",
  },
  {
    country: "Romania",
    countryCode: "RO",
    capital: "Bucharest",
    capitalCode: "BUH",
  },
  {
    country: "Bulgaria",
    countryCode: "BG",
    capital: "Sofia",
    capitalCode: "SOF",
  },
  {
    country: "Croatia",
    countryCode: "HR",
    capital: "Zagreb",
    capitalCode: "ZAG",
  },
  {
    country: "Serbia",
    countryCode: "RS",
    capital: "Belgrade",
    capitalCode: "BEG",
  },
  {
    country: "Montenegro",
    countryCode: "ME",
    capital: "Podgorica",
    capitalCode: "POD",
  },
  {
    country: "Bosnia and Herzegovina",
    countryCode: "BA",
    capital: "Sarajevo",
    capitalCode: "SJJ",
  },
  {
    country: "North Macedonia",
    countryCode: "MK",
    capital: "Skopje",
    capitalCode: "SKP",
  },
  {
    country: "Albania",
    countryCode: "AL",
    capital: "Tirana",
    capitalCode: "TIA",
  },
  {
    country: "Kosovo",
    countryCode: "XK",
    capital: "Pristina",
    capitalCode: "PRN",
  },
  {
    country: "Moldova",
    countryCode: "MD",
    capital: "Chisinau",
    capitalCode: "KIV",
  },
  {
    country: "Ukraine",
    countryCode: "UA",
    capital: "Kyiv",
    capitalCode: "IEV",
  },
  {
    country: "Belarus",
    countryCode: "BY",
    capital: "Minsk",
    capitalCode: "MSQ",
  },
  {
    country: "Estonia",
    countryCode: "EE",
    capital: "Tallinn",
    capitalCode: "TLL",
  },
  {
    country: "Latvia",
    countryCode: "LV",
    capital: "Riga",
    capitalCode: "RIX",
  },
  {
    country: "Lithuania",
    countryCode: "LT",
    capital: "Vilnius",
    capitalCode: "VNO",
  },
  {
    country: "Slovenia",
    countryCode: "SI",
    capital: "Ljubljana",
    capitalCode: "LJU",
  },
  {
    country: "Cyprus",
    countryCode: "CY",
    capital: "Nicosia",
    capitalCode: "NIC",
  },
  {
    country: "Malta",
    countryCode: "MT",
    capital: "Valletta",
    capitalCode: "MLA",
  },
  {
    country: "Iceland",
    countryCode: "IS",
    capital: "Reykjavik",
    capitalCode: "REK",
  },
  {
    country: "Greenland",
    countryCode: "GL",
    capital: "Nuuk",
    capitalCode: "GOH",
  },
  {
    country: "Faroe Islands",
    countryCode: "FO",
    capital: "Tórshavn",
    capitalCode: "FAE",
  },
  {
    country: "Monaco",
    countryCode: "MC",
    capital: "Monaco",
    capitalCode: "MCM",
  },
  {
    country: "Afghanistan",
    countryCode: "AF",
    capital: "Kabul",
    capitalCode: "KBL",
  },
  {
    country: "Algeria",
    countryCode: "DZ",
    capital: "Algiers",
    capitalCode: "ALG",
  },
  {
    country: "Angola",
    countryCode: "AO",
    capital: "Luanda",
    capitalCode: "LAD",
  },
  {
    country: "Antigua and Barbuda",
    countryCode: "AG",
    capital: "St. John's",
    capitalCode: "ANU",
  },
  {
    country: "Armenia",
    countryCode: "AM",
    capital: "Yerevan",
    capitalCode: "EVN",
  },
  {
    country: "Azerbaijan",
    countryCode: "AZ",
    capital: "Baku",
    capitalCode: "BAK",
  },
  {
    country: "The Bahamas",
    countryCode: "BS",
    capital: "Nassau",
    capitalCode: "NAS",
  },
  {
    country: "Bahrain",
    countryCode: "BH",
    capital: "Manama",
    capitalCode: "BAH",
  },
  {
    country: "Barbados",
    countryCode: "BB",
    capital: "Bridgetown",
    capitalCode: "BGI",
  },
  {
    country: "Belize",
    countryCode: "BZ",
    capital: "Belmopan",
    capitalCode: "BZE",
  },
  {
    country: "Benin",
    countryCode: "BJ",
    capital: "Porto-Novo",
    capitalCode: "COO",
  },
  {
    country: "Bhutan",
    countryCode: "BT",
    capital: "Thimphu",
    capitalCode: "PBH",
  },
  {
    country: "Bolivia",
    countryCode: "BO",
    capital: "La Paz",
    capitalCode: "LPB",
  },
  {
    country: "Botswana",
    countryCode: "BW",
    capital: "Gaborone",
    capitalCode: "GBE",
  },
];

const Map = (props = HighchartsReact.Props) => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([[""]]);

  useEffect(() => {
    getAccessToken()
      .then((res) => {
        if (res) {
          setToken(res);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        countries.map(async (country) => {
          try {
            const res = await FindHotelByCity(country.capitalCode, token);
            return [country.countryCode.toLowerCase(), res?.data?.meta?.count];
          } catch (e) {
            console.log("error", e);
            return [country.countryCode.toLocaleLowerCase(), null]; // Handle the error as needed
          }
        })
      );

      // Update data array with the new data
      setData((prevData) => [...prevData, ...newData]);
    };
    if (token) {
      fetchData();
    }
  }, [token]);


  const options = {
    series: [
      {
        type: "map",
        mapData: mapDataWorld,
        data: data,
      },
    ],

    tooltip: {
      animation: true,
      backgroundColor: "#ffffff",
      useHTML: true,
      formatter: function () {
        // Find the corresponding data based on the point code
        const pointData = data.find((item) => item[0] === this.point["hc-key"]);
        if (pointData) {
          const [code, value, type, additionalDetails] = pointData;
          // Customize the tooltip content here based on your data structure
          let tooltipContent = `
            <div style="max-width:auto">
              <strong style="text-align: center; display: block; margin: auto;">${
                this.point.name
              }</strong><br>
             ${
               value
                 ? `<span> <h5>Hotel Available :${value}</h5></span><br>`
                 : `<h4>No hotel Available</h4>`
             }
          `;
          // Check if additional details exist and include them in the tooltip
          if (additionalDetails) {
            tooltipContent += `<br>Name: ${additionalDetails.name}`;
          }
          tooltipContent += `</div>`;
          return tooltipContent;
        }
        // Return default tooltip content if data is not found
        return `<div>${this.point.name}</div>`;
      },
    },
  };
  return (
    <Container>
      {data.length > 0 ? (
        <HighchartsReact
          options={options} // Make sure to define 'options' somewhere in your code
          highcharts={Highcharts}
          constructorType={"mapChart"}
          {...props}
        />
      ) : (
        <div>No Data</div>
      )}
    </Container>
  );
};

export default Map;
