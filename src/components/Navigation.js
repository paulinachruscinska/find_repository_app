import navData from "../utilities/navData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Navigation(){
    return(
        <nav>
            <p className='logo'>.find</p>
            {navData.map(({list,icon, link, id})=>{
                return(
                    <div className='nav__list' key={id}>
                        <FontAwesomeIcon className='icon' icon={icon}/>
                        <Link to={link} className='nav__list--item'>{list}</Link>
                    </div>
                )

            })}
        </nav>
    )
}