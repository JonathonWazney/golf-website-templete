import { useEffect, useState } from "react";
import "./weather.css"

export default function Weather(){
    const [weatherdata,setweatherdata] = useState(false)
     const search = async (zip) => {
        try {
            const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${zip}`;
            const reponse = await fetch(url);
            const data = await reponse.json();
            console.log(data)
            setweatherdata({
                humidity: data.current.humidity,
                temp: data.current.temp_f,
                wind:data.current.wind_mph,
                weathercondition: data.current.condition.text,
                icon: data.current.condition.icon

            })
        } catch (error) {
            
        }
        }
        useEffect(()=>{
            search('29550');
        },[])

    return(
    <div className="weathercontainer">
        <h3 className="weathertitle">HARTSVILLE, SC</h3>
        <img className= "weathericon"src={weatherdata.icon} alt="" />
        <p className="condition">{weatherdata.weathercondition}</p>
              <ul>
            <li>temp: {weatherdata.temp} degrees</li>
            <li>Humidity: {weatherdata.humidity}%</li>
            <li>Windspeed: {weatherdata.wind} MPH</li>
            
        </ul>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img className="tag"src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" />
        </a>
  
    </div>
    )
};