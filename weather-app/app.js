const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather app',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errMessage, results) => {
  if (errMessage) {
    console.log(errMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}`);
      }
    });
  }
});
