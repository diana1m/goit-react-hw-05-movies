import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    max-width: 800px;
    background-color:  #F6F6C9;
    border-radius: 4px;
    margin: 0 auto;
    padding: 20px;
`

export const BoxMovie = styled.div`
    display: flex;
    gap: 20px;
`

export const LinkWrapper = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    padding-left: 80px;
    margin: 30px 0;
`

export const LinkStyled = styled(Link)`
    /* text-decoration: none;
    font-size: 24px;
    &:hover,
    &:focus {
        color: black;
    } */

    text-decoration: none;
    color: #153462;
    font-size: 30px;
    font-weight: 700;
    padding: 5px 10px;
    background-color: #BAD1C2;
    border-radius: 4px;
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    &:hover,
    &:focus {
        background-color: #153462;
        color: #F6F6C9;
    }
`;