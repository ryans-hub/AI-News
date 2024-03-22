// dont do globally, put it in the function
// change variable names and function names
// five day function
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6fb29bcb805fb6f924562fe58431eff3'

var cityEntered = document.querySelector('#cityEntered');
var searchButton = document.querySelector('#searchButton');
var todaysWeather = document.querySelector('#todaysWeather');

fetch(apiUrl)
    .then(function (response) {
        if(!response.ok) {
            throw new Error('HTTP');
        }
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });


function search(event) {
    event.preventDefault();
    var city = cityEntered.ariaValueMax.trim().toLowerCase();
    if(city == '') {
        alert('Please enter City Name');
        return
    }
    cityName(city);
}

function cityName(city) {

    fetch(apiUrl)
    .then(function (response) {
        if(!response.ok) {
            throw new Error('HTTP');
        }
        return response.json();
    })
    .then(function (data){
        console.log(data)
        currentWeather(data.coord.lat, data.coord.lon);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });

}

function currentWeather(lat, lon) {
    // api endpoint here

    fetch(apiUrl)
    .then(function (response) {
        if(!response.ok) {
            throw new Error('HTTP');
        }
        return response.json();
    })
    .then(function (data){
        console.log(data)
        clearPreviousSearch();
        displayToday(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

function displayToday() {
    var cityCurrentInfo = document.createElement('div');
    cityCurrentInfo.innerHtml = ``
}

function clearPreviousSearch() {
    cityEntered.value = '';
    todaysWeather.innerHTML = '';
}

searchButton.addEventListener('click', search);