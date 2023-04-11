import styled from "styled-components";

export const ItemBackground = styled.div<{ $imageUrl: string }>`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({$imageUrl}) => `url(${$imageUrl})`};
`;

export const ItemTitle = styled.h2`
    font-variant-caps: small-caps;
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 2em;
    color: #4a4a4a;
`;

export const ItemLink = styled.p`
    font-weight: lighter;
    margin-block-start: -0.5em;
`;

export const ItemBody = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const DirectoryItem = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & ${ItemBackground} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${ItemBody} {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;
