const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      return callback(err, null); // Pass the error to the callback
    }
        
    const data = JSON.parse(body);
    if (data.length === 0) { // Check if the breed is not found
      return callback("Error invalid breed name: " + breedName, null);
    }
        
    return callback(null, data[0].description); // Pass the description to the callback
  });
};

module.exports = fetchBreedDescription;