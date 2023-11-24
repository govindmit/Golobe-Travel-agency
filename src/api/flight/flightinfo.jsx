import axios from "axios";
import config from "../../config/hotel_config";

export async function FlightOfferSearch(originLocationCode,destinationLocationCode,departureDate,returnDate,adults,tokenId) {
    try {
      let res = await axios.get(
        `${config.apiUrl}/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenId}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  export async function FlightOrder(tokenId, flightOrderId) {
    try {
      let res = await axios.get(
        `${config.apiUrl}v1/booking/flight-orders/${{flightOrderId}}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenId}`,
          },
        }
      );
      return res.data; 
    } catch (error) {
      console.log("Error fetching flight order:", error);
      throw error; 
    }
  }
  
  
  export async function FlightOfferPricing(tokenId,data) {
  try {
 const res = await axios.post(
      `${config.apiUrl}/v1/shopping/flight-offers/pricing`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );

    return res;
  } catch (error) {
    console.log("Pricing error:", error);
    throw error;
  }
}

  
export async function FlightCreateOrder(tokenId,data) {
  try {
 const res = await axios.post(
      `${config.apiUrl}/v1/booking/flight-orders`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );

    return res;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

export async function FlightDeleteOrder(tokenId, flightOrderId) {
  try {
    let res = await axios.delete(
      `${config.apiUrl}/v1/booking/flight-orders/${{flightOrderId}}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   }

}

export async function SeatmapDisplay(tokenId, flightOrderId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/shopping/seatmaps?flight-orderId=${flightOrderId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
    throw error; 
  }
}

export async function PriceAnalysis(originIataCode,
  destinationIataCode,
  departureDate,
  currencyCode,
  oneWay,tokenId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/analytics/itinerary-price-metrics?originIataCode=${originIataCode}&destinationIataCode=${destinationIataCode}&departureDate=${departureDate}&currencyCode=${currencyCode}&oneWay=${oneWay}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
//FlightInspiration
export async function InspirationSearch(tokenId,departureDate,origin) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/shopping/flight-destinations?departureDate=${departureDate}&origin=${origin}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function CheapestDate(tokenId,departureDate,origin,destination) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/shopping/flight-dates?origin=${origin}&destination=${destination}&departureDate=${departureDate}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function TravelRecommendation(tokenId,cityCodes,travelerCountryCode) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/recommended-locations?cityCodes=${cityCodes}&travelerCountryCode=${travelerCountryCode}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}

//FlightSchedule

export async function OnDemand(carrierCode, flightNumber, scheduledDepartureDate,tokenId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v2/schedule/flights?carrierCode=${carrierCode}&flightNumber=${flightNumber}&scheduledDepartureDate=${scheduledDepartureDate}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function AirportOnTime(airportCode,date,tokenId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/airport/predictions/on-time?airportCode=${airportCode}&date=${date}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
//Airport
export async function AirportCityByKeyword(subType,keyword,tokenId,countryCode) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations?subType=${subType}&keyword=${keyword}&countryCode=${countryCode}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function AirportCityById(tokenId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations/CMUC`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}

export async function AirportNearestRelevant(tokenId,latitude,longitude) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function AirportRoutes(tokenId,departureAirportCode,max) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/airport/direct-destinations?departureAirportCode=${departureAirportCode}&max=${max}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
//Airline
export async function FlightCheckIn(tokenId,airlineCode) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v2/reference-data/urls/checkin-links?airlineCode=${airlineCode}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function AirlineCodeLookup(tokenId,airlineCodes) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/airlines?airlineCodes=${airlineCodes}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}
export async function AirLineRoutes(tokenId,airlineCode,max) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/airline/destinations?airlineCode=${airlineCode}&max=${max}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res; 
  } catch (error) {
    console.log("Error:", error);
   
  }
}