import React, {useState, useEffect} from 'react'
import styled, { keyframes }from 'styled-components'


const kf = keyframes`
100% {
  opacity:1;

}
`
const StyledFriend = styled.div`
    h1 {
        color: red;
        background-color:yellow;
        align-items: top;
        border-style: solid;
        border-color: white;
        width: 100%;
        text-align:center;
    }
        h1:hover {
            transform: scale(1);
            text-decoration:underline;
    }

    p {
        color: white;
    }




`

const Body = (props) => {
    return (
        <StyledFriend >
            <h1>{props.data.title}</h1>
            <p>{props.data.explanation}</p>
            <p>{props.data.date}</p>
            <p>{props.data.copyright}</p>
            <p>Download HD link here: {props.data.hdurl}</p>
        </StyledFriend>
    )
}



export default Body