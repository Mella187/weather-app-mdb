//Geocoding to get the lat and lon of location im searching for.
// *Comments * For practical reasons I've chosen to limit the research to a city name request and 1 option. But for more complete apps we can also pass the zip code, state and more options of city. Maybe add a dropdown with a filter so you can choose.
import React, {useState} from "react";

const [city,setCity] = useState("")


const geoCoding_url = () =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`;

const openWeather_url = () =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&lang=it&appid=${api_key}`;
