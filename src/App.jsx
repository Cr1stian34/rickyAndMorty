import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { randomLocation } from './utils/random'
import Location from './components/Location'
import Card from './components/Card'
import Header from './components/Header'

function App() {

  const [changeLocation, setChangeLocation] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomLocation(126)}`)
      .then(({ data }) => setChangeLocation(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className=' min-h-screen bg-black text-white px-4'>
      <Header/>
      <Location location={changeLocation} setLocation={setChangeLocation}/>
      <Card residents={changeLocation?.residents ?? []} />
    </main>
  )
}

export default App
