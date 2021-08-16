import s from "./Paginator.module.css";


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 20
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.pageNumber}>
                {pages.map(p => {
                    return (
                        <button
                            className={props.currentPage === p && s.selectedPage}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}>{p}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Paginator;