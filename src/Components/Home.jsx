import React from 'react'
import styled from 'styled-components'
import pizzaBanner from './Assets/Pizza.jpg'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'


const StyledContainer = styled.div`
  overflow: hidden;
`

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;
  background: url(${pizzaBanner}) no-repeat;
`

export default function Home() {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <h1>Your favorite food, delivered while coding</h1>
        <Link to="/order">
          <Button color="success" style={{ padding: '5px 30px', borderRadius: '0' }}>Pizza?</Button>
        </Link>
        {/* <StyledImg /> */}
      </StyledImgContainer>
    </StyledContainer>
  )
}