//currentPage = es la paguina actual
//residents= es el arreglo de residentes de la dimesion actual
const paginationLogic =(currentPage, residents)=>{
    //Excepcion para el primer render
    if(residents?.length===0){
        return {
            pages: [1],
            residentsInPage: []
        }
    }
    //La cantidad de residentes por pagina

    const RESIDENTS_PER_PAGE = 20;

    const totalPages = Math.ceil(residents.length/20);

    const sliceEnd = RESIDENTS_PER_PAGE * currentPage;
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
    const residentsInPage = residents.slice(sliceStart,sliceEnd);

    //Generacino del arreglo de las paginas que se van a mostrar
    const pages = [];
    for(let i=1; i<=totalPages;i++){
        pages.push(i)
    }

    return {
        residentsInPage,
        pages,
    }
}

export {
    paginationLogic
}