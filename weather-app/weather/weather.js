const request = require('request');

module.exports.getWeather = (lat, long, callback) => {
request({
  url: `https://api.darksky.net/forecast/7b2a4ce4ec9fb55f4af448634803c7c8/${lat},${long}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
  } else {
    callback('Unable to fetch weather.');
  }
});
}
