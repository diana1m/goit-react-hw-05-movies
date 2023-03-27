import styled from "styled-components";

import { Link } from "react-router-dom";

export const Btn = styled(Link)`
    display: block;
    width: 80px;
    color: white;
    background-color: #ff7f7f;
    text-decoration: none;
    letter-spacing: 0.06em;
    border: 1px solid grey;
    border-radius: 4px;
    margin-bottom: 60px;
    padding: 12px 18px;
    cursor: pointer;
    transition: background-color 500ms linear;
    &:hover,
    &:focus {
        background-color: #e300ff;
    }
`