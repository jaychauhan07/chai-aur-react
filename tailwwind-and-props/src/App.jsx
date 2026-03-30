import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <h1 className='bg-blue-500 text-white p-5'>Tailwind class</h1>
      
      <Card username="John Doe" btnText="Learn more" />
      <Card username="Jane Smith" btnText="Read more" />
      <Card username="Jane Smith" btnText="Read more" />
      <Card username="Jane Smith" btnText="Read more" />
      <Card username="Jane Smith" btnText="Read more" />
      <Card username="Jane Smith" btnText="Read more" />
      <Card username="Jane Smith" btnText="Read more" />


      
    </>
  )
}

export default App
