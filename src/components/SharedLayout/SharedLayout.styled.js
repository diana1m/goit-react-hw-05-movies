import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    background-color: #153462;
    box-shadow: 0px 2px 10px 1px black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 90px;
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: azure;
    font-size: 36px;
    font-weight: 700;
    padding: 6px 12px;
    text-transform: uppercase;
    transition-property: color, background-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    &:hover,
    &:focus {
        color: white;
    }
    &.active {
        color: white;
        background-color: #BAD1C2;
        
        border-radius: 4px;
        pointer-events: none;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
`