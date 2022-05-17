const axios = require('axios');
const path = require('path');
const fs = require('fs');
const request = require('request');
require('dotenv').config();

try {
    fs.mkdirSync(path.join(__dirname, 'images'));
} catch (err) {
    if (err.code !== 'EEXIST') {
        throw err;
    }
}

let imageName = '';

axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
    .then(response => {    
        console.log(response.data)
        imageName = response.data.date;
        request(response.data.hdurl).pipe(fs.createWriteStream(path.join(__dirname, 'images', response.data.date + '.jpg')))
        .on('finish', () => {console.log(
            'Image saved successfully'
        )});   

        fs.writeFile(path.join(__dirname, 'images', response.data.title + '.txt'), response.data.explanation, (err) => {
            if (err) throw err;
            console.log('The txt file has been saved!');
        });
    }).catch(err => {
        console.log(err);
    });