var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6fb29bcb805fb6f924562fe58431eff3'

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
