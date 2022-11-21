import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import  './Paginate.scss'
interface PaginateInterface {
    currentPage : number,
    totalPages : number,
    paginate:Function


}
const Paginate: React.FC<PaginateInterface>= (props) => {
    const {currentPage,totalPages,paginate} = props;
    const [page,setPage]=useState<number>();
    const[totalPageNumber,setTotalPageNumber]=useState<number>();
    useEffect(()=>{
        setPage(currentPage);
        setTotalPageNumber(totalPages)
    },[currentPage,totalPages])
  return (
    <>
      <span className="pageCount">{page} - {totalPageNumber}</span>
      <button className={`paginate-button ${currentPage ===1 ? 'disable' :'' } `} onClick={()=>paginate('prev')}>Prev</button>
      <button className={`paginate-button ${currentPage ===totalPageNumber ? 'disable' :'' } `} onClick={()=>paginate('next')}> Next</button>
    </>
  );
};
Paginate.prototype = {
    currentPage:PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired,
    paginate:PropTypes.func.isRequired
}

export default Paginate;
