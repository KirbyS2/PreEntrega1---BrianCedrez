import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({id, name, img, price, stock}) => {
    return(
        <article className='Card'>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img className='CardImg' src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stpck disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    )
}

