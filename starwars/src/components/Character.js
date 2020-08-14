// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const Character = (props) => {

const StyledDetails = styled.div`
color:red;
height:5vh;
width:100%;
`

return (
    <StyledDetails className = "pokemon-container">
        <div className = "poke-info">
            <img src = {props.image}></img>
            <h3>Name: {props.name}</h3>
            <h3>Height: {props.height}</h3>
            <h3>Weight: {props.weight}</h3>
        </div>
    </StyledDetails>


)
}

export default Character