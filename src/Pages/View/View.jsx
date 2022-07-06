import './View.css';
import Rechart from '../../Components/Rechart/Rechart';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import List from '../../Components/Table/Table'

const View = () => {

    return (
        <section className = 'view'>
            <Sidebar />
            <div className = 'right-part'>
                <Navbar />
                <div className='view-revenu'>
                    <div className= 'info'> 
                        <div className='top-part'>
                            <p>Information</p>
                            <div>Edit</div>
                        </div>
                        <div className='person-info'>
                            <div className='image'>
                                <img src='https://c-fa.cdn.smule.com/rs-s79/arr/dd/ff/52054690-f398-4369-b377-4395c0301897.jpg' alt=''/>
                            </div>
                            <ul>
                                <h3>Jane Doe</h3>
                                <li><span>Email:</span>janedoe@gmail.com</li>
                                <li><span>Phone:</span>+1 2345 67 89</li>
                                <li><span>Address:</span>Elton St. 234 Garden Yd. NewYork</li>
                                <li><span>Country::</span>USA</li>
                            </ul>
                        </div>
                    </div>
                    <Rechart title={'User Spending ( Last 6 Months)'} aspect= {2/1}/>
                </div>
                <List title = {'Latest Transactions'}/>
            </div>
        </section>
    )
}

export default View;
