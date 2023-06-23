import { useState } from 'react'
import './App.js'
import { Grid } from './components/Grid.jsx'
import { Form } from './components/Form.jsx'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

function App() {

  return (
    <Container>
      <h2>Usuários</h2>
      <Form />
      <Grid />
    </Container>
  )
}

export default App
