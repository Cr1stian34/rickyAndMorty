import axios from "axios"
import { useEffect, useState } from "react"
import { charatersStatus } from "../constants/residen"

const Resident = ({resident}) => {
    const [onlyOneResident, setOnlyOneResident] = useState(null)

    useEffect(() => {
        axios.get(resident)
        .then(({data})=>setOnlyOneResident(data))
        .catch((err)=>console.log(err))
    }, [])
    
    // console.log(onlyOneResident)
  return (
    <article className="cardResidenContainer">
        <header className="relative">
            <img src={onlyOneResident?.image} alt="" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-5 py-2 rounded-md flex items-center gap-2 statusContainer">
                <div className={`h-3 w-3 ${charatersStatus[onlyOneResident?.status]} rounded-full`}></div>
                <span>{onlyOneResident?.status}</span>
            </div>
        </header>
        <div className="p-4 text-sm dataContainer">
            <h4 className="text-xl pb-2">{onlyOneResident?.name}</h4>
            <ul className="grid gap-2">
                <li className="grid grid-cols-[1fr,1.5fr]"><span className="text-[#938686]">Species</span> {onlyOneResident?.species}</li>
                <li className="grid grid-cols-[1fr,1.5fr]"><span className="text-[#938686]">Origin </span>{onlyOneResident?.name}</li>
                <li className="grid grid-cols-[1fr,1.5fr]"><span className="text-[#938686]">Times appear </span>{onlyOneResident?.episode.length}</li>
            </ul>
        </div>
    </article>
  )
}

export default Resident