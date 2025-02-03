// const axios = require('axios');

// const HttpError = require('../models/http-error');

// const API_KEY = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

// async function getCoordsForAddress(address) {
//   // return {
//   //   lat: 40.7484474,
//   //   lng: -73.9871516
//   // };
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );

//   const data = response.data;

//   if (!data || data.status === 'ZERO_RESULTS') {
//     const error = new HttpError(
//       'Could not find location for the specified address.',
//       422
//     );
//     throw error;
//   }

//   const coordinates = data.results[0].geometry.location;

//   return coordinates;
// }

// module.exports = getCoordsForAddress;

const axios = require("axios");
const HttpError = require("../models/http-error");

async function getCoordsForAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (!data || data.length === 0) {
      throw new HttpError(
        "Could not find location for the specified address.",
        422
      );
    }

    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch (error) {
    throw new HttpError(
      "Failed to fetch coordinates. Please try again later.",
      500
    );
  }
}

module.exports = getCoordsForAddress;
