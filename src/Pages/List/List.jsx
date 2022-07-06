import './List.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import {NavLink} from 'react-router-dom';
import Lists from '../../Components/Lists/Lists'

const List = () => {

    return (
        <section className='list'>
             <Sidebar />
             <div className='righ-part'>
                <Navbar />
                <div className='new_head'>
                    <p>Add New User</p>
                    <div className='add_btn'>
                      <NavLink to='new' style={{textDecoration:'none', color:'#0b0'}}>
                        Add New
                      </NavLink>  
                    </div>
                </div>
                <Lists />
             </div>
        </section>
    )
}

export default List;