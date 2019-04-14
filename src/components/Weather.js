import React from "react";
const Weather = props=>
     (<div>{props.city&&<div><h3 className="information_text">Есть такая информация о погоде в данном городе:</h3>
    
    
    <div className="flex-container"><div className="flex-item">Местоположение:{props.city},{props.country}</div> <div className="flex-item"> Восход:{props.sunset}</div></div>
    <div className="flex-container"><div className="flex-item">Температура:{props.temp}</div>  <div className="flex-item">   Закат:{props.sunrise}</div></div>
  

    </div>}</div>
  );
export default Weather;