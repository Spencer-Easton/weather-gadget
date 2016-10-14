function doGet() {
  var App = HtmlService.createTemplateFromFile('index');
  App.images = {
        compass:ScriptApp.getResource('compass.png').getDataAsString(),
        vane:ScriptApp.getResource('windvane.png').getDataAsString()
        }
  
  return App.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
}


function getCurrentWeatherData(){
  var url = "http://legacy.weather.weatherbug.com/weather-safety/online-weather-center/Data/GetData.ashx?dt=o&si=NG053&units=english&verbose=true";
  return JSON.parse(UrlFetchApp.fetch(url));  
}

function getForcastWeatherData(){
  var url = "http://legacy.weather.weatherbug.com/weather-safety/online-weather-center/Data/GetData.ashx?dt=fh&loctype=latitudelongitude&locstr=43.891945,-75.677223&units=english&fho=0&fhl=6&verbose=true"
  return JSON.parse(UrlFetchApp.fetch(url)).hourlyForecastPeriod[0];
}



  

