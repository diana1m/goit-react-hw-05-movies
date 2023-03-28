import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled.li`
    width: 300px;
    text-decoration: none; 

    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    text-align: center;
    background-color: #F6F6C9;
    border-radius: 4px;
    transition: transform 300ms linear;
    overflow: hidden;
    cursor: zoom-in;
    &:hover,
    &:focus {
        transform: scale(1.05);
        box-shadow: 0px 2px 10px 2px grey;
    }
`
export const Text = styled.p`
    text-decoration: none;
    color: #153462;
    padding: 8px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    &:hover,
    &:focus {
        color: black;
    }
`;