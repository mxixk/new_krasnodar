import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";
const API_WEATHER_KEY="a360fbe89d41e1b0c67e2115a10df34e";

class App extends React.Component{
  state = {
    temp:undefined,
    city:undefined,
    country:undefined,
    sunset:undefined,
    sunrise:undefined,
    error:undefined
  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER_KEY}&units=metric`);
    const data=await api_url.json();
    console.log(data);
    if(data.cod<400){
      
    
      let sunset =data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date=date.getHours() + ":"+ date.getMinutes()+":"+date.getSeconds();
      
      let sunrise =data.sys.sunrise;
      date = new Date();
      date.setTime(sunrise);
      let sunrise_date=date.getHours() + ":"+ date.getMinutes()+":"+date.getSeconds();
      this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: sunrise_date,
      sunset: sunset_date,
      error:undefined
    });}else{console.log(2)
      this.setState({
        temp:undefined,
        city:undefined,
        country:undefined,
        sunset:undefined,
        sunrise:undefined,
        error:"Введите название города"
      });

    }
  }

  render(){
    
    return (
    <div className="wrapper">
    <div className="container">
    <div className="row">
    <div className="col-sm-5 info center">
    <Info />
    </div>
     <div className="col-sm-7 form">
      <Form weatherMethod = {this.getWeather} /> 
      <Weather  temp={this.state.temp} 
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}/>
      <div>
     


      </div></div></div></div>
    </div>);
  }
}
export default App;