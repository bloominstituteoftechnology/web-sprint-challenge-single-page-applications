import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const NavBar = styled.div `
    display: flex;
    text-decoration: none;
    padding: 1rem;
    background-color: lightpink;
    border: 5px solid yellow;
`
export const NavBarLink = styled(Link)`
    
    text-decoration: none;
    background-color: white;
    padding: 2rem;
    text-align: center;
    margin-left: 100px;
    margin-top: 100px;
`

export const HeroBG = styled.div `
    max-width: 100%;
    position: absolute;
`
export const HeroImg = styled.img `
    max-width: 100%;

`
export const HeroH2 = styled.h2`
    font-size: 2rem;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
export const HeroBtn = styled(Link)`
    padding: 1rem;
    background: red;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`