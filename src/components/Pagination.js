export default function Pagination({changeAmountOfRepositoriesPerPage, previousPage, nextPage}) {

    return (
        <div className='pagination'>
            <form onChange={changeAmountOfRepositoriesPerPage}>
                <label>Ilość wyników na stronie</label>
                <select name='pageNumbers' >
                    <option>5</option>
                    <option selected>10</option>
                    <option>15</option>
                    <option>30</option>
                </select>
            </form>
            <div className='buttons-previous-next'>
            <button onClick={previousPage} className='button__previous'>Poprzednia</button>
            <button onClick={nextPage} className='button__previous'>Następna</button>
            </div>
        </div>
    )
}