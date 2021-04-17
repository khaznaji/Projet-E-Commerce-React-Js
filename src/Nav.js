import React from 'react';
import {Link} from 'react-router-dom';

function Nav (){
    return(
        <nav>
                
            <ul className='nav_links'>
                <h3>Shop </h3>
                <Link to="/">
                <li>Nos Meilleures Boutiques  </li>
                </Link>
                <Link to="/Produit">
                    <li>Nos Produits</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default Nav;
