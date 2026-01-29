import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MyApp()
{
  return (

    <h1>Hi hello im not dirnking chai but u should</h1>
  );
}
const anotherComponent = React.createElement(
  'h1',
  {
    id:'myh1',
  },
  'This is another way of creating components'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    {anotherComponent}
  </StrictMode>,
)
