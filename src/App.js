import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilmList from './FilmList';
import MovieList from './MovieList';
import Filter from './Filter';
import Zara from "./source/zara.jpg";
import Film2 from "./source/film2.jpg";
import Stradivarus from "./source/stradivarus.png";
import Bershka from './source/bershka.png';
import Pull from './source/pull.png';
import Jennyfer from './source/jennyfer.png';
import Celio from './source/celio.png';
import Exist from './source/exist.png';
import Oysho2 from './source/oysho2.png';
import Nav from './Nav';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Description from "./Description"

function App() {

 const objMovies=[
   {id:1,title:"Zara",describe:"Zara est la principale marque de vêtements de mode pour enfant et pour adultes de la société espagnole Inditex, qui possède aussi les marques Zara Home, Massimo Dutti, Bershka, Pull and Bear, Stradivarius, Kiddy's class, Lefties, Uterqüe, ainsi que Oysho.",img:Zara  ,rate:5,
   link:<iframe width="424" height="238" src="https://www.youtube.com/embed/gKCmezkfWbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
   {id:2,title:"Bershka",describe:"Bershka est une chaîne de magasins de prêt-à-porter pour homme et femme, fondée en 1998 par le groupe espagnol Inditex",img:Bershka ,rate:3 ,
   link:<iframe width="853" height="480" src="https://www.youtube.com/embed/f3EDNJAOy9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
   {id:3,title:"Pull & Bear",describe:"Pull and Bear est une chaîne de magasins appartenant au groupe Inditex. Les produits Pull and Bear visent la clientèle jeune.",img:Pull ,rate:5 ,
   link:<iframe width="853" height="480" src="https://www.youtube.com/embed/H0qqFvqUSvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:4,title:"Jennyfer",describe:"La boutique jennyfer est une vraie mine pour la mode et vêtement de la femme moderne : tee-shirts, débardeurs, chemises, jeans, robes, chaussures,",img:Jennyfer ,rate:3 ,
   link:<iframe width="424" height="238" src="https://www.youtube.com/embed/h9KHYKY0sSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:5,title:"Celio",describe:"Celio est une marque de prêt-à porter et accessoires dédiée exclusivement à l'homme.",img:Celio ,rate:2 ,
   link:<iframe width="853" height="480" src="https://www.youtube.com/embed/WmkPkwXFRa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:6,title:"Exist",describe:" EXIST est une marque déposée de prêt à porter pour homme, spécialisée dans la vente de vêtements, chaussures et accessoires",img:Exist ,rate:3 ,
   link:<iframe width="854" height="450" src="https://www.youtube.com/embed/rxiOYX2fwP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}, 
   {id:7,title:"Oysho",describe:"Oysho est une marque spécialisée dans la lingerie et le prêt à porter avec plusieurs lignes de produits : lingerie, accessoires, chaussures, Gymwear, maillots de bains",img:Oysho2 ,rate:1 ,
link:<iframe width="424" height="238" src="https://www.youtube.com/embed/ExpHsiCoT1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}   

 ] ;
 const [filtredFilms, setFiltredFilms] = useState(objMovies)
  
  const handelChange=(item)=>{
      let filter = objMovies.filter((val)=>val.title.toLowerCase().includes(item.toLowerCase()));
      console.log(filter)
      setFiltredFilms(filter)
    }

    const ratingChanged = (newRating) => {
      console.log(newRating)
      let filter = objMovies.filter((val)=> val.rate === newRating);
      console.log(filter)

      setFiltredFilms(filter)      
    };
  return (
    <div className="App">
       
      <BrowserRouter >
            
            <Nav />
<Switch>
  <Route  exact path="/">
  <Filter changeFn={handelChange} ratingFilter={ratingChanged}/>

            <MovieList  obj={filtredFilms}/>
            
           
  </Route>
  <Route path="/Boutique/:id" render={(props)=><Description data ={objMovies}{...props}/>}/>
  <Route path="/Produit" exact component={FilmList}/>

  </Switch>
            </BrowserRouter>
           
     
    </div>
  );
 
};


export default App;