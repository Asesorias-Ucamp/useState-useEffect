import React from 'react'
import './styles.css'

const Main = ({prop}) => {
  return (
    <div className='main'>
    <p>Main</p>
    <h1>{prop}</h1>
    </div>
  )
}

export default Main