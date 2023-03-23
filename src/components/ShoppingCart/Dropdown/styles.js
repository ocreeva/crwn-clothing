import styled from "styled-components";

import { Button } from "../../Button/styles";

export const ShoppingCartDropdown = styled.div`
    position: absolute;
    width: 290px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${Button} {
        margin-top: auto;
    }
`;

export const DropdownEmpty = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const DropdownItems = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;
