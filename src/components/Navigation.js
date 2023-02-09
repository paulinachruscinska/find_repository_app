import navData from "../utilities/navData";

export default function Navigation(){
    return(
        <nav>
            {navData.map(({list, id})=><div className='nav__list' key={id}>{list}</div>)}
        </nav>
    )
}