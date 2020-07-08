const fetch = require('node-fetch');
const http = require('http');
const https = require('https');

// export default (req, res) => {
module.exports = async (req, res) => {
  // if (req.method === 'get') {
    if(req.query && req.query.lon && req.query.lat) {
    const lon = req.query.lon;
    const lat = req.query.lat;
    console.log(req.query);
    if(lon != null && lat != null) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=82d474bb851a94dd0d4f75dd71aaf34c`)
    .then(res => res.json()).then(jsonData => {
      res.send(jsonData);
      //res.status(200).json(jsonData)
    })
    .catch(reason => console.error(reason));
  // }
    } else {
      console.error('Incorrect Weather Parameters Passed');
      res.send()
    }
    }

}