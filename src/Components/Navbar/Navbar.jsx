import {useContext} from 'react';
import {DarkModeContext} from '../../Context/DarkContext'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import StorageIcon from '@mui/icons-material/Storage';

const Navbar = () => {

    const {dispatch} = useContext(DarkModeContext);
    return (
        <nav className="navbar">
            <div className='left-part'>
                <input className='search' type = 'text' placeholder = 'search ...'/>
                <SearchIcon className= "icon"/>
            </div>
            <div className='right-part'>
                <ul>
                    <li className='lang'><span><LanguageIcon className= "icon"/></span>English</li>
                    <li className='bright-ness'  onClick={() => dispatch({type:'toggle'})}><Brightness6Icon className='icon'/></li>
                    <li className='alarm'><AddAlertIcon className='icon'/> <span>1</span></li>
                    <li><StorageIcon className='icon'/></li>
                    <li className='image'>
                        <img 
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt='person'/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;