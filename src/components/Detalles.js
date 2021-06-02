import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Defecto from './assets/img/defecto800x600.jpg';
import imgPrueba from './assets/img/imagenNoticias.jpg';
import autorMini from './assets/img/authors/ema.jpg';
import './assets/css/detalles.css';

const Detalles = () => {
    return (
        <Container className="mt-3 mb-5">
            <NavLink to="/" className="navigation">RollingNEWS</NavLink> <NavLink to="*" className="navigation">Nombre de la categoría</NavLink>
            <hr/>
            <section className="row mt-5">
                <article className="col-md-8">
                    <h1 className="titles">Título de la noticia</h1>
                    <h4>Aquí se agrega una breve descripción de la noticia, normalmente suele tener unos 2 o tres renglones pero dependerá de la longitud de la página y de la descripción misma.</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/05/11/05/57/men-6245003_1280.jpg" alt="imagen de prueba" className="w-100 my-4"></img>
                    <p>
                        La descripción detallada debería tener al menos 3 párrafos como para que no quede tan vacío este espacio, se recomienda hacer salto de línea para crear un nuevo párrafo. Recordar reemplazar este texto con el que corresponda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aut aliquid nesciunt, amet accusamus cupiditate quidem asperiores vero doloremque sequi perspiciatis quaerat ex iusto reiciendis voluptatem molestias, est ipsa magni! Perspiciatis dolore unde vitae quo id.
                    </p>
                    <p>
                        Officiis temporibus incidunt voluptates mollitia perspiciatis nihil illo est ratione vero error cumque aut tempora numquam at aliquid veritatis ab iusto voluptas esse sit tenetur, necessitatibus soluta? Consequatur labore mollitia praesentium necessitatibus corporis. Animi nobis dignissimos sit atque explicabo earum similique odit soluta quibusdam. Accusamus commodi voluptatem quasi ea, ratione totam aperiam nihil beatae, ex corrupti provident velit quod consequuntur dicta repudiandae
                    </p>
                    <p>
                        perferendis inventore deleniti maiores quis accusantium! Facilis nostrum impedit sunt quia quae facere ad quibusdam saepe. Velit aliquid ut tenetur veniam unde vel non voluptas architecto recusandae, officiis saepe veritatis nesciunt sint ipsum quaerat, deserunt natus, inventore eos. Ad nihil accusantium voluptates voluptatem maxime provident cumque fugiat, at praesentium necessitatibus quisquam ea minima impedit maiores esse possimus similique nulla ab animi temporibus qui recusandae porro earum eaque? Debitis libero iure cupiditate aperiam quod provident doloribus sint! Inventore cupiditate ducimus autem quod qui repudiandae veritatis odit soluta nulla id laborum mollitia voluptate, delectus saepe quisquam dicta? Sint eum nobis molestias sequi modi reiciendis.
                    </p>
                    <hr className="my-5"/>
                    <p className="text-secondary">Publicado el: 01/06/2021</p>
                    <div className="row customCard py-2">
                        <div className="col-2">
                            <Card.Img src={autorMini} alt="Autor" className="autorMini"></Card.Img>
                        </div>
                        <div className="col-10">
                            <Card.Title>Autor: <span>Emanuel Alderete</span></Card.Title>
                            <Card.Text>Desarrollador web, redactor y autor en RollingNEWS. 
                            <p><small className="text-secondary"><b><i>"Aficionado a los videojuegos y la música clásica</i></b> 😉"</small></p></Card.Text>
                        </div>
                    </div>
                </article>
                <article className="col-md-4">
                    <h4><b>Otras noticias que podrían interesarte</b></h4>
                        <ul className="listaSugerencia mt-4 ml-n4">
                            <li className="d-flex align-items-center itemAnimation">
                                <img className="w-25" src={imgPrueba}></img>
                                <h5 className="ml-3">Noticia de interés.</h5>
                            </li>
                            <hr/>
                            <li className="d-flex align-items-center itemAnimation">
                                <img className="w-25" src={imgPrueba}></img>
                                <h5 className="ml-3">Otra noticia de interés.</h5>
                            </li>
                            <hr/>
                            <li className="d-flex align-items-center itemAnimation">
                                <img className="w-25" src={imgPrueba}></img>
                                <h5 className="ml-3">Otra más.</h5>
                            </li>
                            <hr/>
                            <li className="d-flex align-items-center itemAnimation">
                                <img className="w-25" src={imgPrueba}></img>
                                <h5 className="ml-3">Aquí hay otra.</h5>
                            </li>
                            <hr/>
                            <li className="d-flex align-items-center itemAnimation">
                                <img className="w-25" src={imgPrueba}></img>
                                <h5 className="ml-3">Y una noticia más por las dudas.</h5>
                            </li>
                            <li className="mt-4">
                                <h5>Para ver más artículos también puedes <NavLink className="navigation" to="/Categorias">volver a categorías</NavLink></h5>
                            </li>
                        </ul>
                </article>
            </section>
        </Container>
    );
};

export default Detalles;