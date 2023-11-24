import axios from "axios";
import config from "../../config/hotel_config";

const tokenId = "GoLYf5ehVWHRyBHpxoOO68LktSo5 ";



export async function FindHotelByCity(cityCode, tokenId) {

  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
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

export async function HotelSearch(hotelId, adults) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v3/shopping/hotel-offers?hotelIds=${hotelId}&adults=${adults}`,
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

export async function HotelListById(hotelId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations/hotels/by-hotels?hotelIds=${hotelId}`,
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

export async function HotelListByGeoCode(latitude, longitude) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations/hotels/by-geocode?latitude=${latitude}&longitude=${longitude}`,
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
//data.offer.id
export async function OfferSearchInfo(hotelOfferId) {
  try {
    let res = await axios.get(

      `${config.apiUrl}/v3/shopping/hotel-offers?=${hotelOfferId}`,
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

export async function OfferSearch(hotelOfferId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v3/shopping/hotel-offers?hotelIds=${hotelOfferId}`,

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

export async function HotelRating(hotelId) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v2/e-reputation/hotel-sentiments?hotelIds=${hotelId}`,
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

export async function HotelAutoComplete(keyword, subType) {
  try {
    let res = await axios.get(
      `${config.apiUrl}/v1/reference-data/locations/hotel?keyword=${keyword}&subType=${subType}`,
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

export async function fetchAccessToken(data) {

  // const data = {
  //   client_id: "qGiXGUhGtUPhGvP6IqBv88fiNCfZGFjl",
  //   client_secret: "rMh6LQjLgG6ukuzs",
  //   grant_type: "client_credentials",
  // };
  try {
    const res = await axios.post(
      `${config.apiUrl}/v1/security/oauth2/token`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );


    const accessToken = res.data.access_token;

    const fetchTime = new Date();
    const expirationTime = new Date(fetchTime.getTime() + 30 * 60000);

    const tokenObject = {
      token: accessToken,
      expirationTime: expirationTime.toISOString(),
      fetchTime: fetchTime.getTime(),
    };
    localStorage.setItem("tokenObject", JSON.stringify(tokenObject));

  } catch (error) {
    console.error("Error refreshing access token:", error);
  }
}


// // export async function getAccessToken() {
// //   try {
// //     let token = localStorage.getItem("accessToken");
// //     console.log("hdjfh",token)
// //     if (!token) {
// //       console.log("Token not present.");
// //       return false;
// //     }
// //  let decodedToken = jwtDecode(token);
// //     console.log("Decoded Token", decodedToken);
// //     let currentDate = new Date();

// //     if (decodedToken.exp * 1000 < currentDate.getTime()) {
// //       console.log("Token expired.");
// //     } else {
// //       console.log("Valid token");
// //       return true;
// //     }
// //   } catch (error) {
// //     console.error("Error decoding token:", error.message);
// //     return false;
// //   }
// // }

// // async function refreshAccessToken() {
// //   try {
// //     const clientId = "qGiXGUhGtUPhGvP6IqBv88fiNCfZGFjl";
// //     const clientSecret = "rMh6LQjLgG6ukuzs";

// //     const data = {
// //       grant_type: "client_credentials",
// //       client_id: clientId,
// //       client_secret: clientSecret,
// //     };

//     const res = await axios.post(
//       `${config.apiUrl}/v1/security/oauth2/token`,
//       data,
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );
//     const newAccessToken = res.data.access_token;
//     localStorage.setItem("accessToken", newAccessToken);
//   } catch (error) {
//     console.error("Error refreshing access token:", error);
//   }
// }

export async function getAccessToken() {
  const currentTime = new Date();
  const storedTokenObject = JSON.parse(localStorage.getItem("tokenObject"));

  if (currentTime < new Date(storedTokenObject.expirationTime)) {
    console.log("token is valid", storedTokenObject.token);
    return storedTokenObject.token;
  } else {
    console.log("token is not valid");
    fetchAccessToken();
  }
}

