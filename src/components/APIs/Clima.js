import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/css/clima.css";

const URL_WEATHER = process.env.REACT_APP_API_WEATHER;

const Clima = () => {
  const [response, setResponse] = useState({
    name: "",
    description: "",
    temp: 0,
    humidity: "",
    iconId: "",
    pressure: "",
  });
  useEffect(async () => {
    try {
      const respuesta = await fetch(URL_WEATHER);
      if (respuesta.status === 200) {
        const data = await respuesta.json();

        await setResponse({
          name: data.name,
          description: data.weather[0].description,
          temp: data.main.temp,
          humidity: data.main.humidity,
          iconId: data.weather[0].icon,
          pressure: data.main.pressure,
        });
        //console.log(response.weather[0].description);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  //getIcon()

  return (
    <Row bg="Danger">
      <Col>
        <p className="text-right text-light m-0">
          <span>{response.name} | </span>
          <span>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                response.iconId +
                "@2x.png"
              }
              className="weatherIcon"
            ></img>
          </span>
          <span>Tiempo: {response.temp.toFixed(0) + "ºC"}, </span>
          <span>{response.description}, </span>
          <span>Humedad: {response.humidity + "%"}</span>
        </p>
      </Col>
    </Row>
  );
};

export default Clima;
