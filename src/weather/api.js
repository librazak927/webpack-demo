function transform(data) {
        return data.records.location.map((area) => {
                const info = area.weatherElement.reduce((obj, element) => {
                        obj[element.elementName] = element.time[0].parameter.parameterName;  
                                             
                        return obj;
                }, {})


                return {
                        city: area.locationName,
                        info: info,
                        
                }

        })
}

export function getLocalWeather(options, callback) {

        let request = new XMLHttpRequest();

        var queryLocalWeather = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001';

        const url = new URL(queryLocalWeather);

        const queryStr = new URLSearchParams(options);

        url.search = queryStr;

        request.open("GET", url);

        request.onreadystatechange = function () {
                if (request.readyState === 4) {
                        const data = JSON.parse(request.response);
                        
                        callback(transform(data));
                }
        };
        request.send();
}