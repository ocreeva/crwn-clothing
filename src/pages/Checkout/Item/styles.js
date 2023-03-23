import styled from "styled-components";

export const ItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const ItemName = styled.div`
    width: 23%;
`;

export const ItemQuantity = styled.div`
    display: flex;
    width: 23%;
`;

export const ItemQuantityArrow = styled.div`
    cursor: pointer;
`;

export const ItemQuantityValue = styled.span`
    margin: 0 10px;
`;

export const ItemPrice = styled.div`
    width: 23%;
`;

export const ItemRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

export const CheckoutItem = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;
