import styled from 'styled-components'

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 2em 1em;
     margin-bottom: 2em;
     width: 23%;
     border-radius: 1em;
     border: 2px solid #e33d33;
     box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
     background-color: #333;
     color: #fff;
  `

export const IdCard = styled.p`
    margin: 1em 0;
    background-color: #e33d33;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleCard = styled.h3`
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
`

export const BtnCard = styled.a`
    text-decoration: none;
    background: #fff;
    color: #222;
    padding: 0.7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.4;
    
    &:hover {
        background-color: #e33d33;
        color: #fff;
    }
`
