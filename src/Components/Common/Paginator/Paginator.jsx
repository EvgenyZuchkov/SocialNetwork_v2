import s from "./Paginator.module.css";
import {useState} from "react";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pageNumber}>
            {portionNumber > 1 && <button className={s.PrevNext} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <button
                            className={currentPage === p && s.selectedPage}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p}
                        </button>
                    )
                })}
            {portionCount > portionNumber && <button className={s.PrevNext} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator;