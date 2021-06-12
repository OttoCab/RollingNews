import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../ADM/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../ADM/Input';

// import Swal from 'sweetalert2';
// import emailjs from 'emailjs-com';

const Suscripcion = () => {

	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
  const [localidad, cambiarLocalidad] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
  const [codPostal, cambiarcodPostal] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    direccion: /^[a-zA-Z0-9\. ]{4,30}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
    codPostal: /^.{4}$/, // 4 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
      cambiarDireccion({campo: '', valido: null});
      cambiarLocalidad({campo: '', valido: null});
      cambiarcodPostal({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
			return;
		}
	}

  return (
    <Fragment>
      <Container>
      <Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre y apellido"
					placeholder="John Doe"
					name="nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>

<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Direccion"
					placeholder="Av. Avellaneda x"
					name="direccion"
					leyendaError="La direccion no puede contener: *,-,_,etc "
					expresionRegular={expresiones.direccion}
				/>

<Input
					estado={localidad}
					cambiarEstado={cambiarLocalidad}
					tipo="text"
					label="Localidad"
					placeholder="San Miguel de Tucuman"
					name="localidad"
					leyendaError="La localidad solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>

<Input
					estado={codPostal}
					cambiarEstado={cambiarcodPostal}
					tipo="numero"
					label="Codigo Postal"
					placeholder="4000"
					name="codPostal"
					leyendaError="El codigo postal solo puede contener numeros hasta 4"
					expresionRegular={expresiones.codPostal}
				/>

				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>

<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>

				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
      </Container>
    </Fragment>
  );
};

export default Suscripcion;
