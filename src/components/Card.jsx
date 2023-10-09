import { useState } from "react";
import Resident from "./Resident";
import { paginationLogic } from "../utils/pagination";

const Card = ({ residents }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const { pages, residentsInPage } = paginationLogic(currentPage, residents)


    // console.log(residentsInPage)
    // console.log(residents);
    return (
        <section className="relative">
            <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
                {
                    residentsInPage?.map((resident) => (<Resident key={resident} resident={resident} />))
                }
            </section>

            {/* paginacion */}

            <ul className="text-sm flex gap-3 justify-center pb-10">
                {
                    pages.map((page) => (
                        <li key={page}>
                            <button className={`text-[#8EFF8B] p-3 rounded-md border-0 hover:bg-[#8EFF8B] hover:text-black ${page===currentPage && "bg-green-400 text-black"} `} onClick={()=>{setCurrentPage(page)}}>{page}</button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Card