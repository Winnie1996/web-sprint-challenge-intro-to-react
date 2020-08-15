// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'



const Character = (props) => {

    const StyledDetails = styled.div`
    color:red;
    font-size: 30px;
    border: 10px solid purple;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    padding-bottom:1%;
    width:60%;
    margin-left:21%;
    background-color:pink;



    `
 const CoolButton = styled.button`
font-size:60px;
margin-top:2%;
color:purple;
background-color:yellow;
border-radius:20px;
border:5px solid gold;
margin-bottom: 4%;
margin-right: 2%;


transition: 0.5s all ease-out;
 
 &:hover {
   background-color: palevioletred;
   color: white;
 }



`;


    function refreshPage() {
    window.location.reload(false);
  }


    let imgsrc = "";

    try
    {
        imgsrc = props.PokemonImage.other['official-artwork'].front_default;
    }
    catch(e)
    {
        console.log(e) //exception
    }

    console.log(imgsrc);



    return (
        <StyledDetails className = "pokemon-container">
            <CoolButton onClick={refreshPage}>Click to reload! </CoolButton>
            <div className = "poke-info">
                <img src = {imgsrc} alt = "lmfao"/>
                <h3>Pokemon Name: {props.Name}</h3>
                <h3>Height: {props.Height}</h3>
                <h3>Weight: {props.Weight}</h3>
            </div>
        </StyledDetails>


    )
}

export default Character