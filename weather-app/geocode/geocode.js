const request = require('request');

module.exports.geocodeAddress = (addr, callback) => {
  const inputAddr = encodeURIComponent(addr);
  request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${inputAddr}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}
