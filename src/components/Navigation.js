import navData from "../utilities/navData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <p className='logo'>.find</p>
            <div className='nav__list'>
                {navData.map(({list, icon, link, id}) => {
                    return (
                        <div className='nav__list--items' key={id}>
                            <Link to={link}>
                                <FontAwesomeIcon className='icon' icon={icon}/>
                                <p className='nav__list--item'>{list}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}