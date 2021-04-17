import axios from "axios";
import React, { Component } from "react";
import react from"react";
import CardComponent from"./CardComponent";
export default class FilmList extends React.Component{
    
    state={
        Film:[],
    }
 componentDidMount(){

    axios.request("https://fakestoreapi.com/products")
    .then( (response) =>{
        this.setState({Film : response.data})
    }).catch(function (error) {
        console.error(error);
    });}

    render(){
        console.log(this.state.Film)
        return (
            <div className="row " style={{  justifyContent : "space-between"}}>
      
            {this.state.Film.map((item)=>{
                return(
      
                  <CardComponent valueItem={item}  className="col-4 "/>
      
                )
            })}
                        </div>
      
      
          )
    }
    

};

