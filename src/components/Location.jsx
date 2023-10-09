import { IconSearch } from "@tabler/icons-react"
import axios, { all } from "axios"

const Location = ({ location, setLocation }) => {

  const handleSumbit =(e)=>{
    e.preventDefault()
    const idLocation = e.target.idLocation.value;

    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(({data})=>setLocation(data))
    .catch((err)=>console.log(err))
  }

  return (
    <section className="containerHeader grid justify-center relative pt-[12rem]">
      <form onSubmit={handleSumbit} className="flex justify-center p-6 formContainer">
        <input name="idLocation" placeholder="Type a location id ... " type="number" className="decoration-white px-4"/>
        <button className="flex gap-2 items-center bg-[rgba(142,_255,_139,_0.50)] p-2" type="submit"><span className="textSearch">Search</span>  <IconSearch size={18}/></button>
      </form>
      <section className="wellcomeContainer">
        <h2 className="text-center p-3 text-[#8EFF8B]">¡Wellcome to {location?.name}!</h2>
        <ul className="flex gap-8 text-[#938686] wellcomeList">
          <li className="liLocation">Type: {location?.type}</li>
          <li className="liLocation">Dimension: {location?.dimension}</li>
          <li className="liLocation">Residents: {location?.residents.length}</li>
        </ul>
      </section>

    </section>
  )
}

export default Location