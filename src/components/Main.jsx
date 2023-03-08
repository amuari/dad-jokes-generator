import { useState } from 'react'
import Card from '../components/Card'

const Main = () => {
  const [click, setClick] = useState('')

  const url = 'https://icanhazdadjoke.com/ '
  const apiCall = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    const res = await fetch(url, config)
    const data = await res.json()
    setClick(data.joke)
    console.log(data)
  }
  return (
    <div className='grid place-items-center'>
      <Card click={click} />
      <button onClick={apiCall} className='btn'>
        Generate
      </button>
    </div>
  )
}

export default Main
