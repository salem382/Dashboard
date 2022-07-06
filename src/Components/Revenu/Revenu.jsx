import './Revenu.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Revenu = () => {

    return (
        <section className='Revenu'>
            <div className='top'>
                <h4>Total Revenue</h4>
                <div className='icon-container'>
                    <MoreVertIcon />
                </div>
            </div>
            <div className='center'>
                <div className='progress'>
                    <span>70%</span>
                </div>
                <h3>Total sales made today</h3>
                <h4>$420</h4>
                <p>Previous transactions processing. Last payments may not be included.</p>
            </div>
            <footer>
                <div className='target'>
                    Target
                    <div> <ExpandMoreIcon className = 'icon'/><CurrencyExchangeIcon className='icon'/> 12.4K</div>
                </div>
                <div className='target'>
                    Last Week
                    <div> <KeyboardControlKeyIcon className = 'icon'/> <CurrencyExchangeIcon className='icon'/>12.4K</div>
                </div>
                <div className='target'>
                    Last Month
                    <div> <KeyboardControlKeyIcon className = 'icon'/> <CurrencyExchangeIcon className='icon'/>12.4K</div>
                </div>
            </footer>
        </section>
    )
}

export default Revenu ;