import React from 'react';
import Card from './Contactos';
import Dani from '../TarjetaPresentacion/dani.jpeg'
import Gabi from '../TarjetaPresentacion/gabi.jpg'
import Fabri from '../TarjetaPresentacion/fabri.jpg'



//creamos una funcion la cual tendra dentro todos los arrays 

function crearTarjeta() {
const personal = [
    {
    id: 1,
    name: 'Gabriela Ortiz',
    title: 'Gerente de nacional Ventas',
    text: 'Gabriela descripcios',
    email: 'Gabriela@example.com',
    image: Gabi,
    url: 'https://outlook.live.com/mail/about/index_es-mx.html'
    },
    {
    id: 2,
    name: 'Daniel Gonzales',
    title: 'Gerente regional ',
    text: 'Gabriela descripcios',
    email: 'DaniGonzales@example.com',
    image: Dani,
    url: 'https://www.google.com/intl/es/gmail/about/'
    },
    {
    id: 3,
    name: 'Fabricio Rendon',
    title: 'Gerente regional ventas',
    text: 'Gabriela descripcios',
    email: 'Fabri@example.com',
    image: Fabri,
    url: 'https://www.facebook.com/?locale=es_LA'
    },
];

return (
    <div className="contenedor">
    {personal.map((person) => (
        <Card       
        key={person.id}
        image={person.image}
        name={person.name}
        title={person.title}
        text={person.text}
        email={person.email}
        url={person.url}
        />
    ))}
    </div>
);
}

export default crearTarjeta;
