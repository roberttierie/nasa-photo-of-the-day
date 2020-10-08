import React, {useState, useEffect} from 'react'
import styled, { keyframes }from 'styled-components'

const StyledPicture = styled.div`
    img {
        padding-right: 10%;


    }

    &:hover {
    opacity:70%;
    }
`

const Picture = (props) => {
    return (
        <StyledPicture>
            <img src={props.data.url} alt="#"></img>
        </StyledPicture>
    )
}

export default Picture
