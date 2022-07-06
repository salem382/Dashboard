import './Sidebar.css';
import { useContext } from 'react';
import {DarkModeContext} from '../../Context/DarkContext'
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return (
        <section className="sidebar">
            <div className='link'>
                <NavLink to='/' style={{textDecoration:"none"}} className="lk">
                    lamadmin
                </NavLink> 
            </div>
            <ul className='bottom-part'>
                <li className='head'>Main</li>
                <li><span><DashboardIcon className = "icon"/></span>Dashboard</li>
                <li className='head'>Lists</li>
                <li>
                    <span><PersonOutlineIcon className = "icon"/></span>
                    <NavLink to='/users' style={{textDecoration:"none"}} className="lk">
                        Users
                    </NavLink> 
                </li>
                <li>
                    <span><StoreIcon className = "icon"/></span>
                    <NavLink to='/Products' style={{textDecoration:"none"}} className="lk">
                         Products
                    </NavLink> 
                </li>
                <li><span><BorderColorIcon className = "icon"/></span>Orders</li>
                <li><span><LocalShippingIcon className = "icon"/></span>Delivery</li>
                <li className='head'>USEFUL</li>
                <li><span><TransferWithinAStationIcon className = "icon"/></span>Status</li>
                <li><span><NotificationsIcon className = "icon"/></span>Notifcation</li>
                <li className='head'>SERVICR</li>
                <li><span><SettingsSystemDaydreamIcon className = "icon"/></span>System Health</li>
                <li><span><PsychologyIcon className = "icon"/></span>Logs</li>
                <li><span><SettingsIcon className = "icon"/></span>Setting</li>
                <li className='head'>USER</li>
                <li><span><AccountCircleIcon className = "icon"/></span>Profile</li>
                <li><span><LogoutIcon className = "icon"/></span>Log Out</li>
            </ul>
            <div className='mode'>
                <div onClick={() => dispatch({type:'light'})} className = 'light'></div>
                <div onClick={() => dispatch({type:'dark'})} className = 'dark'></div>
            </div>
        </section>
    )
}
export default Sidebar;