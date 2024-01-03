const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        xhr.send();
    });
}

function appendElement(container, nameChild, nameChildText,className) {
    nameChild = document.createElement('h6');
    nameChild.textContent = nameChildText;
    container.append(nameChild);
    nameChild.classList.add(className)
}


sendRequest('GET', requestURL)
    .then(data => {
        const title = document.createElement('h1');
        title.textContent = 'Weather forecast';
        
        const container = document.createElement('div');
        document.body.append(container);
        container.append(title);
        container.classList.add('container');
        container.classList.add('col-12');
        title.style = 'text-align: center; margin-top: 25px; ';

        const icon = document.createElement('img');
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        container.append(icon);
        icon.style = 'padding: 10px; width: 100px'

        appendElement(container, 'city', `City: ${data.name}`, 'weatherCity');
        appendElement(container, 'temp', `Temperature: ${data.main.temp}°`, 'weatherTemp');
        appendElement(container, 'pressure', `Pressure: ${data.main.pressure}`, 'weatherPressure');
        appendElement(container, 'description ', `Description : ${data.weather[0].description}`, 'weatherDescription');
        appendElement(container, 'humidity', `Humidity  : ${data.main.humidity}`, 'weatherHumidity');    
        appendElement(container, 'speed ', `Speed   : ${data.wind.speed} m/s`, 'weatherSpeed');
        appendElement(container, 'deg', `Deg : ${data.wind.deg}°`, 'weatherDeg');
        
    })
    .catch(error => console.error(error));
