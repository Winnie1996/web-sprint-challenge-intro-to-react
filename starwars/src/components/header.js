import React from "react";
import styled from 'styled-components'

const Header = () => {

  const StyledHeader = styled.div`
color:white;
font-size:50px;

h1{
color:aqua;
text-shadow: 5px 5px yellowgreen;


}
  `



  return (
    <StyledHeader className="poke-header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="logo"
      ></img>
      <h1> Check This Pokemon</h1>
    </StyledHeader>
  );
};

export default Header;