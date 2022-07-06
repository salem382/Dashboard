import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget from '../../Components/Widget/Widget';
import Revenu from '../../Components/Revenu/Revenu';
import Rechart from '../../Components/Rechart/Rechart';
import List from '../../Components/Table/Table'

const Home = () => {

    return (
        <section className='home'>
            <Sidebar />
            <div className='left-part'>
                <Navbar />
                <div className='widgets'>
                    <Widget type = 'user'/> 
                    <Widget type = 'order'/> 
                    <Widget type = 'earn'/> 
                    <Widget type = 'balance'/> 
                </div>
                <div className='Revenus'>
                    <Revenu />
                    <Rechart title={'Last 6 Months (Revenu)'} aspect={'3/2'}/>
                </div>
                <List />
            </div>
        </section>
    )
}

export default Home;