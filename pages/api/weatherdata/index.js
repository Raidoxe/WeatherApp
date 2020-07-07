const fetch = require('node-fetch');
const http = require('http');
const https = require('https');

// export default (req, res) => {
module.exports = async (req, res) => {
  // if (req.method === 'get') {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-31.953512&lon=115.857048&exclude=minutely&units=metric&appid=82d474bb851a94dd0d4f75dd71aaf34c')
    .then(res => res.json()).then(jsonData => {
      // res.send(jsonData);
      res.status(200).json(jsonData)
    })
    .catch(reason => console.error(reason));
  // }

}