import Logo from "./Logo";
import Pokeball from "./Pokeball";
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PokeballContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  margin: 10px;
`;


const NavBar = ()=> {
    return (
        <>
            <NavContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <PokeballContainer>
                    <Pokeball collectionSize={20}/>
                </PokeballContainer>
            </NavContainer>
        </>
    )
}

export default NavBar;