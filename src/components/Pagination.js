export default function Pagination({changeAmountOfRepositoriesPerPage, previousPage, nextPage}){
const amountOfRepositoriesPerPage = [5,10, 15, 30]
return(
    <div className='pagination'>
        <label for='pageNumbers'>Ilość wyników na stronie</label>
        <select name='pageNumbers' >
            {amountOfRepositoriesPerPage.map(repository=> <option onClick={changeAmountOfRepositoriesPerPage(repository)}>{repository}</option>)}
        </select>
        <button onClick = {previousPage} className='previous'>Poprzednia</button>
        <button onClick = {nextPage} className='previous'>Następna</button>
    </div>
)
}