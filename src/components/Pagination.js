export default function Pagination({changeAmountOfRepositoriesPerPage, previousPage, nextPage}) {
    const selectNumbers=[5,10,15,20]
    return (
        <div className='pagination'>
            <form onChange={changeAmountOfRepositoriesPerPage}>
                <label className='text-favourites'>Ilość wyników na stronie</label>
                <select name='pageNumbers' defaultValue={selectNumbers[1]} >
                    {selectNumbers.map((item, index)=><option key={index} value={item}>{item}</option> )}
                </select>
            </form>
            <div className='buttons-previous-next'>
            <button onClick={previousPage} className='button__previous'>Poprzednia</button>
            <button onClick={nextPage} className='button__previous'>Następna</button>
            </div>
        </div>
    )
}