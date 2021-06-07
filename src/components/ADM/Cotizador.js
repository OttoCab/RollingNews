import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const URL_MONEDAS = process.env.REACT_APP_API_MONEDAS;

const Cotizador = () => {

    const [monedas, setMonedas] = useState([]);

    useEffect(async () => {
        try {
            const respuesta = await fetch(URL_MONEDAS);
            if (respuesta.status === 200) {
                const data = await respuesta.json();
                setMonedas([...data]);
            }
        } catch (error) {
            console.log(error);
        }
    }, [])

    if (monedas.length > 0) {
        return (
            < Carousel indicators={false} controls={false} interval="3000">
                { monedas.map((moneda, index) => (
                    <Carousel.Item key={index}>
                        <p className='text-light'>
                            <span>{moneda.casa.nombre}: </span>
                            <span>Compra: $ {moneda.casa.compra} / </span>
                            <span>Venta: $ {moneda.casa.venta}</span>
                        </p>
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    } else {
        return <></>;
    }
};

export default Cotizador;